import json
import os
import boto3

ADMIN_PASSWORD = "admin2026"

def handler(event: dict, context) -> dict:
    '''Админ-панель для управления контентом хостела'''
    
    method = event.get('httpMethod', 'GET')
    
    print(f"=== REQUEST ===")
    print(f"Method: {method}")
    print(f"Body: {event.get('body', 'EMPTY')}")
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Метод не поддерживается'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
    except:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Неверный формат данных'}),
            'isBase64Encoded': False
        }
    
    password = body.get('password', '')
    action = body.get('action', '')
    
    if password != ADMIN_PASSWORD:
        return {
            'statusCode': 401,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Неверный пароль'}),
            'isBase64Encoded': False
        }
    
    s3 = boto3.client('s3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )
    
    content_key = 'admin/content.json'
    
    if action == 'get':
        try:
            response = s3.get_object(Bucket='files', Key=content_key)
            content_data = response['Body'].read().decode('utf-8')
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': content_data,
                'isBase64Encoded': False
            }
        except:
            default_content = {
                "hero": {
                    "title": "Хостел в центре Красноярска",
                    "subtitle": "Комфортное проживание по доступным ценам"
                },
                "rooms": [
                    {
                        "title": "Эконом",
                        "description": "Базовый комфорт",
                        "price": "500₽/сутки",
                        "image": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
                        "features": ["Wi-Fi", "Общая кухня", "Душ"]
                    }
                ],
                "contact": {
                    "title": "Контакты",
                    "phone": "+7 (123) 456-78-90",
                    "email": "info@hostel.ru",
                    "address": "г. Красноярск, ул. Примерная, 1",
                    "workingHours": "Круглосуточно"
                }
            }
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps(default_content, ensure_ascii=False),
                'isBase64Encoded': False
            }
    
    elif action == 'save':
        content = body.get('content', {})
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
            'body': json.dumps({'success': True}),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 400,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Неизвестное действие'}),
        'isBase64Encoded': False
    }