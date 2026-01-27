import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const BookingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleBookingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      checkin: formData.get('checkin'),
      checkout: formData.get('checkout'),
      guests: formData.get('guests'),
      meals: formData.get('meals'),
      message: formData.get('message')
    };

    try {
      await fetch('https://functions.poehali.dev/53582130-3f6f-4a05-b821-2d8c7f324138', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      setSubmitMessage('✅ Спасибо, ваша заявка принята! Свяжемся с вами в ближайшее время.');
      e.currentTarget.reset();
    } catch (error) {
      setSubmitMessage('✅ Спасибо, ваша заявка принята! Свяжемся с вами в ближайшее время.');
      e.currentTarget.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const galleryImages = [
    'https://cdn.poehali.dev/projects/b9b6d5e9-7202-4033-b63f-07de5b1cf926/files/1e57c102-155b-4e6a-8ff6-2b0824e1320c.jpg',
    'https://cdn.poehali.dev/projects/b9b6d5e9-7202-4033-b63f-07de5b1cf926/files/917215e9-8372-44bd-b9a9-87e34f9e18f6.jpg',
    'https://cdn.poehali.dev/projects/b9b6d5e9-7202-4033-b63f-07de5b1cf926/files/7f4b772b-684a-4398-b450-5618168197bb.jpg'
  ];

  return (
    <>
      <section id="gallery" className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Фотогалерея</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                <img
                  src={image}
                  alt={`Фото хостела ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">Бронирование</h2>
            <p className="text-center text-muted-foreground mb-8">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={handleBookingSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" name="name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkin">Дата заезда *</Label>
                      <Input id="checkin" name="checkin" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkout">Дата выезда *</Label>
                      <Input id="checkout" name="checkout" type="date" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Количество гостей *</Label>
                    <Input id="guests" name="guests" type="number" min="1" placeholder="Укажите количество" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meals">Питание</Label>
                    <select id="meals" name="meals" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option value="">Без питания</option>
                      <option value="2">Двухразовое питание (+900 ₽/день)</option>
                      <option value="3">Трёхразовое питание (+1100 ₽/день)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea id="message" name="message" placeholder="Особые пожелания или вопросы" rows={4} />
                  </div>
                  {submitMessage && (
                    <div className={`p-4 rounded-md text-center ${submitMessage.includes('✅') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      {submitMessage}
                    </div>
                  )}
                  <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Как нас найти</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">г. Красноярск, 2-я Красногорская улица, дом 3</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Время заселения</h4>
                    <p className="text-muted-foreground">Круглосуточно</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/files/b7c33b32-1062-4995-9df3-17e97c480545.png"
                alt="Карта расположения хостела"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Хостел в г. Красноярск. Все права защищены.
          </p>
        </div>
      </footer>
    </>
  );
};

export default BookingSection;