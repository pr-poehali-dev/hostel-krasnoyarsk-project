import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import RoomsSection from '@/components/sections/RoomsSection';
import PricesSection from '@/components/sections/PricesSection';
import BookingSection from '@/components/sections/BookingSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

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
            <h1 className="text-2xl font-bold text-primary">Хостел в г. Красноярск</h1>
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

      <HeroSection scrollToSection={scrollToSection} />
      <RoomsSection scrollToSection={scrollToSection} />
      <PricesSection />
      <BookingSection />
    </div>
  );
};

export default Index;
