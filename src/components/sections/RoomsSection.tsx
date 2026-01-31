import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface RoomsSectionProps {
  scrollToSection: (id: string) => void;
}

const RoomsSection = ({ scrollToSection }: RoomsSectionProps) => {
  const rooms = [
    {
      title: '4-местный номер',
      capacity: '4 человека',
      description: 'Уютный номер с четырьмя спальными местами, собственным санузлом и душем',
      price: '900 ₽',
      image: 'https://cdn.poehali.dev/files/eb8724d6-68e6-414c-864c-b75035404a0a.jpg'
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

  return (
    <>
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">О хостеле</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Наш хостел предлагает комфортное размещение от 4 до 14 человек в номере. 
              Каждый номер оснащен собственным туалетом и душем для вашего удобства.
              Работаем с компаниями по проживанию и питанию Ваших работников.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 pt-6 sm:pt-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Icon name="Utensils" className="text-primary mx-auto mb-4" size={40} />
                  <CardTitle>Питание</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Вкусно кормим домашней едой (на выбор два или три раза в день!)
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Icon name="Shower" className="text-primary mx-auto mb-4" size={40} />
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
                  <Icon name="MapPin" className="text-primary mx-auto mb-4" size={40} />
                  <CardTitle>Рядом с МЦ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Миграционный центр в шаговой доступности от хостела
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Icon name="Briefcase" className="text-primary mx-auto mb-4" size={40} />
                  <CardTitle>Для компаний</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Оказываем комплексную услугу Компаниям по проживанию/питанию/трансферу Ваших работников
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-12 sm:py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">Наши номера</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="relative w-full h-48 sm:h-64 overflow-hidden bg-secondary/5">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">{room.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Users" size={18} />
                    {room.capacity}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col flex-1">
                  <p className="text-sm sm:text-base text-muted-foreground flex-1">{room.description}</p>
                  <div className="flex items-center justify-between pt-3 sm:pt-4">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">{room.price}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">за койко-место</span>
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
    </>
  );
};

export default RoomsSection;