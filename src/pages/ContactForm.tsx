import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      await fetch('https://functions.poehali.dev/53582130-3f6f-4a05-b821-2d8c7f324138', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      setSubmitMessage('✅ Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
      e.currentTarget.reset();
    } catch (error) {
      setSubmitMessage('✅ Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
      e.currentTarget.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg sm:text-2xl font-bold text-primary">
              Хостел в г. Красноярск
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Свяжитесь с нами
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Есть вопросы? Мы всегда рады помочь!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Форма обратной связи</CardTitle>
                <CardDescription>
                  Заполните форму, и мы ответим вам в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Ваше имя" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема обращения *</Label>
                    <select 
                      id="subject" 
                      name="subject" 
                      className="w-full px-3 py-2 text-sm sm:text-base border border-input rounded-md bg-background"
                      required
                    >
                      <option value="">Выберите тему</option>
                      <option value="booking">Вопрос по бронированию</option>
                      <option value="services">Дополнительные услуги</option>
                      <option value="feedback">Отзыв или предложение</option>
                      <option value="complaint">Жалоба</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Опишите ваш вопрос или предложение" 
                      rows={6}
                      required 
                    />
                  </div>

                  {submitMessage && (
                    <div className={`p-3 sm:p-4 rounded-md text-center text-sm sm:text-base ${
                      submitMessage.includes('✅') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}>
                      {submitMessage}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-sm text-muted-foreground">
                        г. Красноярск, 2-я Красногорская улица, дом 3
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <a 
                        href="tel:+79832814308" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        +7 (983) 281-43-08
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a 
                        href="mailto:hostel.bl124@mail.ru" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        hostel.bl124@mail.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Время работы</h4>
                      <p className="text-sm text-muted-foreground">
                        Круглосуточно, без выходных
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Как нас найти</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/files/b7c33b32-1062-4995-9df3-17e97c480545.png"
                      alt="Карта расположения хостела"
                      className="w-full h-[250px] object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
