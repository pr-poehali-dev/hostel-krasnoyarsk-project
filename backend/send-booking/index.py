import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime


def handler(event: dict, context) -> dict:
    """Отправка заявки на бронирование на email hostel.bl124@mail.ru"""
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
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
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        data = json.loads(event.get('body', '{}'))
        
        name = data.get('name', '')
        phone = data.get('phone', '')
        email = data.get('email', '')
        checkin = data.get('checkin', '')
        checkout = data.get('checkout', '')
        guests = data.get('guests', '')
        meals = data.get('meals', 'Без питания')
        message = data.get('message', '')
        
        if not all([name, phone, checkin, checkout, guests]):
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Заполните все обязательные поля'}),
                'isBase64Encoded': False
            }
        
        meals_text = {
            '': 'Без питания',
            '2': 'Двухразовое питание (+900 ₽/день)',
            '3': 'Трёхразовое питание (+1100 ₽/день)'
        }.get(meals, 'Без питания')
        
        email_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color: #d97706;">Новая заявка на бронирование</h2>
            <p><strong>Дата заявки:</strong> {datetime.now().strftime('%d.%m.%Y %H:%M')}</p>
            <hr>
            <p><strong>Имя:</strong> {name}</p>
            <p><strong>Телефон:</strong> {phone}</p>
            <p><strong>Email:</strong> {email if email else 'Не указан'}</p>
            <hr>
            <p><strong>Дата заезда:</strong> {checkin}</p>
            <p><strong>Дата выезда:</strong> {checkout}</p>
            <p><strong>Количество гостей:</strong> {guests}</p>
            <p><strong>Питание:</strong> {meals_text}</p>
            <hr>
            <p><strong>Дополнительная информация:</strong></p>
            <p>{message if message else 'Не указана'}</p>
        </body>
        </html>
        """
        
        msg = MIMEMultipart('alternative')
        msg['From'] = 'hostel.bl124@mail.ru'
        msg['To'] = 'hostel.bl124@mail.ru'
        msg['Subject'] = f'Заявка на бронирование от {name}'
        
        msg.attach(MIMEText(email_body, 'html'))
        
        email_password = os.environ.get('EMAIL_PASSWORD')
        if not email_password:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Email не настроен'}),
                'isBase64Encoded': False
            }
        
        with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
            server.login('hostel.bl124@mail.ru', email_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'}),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }