import json
import os
import boto3
import base64
from datetime import datetime

ADMIN_PASSWORD = "AVostok2026!"

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
    
    elif action == 'upload_image':
        image_data = body.get('imageData', '')
        image_name = body.get('imageName', 'image.jpg')
        
        if not image_data:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Нет данных изображения'}),
                'isBase64Encoded': False
            }
        
        try:
            if ',' in image_data:
                image_data = image_data.split(',')[1]
            
            image_bytes = base64.b64decode(image_data)
            
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            extension = image_name.split('.')[-1] if '.' in image_name else 'jpg'
            s3_key = f'hostel/rooms/{timestamp}.{extension}'
            
            content_type = 'image/jpeg'
            if extension.lower() == 'png':
                content_type = 'image/png'
            elif extension.lower() == 'webp':
                content_type = 'image/webp'
            
            s3.put_object(
                Bucket='files',
                Key=s3_key,
                Body=image_bytes,
                ContentType=content_type
            )
            
            cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{s3_key}"
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'url': cdn_url}),
                'isBase64Encoded': False
            }
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': f'Ошибка загрузки: {str(e)}'}),
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