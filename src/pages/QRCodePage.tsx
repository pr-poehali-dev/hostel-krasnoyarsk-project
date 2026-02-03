import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function QRCodePage() {
  const [qrCode, setQrCode] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const websiteUrl = 'https://красноярск-хостел.рф/';

  useEffect(() => {
    generateQRCode();
  }, []);

  const generateQRCode = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://functions.poehali.dev/6637b69c-b25e-447a-a7a3-eb20ae1c4af1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: websiteUrl }),
      });

      if (!response.ok) {
        throw new Error('Ошибка генерации QR-кода');
      }

      const data = await response.json();
      setQrCode(data.qr_code);
    } catch (err) {
      setError('Не удалось создать QR-код. Попробуйте снова.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const downloadQRCode = () => {
    if (!qrCode) return;

    const link = document.createElement('a');
    link.href = `data:image/png;base64,${qrCode}`;
    link.download = 'hostel-qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">QR-код для хостела</CardTitle>
            <CardDescription className="text-base">
              Этот QR-код ведёт на сайт: <strong>{websiteUrl}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {loading && (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="animate-spin">
                  <Icon name="Loader2" size={48} className="text-primary" />
                </div>
                <p className="text-muted-foreground">Генерация QR-кода...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <Icon name="AlertCircle" className="text-red-500 mx-auto mb-2" size={32} />
                <p className="text-red-700">{error}</p>
                <Button onClick={generateQRCode} variant="outline" className="mt-4">
                  Попробовать снова
                </Button>
              </div>
            )}

            {!loading && !error && qrCode && (
              <>
                <div className="flex justify-center bg-white p-8 rounded-lg border-2 border-dashed border-gray-300">
                  <img
                    src={`data:image/png;base64,${qrCode}`}
                    alt="QR-код хостела"
                    className="w-full max-w-md"
                  />
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={downloadQRCode}
                    size="lg"
                    className="w-full text-lg"
                  >
                    <Icon name="Download" className="mr-2" size={20} />
                    Скачать QR-код для баннера
                  </Button>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Info" className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                      <div className="text-sm text-blue-900">
                        <p className="font-semibold mb-1">Как использовать:</p>
                        <ul className="list-disc list-inside space-y-1 text-blue-800">
                          <li>Скачайте QR-код (PNG, 500×500 пикселей)</li>
                          <li>Разместите на баннере, визитках, листовках</li>
                          <li>QR-код будет работать всегда, пока активен сайт</li>
                          <li>Посетители смогут быстро попасть на ваш сайт</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
