import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-foreground/95 backdrop-blur-sm shadow-2xl border-t border-background/20 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Icon name="Cookie" className="text-background flex-shrink-0 mt-1" size={24} />
            <div className="text-background">
              <p className="text-sm sm:text-base font-medium mb-2">
                Мы используем файлы cookie
              </p>
              <p className="text-xs sm:text-sm text-background/80 leading-relaxed">
                Этот сайт использует файлы cookie для улучшения работы и анализа посещаемости. 
                Продолжая использовать сайт, вы соглашаетесь с использованием cookie в соответствии с нашей{' '}
                <Link to="/privacy" className="underline hover:text-background/90 transition-colors">
                  Политикой конфиденциальности
                </Link>.
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              onClick={handleAccept}
              size="lg"
              className="flex-1 sm:flex-none bg-background text-foreground hover:bg-background/90"
            >
              Принять
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
