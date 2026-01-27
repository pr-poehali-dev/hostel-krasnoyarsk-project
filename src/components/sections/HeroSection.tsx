import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-foreground leading-tight">
              Добро пожаловать в наш хостел
            </h2>
            <p className="text-xl text-muted-foreground">
              Уютное размещение в Красноярске с домашней атмосферой. 
              В шаговой доступности от Миграционного центра.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => scrollToSection('booking')} size="lg" className="text-lg">
                Забронировать
              </Button>
              <Button onClick={() => scrollToSection('about')} variant="outline" size="lg" className="text-lg">
                Узнать больше
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Users" className="text-primary" size={24} />
                <span className="text-foreground font-semibold">Комнаты от 4-х до 14-ти мест</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Utensils" className="text-primary" size={24} />
                <span className="text-foreground font-semibold">Питание</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="HardHat" className="text-primary" size={24} />
                <span className="text-foreground font-semibold">Работаем с Компаниями</span>
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
  );
};

export default HeroSection;
