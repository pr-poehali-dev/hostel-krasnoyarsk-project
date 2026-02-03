import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface ContentData {
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  rooms: Array<{
    title: string;
    description: string;
    price: string;
    image: string;
    features: string[];
  }>;
  contact: {
    title: string;
    phone: string;
    email: string;
    address: string;
    workingHours: string;
  };
}

export default function AdminPage() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const API_URL = 'https://functions.poehali.dev/e602c064-6e4a-4626-a8ef-49031a158115';

  const handleLogin = async () => {
    if (!token.trim()) {
      setMessage('Введите токен');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_URL}?token=${encodeURIComponent(token)}`);

      if (response.ok) {
        const data = await response.json();
        setContent(data);
        setIsLoggedIn(true);
        localStorage.setItem('adminToken', token);
        setMessage('Успешный вход');
      } else {
        setMessage('Неверный токен');
      }
    } catch (error) {
      setMessage('Ошибка подключения');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!content) return;

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_URL}?token=${encodeURIComponent(token)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      });

      if (response.ok) {
        setMessage('✅ Изменения сохранены');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('❌ Ошибка сохранения');
      }
    } catch (error) {
      setMessage('❌ Ошибка подключения');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken('');
    setContent(null);
    localStorage.removeItem('adminToken');
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Вход в админ-панель</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="token">Токен авторизации</Label>
              <Input
                id="token"
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Введите токен"
              />
            </div>
            {message && (
              <p className="text-sm text-destructive">{message}</p>
            )}
            <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Вход...' : 'Войти'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" className="animate-spin mx-auto mb-4" size={48} />
          <p>Загрузка данных...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Админ-панель</h1>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => window.open('/qr', '_blank')}>
              <Icon name="QrCode" className="mr-2" size={20} />
              QR-код
            </Button>
            <Button onClick={handleSave} disabled={loading}>
              <Icon name="Save" className="mr-2" size={20} />
              {loading ? 'Сохранение...' : 'Сохранить'}
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <Icon name="LogOut" className="mr-2" size={20} />
              Выйти
            </Button>
          </div>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg ${message.includes('✅') ? 'bg-green-500/10 text-green-700' : 'bg-red-500/10 text-red-700'}`}>
            {message}
          </div>
        )}

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Главный экран</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Заголовок</Label>
                <Input
                  value={content.hero.title}
                  onChange={(e) =>
                    setContent({ ...content, hero: { ...content.hero, title: e.target.value } })
                  }
                />
              </div>
              <div>
                <Label>Подзаголовок</Label>
                <Input
                  value={content.hero.subtitle}
                  onChange={(e) =>
                    setContent({ ...content, hero: { ...content.hero, subtitle: e.target.value } })
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Номера</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {content.rooms.map((room, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <h3 className="font-semibold">Номер {index + 1}</h3>
                  <div>
                    <Label>Название</Label>
                    <Input
                      value={room.title}
                      onChange={(e) => {
                        const newRooms = [...content.rooms];
                        newRooms[index].title = e.target.value;
                        setContent({ ...content, rooms: newRooms });
                      }}
                    />
                  </div>
                  <div>
                    <Label>Описание</Label>
                    <Textarea
                      value={room.description}
                      onChange={(e) => {
                        const newRooms = [...content.rooms];
                        newRooms[index].description = e.target.value;
                        setContent({ ...content, rooms: newRooms });
                      }}
                    />
                  </div>
                  <div>
                    <Label>Цена</Label>
                    <Input
                      value={room.price}
                      onChange={(e) => {
                        const newRooms = [...content.rooms];
                        newRooms[index].price = e.target.value;
                        setContent({ ...content, rooms: newRooms });
                      }}
                    />
                  </div>
                  <div>
                    <Label>URL изображения</Label>
                    <Input
                      value={room.image}
                      onChange={(e) => {
                        const newRooms = [...content.rooms];
                        newRooms[index].image = e.target.value;
                        setContent({ ...content, rooms: newRooms });
                      }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Контакты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Телефон</Label>
                <Input
                  value={content.contact.phone}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      contact: { ...content.contact, phone: e.target.value }
                    })
                  }
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  value={content.contact.email}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      contact: { ...content.contact, email: e.target.value }
                    })
                  }
                />
              </div>
              <div>
                <Label>Адрес</Label>
                <Input
                  value={content.contact.address}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      contact: { ...content.contact, address: e.target.value }
                    })
                  }
                />
              </div>
              <div>
                <Label>Часы работы</Label>
                <Input
                  value={content.contact.workingHours}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      contact: { ...content.contact, workingHours: e.target.value }
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-center">
          <Button onClick={handleSave} disabled={loading} size="lg">
            <Icon name="Save" className="mr-2" size={20} />
            {loading ? 'Сохранение...' : 'Сохранить все изменения'}
          </Button>
        </div>
      </div>
    </div>
  );
}