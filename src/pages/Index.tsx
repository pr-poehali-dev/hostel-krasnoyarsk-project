import { useState } from 'react';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/sections/HeroSection';
import RoomsSection from '@/components/sections/RoomsSection';
import PricesSection from '@/components/sections/PricesSection';
import GallerySection from '@/components/sections/GallerySection';
import BookingSection from '@/components/sections/BookingSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-2xl font-bold text-primary">Хостел в г. Красноярск</h1>
            
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

            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={28} />
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 pb-3 space-y-2 border-t pt-3">
              {['Главная', 'О нас', 'Номера', 'Цены', 'Галерея', 'Контакты'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'about', 'rooms', 'prices', 'gallery', 'contacts'][index])}
                  className="block w-full text-left px-3 py-2.5 text-base text-foreground hover:text-primary hover:bg-secondary/20 rounded-md transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <HeroSection scrollToSection={scrollToSection} />
      <RoomsSection scrollToSection={scrollToSection} />
      <PricesSection />
      <GallerySection />
      <BookingSection />
    </div>
  );
};

export default Index;