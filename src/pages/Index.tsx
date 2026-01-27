import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const rooms = [
    {
      title: '4-местный номер',
      capacity: '4 человека',
      description: 'Уютный номер с четырьмя спальными местами, собственным санузлом и душем',
      price: '900 ₽',
      image: 'https://cdn.poehali.dev/projects/b9b6d5e9-7202-4033-b63f-07de5b1cf926/files/1e57c102-155b-4e6a-8ff6-2b0824e1320c.jpg'
    },
    {
      title: '8-местный номер',
      capacity: '8 человек',
      description: 'Просторный номер с восемью спальными местами, собственным санузлом и душем',
      price: '900 ₽',
      image: 'https://cdn.poehali.dev/projects/b9b6d5e9-7202-4033-b63f-07de5b1cf926/files/1e57c102-155b-4e6a-8ff6-2b0824e1320c.jpg'
    },
    {
      title: '14-местный номер',
      capacity: '14 человек',
      description: 'Большой номер для группы с собственным санузлом и душем',
      price: '900 ₽',
      image: 'https://cdn.poehali.dev/projects/b9b6d5e9-7202-4033-b63f-07de5b1cf926/files/1e57c102-155b-4e6a-8ff6-2b0824e1320c.jpg'
    }
  ];

  const mealPlans = [
    {
      type: 'Двухразовое питание',
      meals: ['Завтрак', 'Ужин'],
      price: '900 ₽/день',
      menu: 'Домашняя кухня с горячими блюдами'
    },
    {
      type: 'Трёхразовое питание',
      meals: ['Завтрак', 'Обед', 'Ужин'],
      price: '1100 ₽/день',
      menu: 'Полноценное питание с первыми и вторыми блюдами'
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/b9b6d5e9-7202-4033-b63f-07de5b1cf926/files/1e57c102-155b-4e6a-8ff6-2b0824e1320c.jpg',
    'https://cdn.poehali.dev/projects/b9b6d5e9-7202-4033-b63f-07de5b1cf926/files/917215e9-8372-44bd-b9a9-87e34f9e18f6.jpg',
    'https://cdn.poehali.dev/projects/b9b6d5e9-7202-4033-b63f-07de5b1cf926/files/7f4b772b-684a-4398-b450-5618168197bb.jpg'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Хостел Красноярск</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О нас', 'Номера', 'Цены', 'Галерея', 'Контакты'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'about', 'rooms', 'prices', 'gallery', 'contacts'][index])}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-24 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-foreground leading-tight">
                Добро пожаловать в наш хостел
              </h2>
              <p className="text-xl text-muted-foreground">
                Уютное размещение в центре Красноярска с домашней атмосферой. 
                Удобное расположение рядом с Миграционным центром.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('booking')} size="lg" className="text-lg">
                  Забронировать
                </Button>
                <Button onClick={() => scrollToSection('about')} variant="outline" size="lg" className="text-lg">
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={24} />
                  <span className="text-foreground font-semibold">До 14 мест</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Utensils" className="text-primary" size={24} />
                  <span className="text-foreground font-semibold">Питание</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <span className="text-foreground font-semibold">Центр города</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/b9b6d5e9-7202-4033-b63f-07de5b1cf926/files/7f4b772b-684a-4398-b450-5618168197bb.jpg"
                alt="Хостел"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">О хостеле</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наш хостел предлагает комфортное размещение от 4 до 14 человек в номере. 
              Каждый номер оснащен собственным туалетом и душем для вашего удобства.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Icon name="Bed" className="text-primary mx-auto mb-4" size={48} />
                  <CardTitle>Чистое белье</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    При заселении выдается чистое постельное белье и полотенце
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Icon name="Shower" className="text-primary mx-auto mb-4" size={48} />
                  <CardTitle>Личный санузел</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Каждый номер с собственным туалетом и душем
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Icon name="MapPinned" className="text-primary mx-auto mb-4" size={48} />
                  <CardTitle>Удобное расположение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    В шаговой доступности от Миграционного центра
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Наши номера</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-2xl">{room.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Users" size={18} />
                    {room.capacity}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{room.description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-3xl font-bold text-primary">{room.price}</span>
                    <span className="text-sm text-muted-foreground">за койко-место</span>
                  </div>
                  <Button className="w-full" onClick={() => scrollToSection('booking')}>
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">Цены и питание</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Полный пансион с домашней кухней
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2">
                <CardHeader className="bg-secondary/20">
                  <CardTitle className="text-3xl text-center">Проживание</CardTitle>
                </CardHeader>
                <CardContent className="pt-8 space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">900 ₽</div>
                    <p className="text-muted-foreground">койко-место / сутки</p>
                  </div>
                  <div className="border-t pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">850 ₽</div>
                      <p className="text-muted-foreground">при проживании более 7 дней</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-4">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <p className="text-sm">Чистое постельное белье и полотенце</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <p className="text-sm">Собственный туалет и душ в номере</p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {mealPlans.map((plan, index) => (
                  <Card key={index} className="border-2">
                    <CardHeader className="bg-accent/10">
                      <CardTitle className="text-2xl">{plan.type}</CardTitle>
                      <CardDescription className="text-lg">{plan.menu}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl font-bold text-primary">{plan.price}</div>
                        <div className="flex gap-2">
                          {plan.meals.map((meal, i) => (
                            <span key={i} className="px-3 py-1 bg-secondary/30 rounded-full text-sm">
                              {meal}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="example-menu">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <Icon name="Utensils" className="text-primary" />
                        Примерное меню
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div>
                        <h4 className="font-semibold mb-2">Завтрак</h4>
                        <p className="text-muted-foreground">Каша, яйца, выпечка, чай/кофе</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Обед</h4>
                        <p className="text-muted-foreground">Суп, второе блюдо, гарнир, компот</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Ужин</h4>
                        <p className="text-muted-foreground">Горячее блюдо, салат, чай</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Галерея</h2>
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
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkin">Дата заезда *</Label>
                      <Input id="checkin" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkout">Дата выезда *</Label>
                      <Input id="checkout" type="date" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Количество гостей *</Label>
                    <Input id="guests" type="number" min="1" placeholder="Укажите количество" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meals">Питание</Label>
                    <select id="meals" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option value="">Без питания</option>
                      <option value="2">Двухразовое питание (+900 ₽/день)</option>
                      <option value="3">Трёхразовое питание (+1100 ₽/день)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea id="message" placeholder="Особые пожелания или вопросы" rows={4} />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    Отправить заявку
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
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      г. Красноярск, в шаговой доступности от Миграционного центра
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (___) ___-__-__</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@hostel-krsk.ru</p>
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
            <div className="bg-muted rounded-xl flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <Icon name="Map" className="text-primary mx-auto" size={64} />
                <p className="text-muted-foreground">Карта будет здесь</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Хостел Красноярск</p>
          <p className="text-sm opacity-90">Уютное размещение с домашней атмосферой</p>
          <p className="text-xs opacity-75 mt-4">© 2026 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
