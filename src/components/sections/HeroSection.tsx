import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
              Добро пожаловать в наш хостел
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground">
              Уютное размещение в Красноярске с домашней атмосферой. 
              В шаговой доступности от Миграционного центра.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button onClick={() => scrollToSection('booking')} size="lg" className="text-base sm:text-lg w-full sm:w-auto">
                Забронировать
              </Button>
              <Button onClick={() => scrollToSection('about')} variant="outline" size="lg" className="text-base sm:text-lg w-full sm:w-auto">
                Узнать больше
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 pt-2 sm:pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Users" className="text-primary" size={20} />
                <span className="text-sm sm:text-base text-foreground font-semibold">Комнаты от 4-х до 14-ти мест</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Utensils" className="text-primary" size={20} />
                <span className="text-sm sm:text-base text-foreground font-semibold">Питание</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="HardHat" className="text-primary" size={20} />
                <span className="text-sm sm:text-base text-foreground font-semibold">Работаем с Компаниями</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://cdn.poehali.dev/files/eb8724d6-68e6-414c-864c-b75035404a0a.jpg"
              alt="Хостел"
              className="w-full h-[280px] sm:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;