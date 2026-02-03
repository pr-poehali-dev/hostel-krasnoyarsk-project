import json
import os
import boto3

def handler(event: dict, context) -> dict:
    '''API для управления контентом сайта через админ-панель'''
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    admin_token = ''
    body_data = {}
    
    raw_body = event.get('body', '{}')
    print(f"DEBUG: Method: {method}")
    print(f"DEBUG: Raw body: {raw_body}")
    
    if method == 'POST':
        try:
            body_data = json.loads(raw_body)
            print(f"DEBUG: Parsed body_data: {body_data}")
            admin_token = body_data.get('token', '')
        except Exception as e:
            print(f"DEBUG: Error parsing body: {e}")
    
    expected_token = os.environ.get('ADMIN_TOKEN', '')
    
    print(f"DEBUG: Received token: '{admin_token}'")
    print(f"DEBUG: Expected token from env: '{expected_token}'")
    print(f"DEBUG: Token match: {admin_token == expected_token}")
    
    if method == 'POST' and (not admin_token or admin_token != expected_token):
        return {
            'statusCode': 401,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Неверный токен авторизации'})
        }
    
    s3 = boto3.client('s3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )
    
    content_key = 'data/content.json'
    
    if method == 'POST':
        action = body_data.get('action', '')
        
        if action == 'login':
            try:
                response = s3.get_object(Bucket='files', Key=content_key)
                content_data = response['Body'].read().decode('utf-8')
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': content_data
                }
            except Exception:
                with open('/var/task/default-content.json', 'r', encoding='utf-8') as f:
                    default_content = f.read()
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': default_content
                }
        
        elif action == 'save':
            content = body_data.get('content', {})
            content_json = json.dumps(content, ensure_ascii=False, indent=2)
            
            s3.put_object(
                Bucket='files',
                Key=content_key,
                Body=content_json.encode('utf-8'),
                ContentType='application/json'
            )
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': True, 'message': 'Контент успешно обновлен'})
            }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Метод не поддерживается'})
    }