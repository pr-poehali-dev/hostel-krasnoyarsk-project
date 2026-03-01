import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Booklet = () => {
  const bookletRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        @media print {
          .no-print { display: none !important; }
          body { margin: 0; padding: 0; background: white; }
          .booklet-wrap { box-shadow: none !important; }
          @page { margin: 0; size: A4; }
        }

        .booklet-font { font-family: 'Inter', sans-serif; }
        .booklet-heading { font-family: 'Playfair Display', serif; }

        .booklet-page {
          width: 210mm;
          min-height: 297mm;
          background: white;
          position: relative;
          overflow: hidden;
        }

        .gold { color: #B8860B; }
        .gold-bg { background-color: #B8860B; }
        .gold-border { border-color: #B8860B; }
        .dark-bg { background-color: #1a1a2e; }
        .warm-bg { background-color: #faf8f5; }
        .cream { background-color: #f9f4ed; }
      `}</style>

      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <Button onClick={handlePrint} className="shadow-lg" size="lg">
          <Icon name="Printer" size={18} className="mr-2" />
          Распечатать / Сохранить PDF
        </Button>
        <Button variant="outline" onClick={() => window.history.back()} className="shadow-lg bg-white" size="lg">
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          Назад
        </Button>
      </div>

      <div className="booklet-font min-h-screen py-8 flex flex-col items-center gap-8"
           style={{ background: '#e8e4de' }}>

        {/* === СТРАНИЦА 1: ОБЛОЖКА + НОМЕРА === */}
        <div ref={bookletRef} className="booklet-page booklet-wrap shadow-2xl" style={{ background: 'white' }}>

          {/* ОБЛОЖКА */}
          <div className="relative" style={{ height: '140mm' }}>
            <img
              src="https://cdn.poehali.dev/files/eb8724d6-68e6-414c-864c-b75035404a0a.jpg"
              alt="Хостел"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(26,26,46,0.3) 0%, rgba(26,26,46,0.85) 100%)'
            }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '10mm' }}>
              <div style={{
                display: 'inline-block', background: '#B8860B',
                color: 'white', fontSize: '9pt', fontWeight: 600,
                padding: '3px 12px', borderRadius: '2px', marginBottom: '6px', width: 'fit-content',
                letterSpacing: '2px', textTransform: 'uppercase'
              }}>
                Красноярск
              </div>
              <div className="booklet-heading" style={{ color: 'white', fontSize: '32pt', fontWeight: 700, lineHeight: 1.1, marginBottom: '6px' }}>
                Хостел на<br/>Красногорской
              </div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11pt', fontWeight: 300 }}>
                Уютное размещение • Домашняя кухня • Трансфер
              </div>
            </div>

            {/* Золотая линия */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '4px', background: '#B8860B'
            }} />
          </div>

          {/* НОМЕРА */}
          <div style={{ padding: '8mm 10mm' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6mm' }}>
              <div style={{ width: '3px', height: '22px', background: '#B8860B', borderRadius: '2px' }} />
              <div className="booklet-heading" style={{ fontSize: '18pt', fontWeight: 600, color: '#1a1a2e' }}>
                Наши номера
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5mm' }}>
              {[
                {
                  img: 'https://cdn.poehali.dev/files/a2fe496b-1941-4729-966b-81ce98db8c57.jpg',
                  title: '4-местный',
                  desc: 'Уютный номер для небольшой группы',
                  features: ['Собственный санузел', 'Душевая кабина', 'Постельное бельё']
                },
                {
                  img: 'https://cdn.poehali.dev/files/282cb7d1-99f4-4580-af2c-6b1d10169356.jpg',
                  title: '8-местный',
                  desc: 'Просторный номер для рабочих бригад',
                  features: ['Собственный санузел', 'Душевая кабина', 'Постельное бельё']
                },
                {
                  img: 'https://cdn.poehali.dev/files/07638c2d-3ec1-4753-9d1c-10ab0efcaffd.jpg',
                  title: '14-местный',
                  desc: 'Большой номер для крупных групп',
                  features: ['Собственный санузел', 'Душевая кабина', 'Постельное бельё']
                }
              ].map((room) => (
                <div key={room.title} style={{
                  border: '1px solid #e8e0d5',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  background: '#faf8f5'
                }}>
                  <img
                    src={room.img}
                    alt={room.title}
                    style={{ width: '100%', height: '35mm', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '4mm' }}>
                    <div className="booklet-heading" style={{ fontSize: '12pt', fontWeight: 600, color: '#1a1a2e', marginBottom: '2mm' }}>
                      {room.title}
                    </div>
                    <div style={{ fontSize: '8pt', color: '#666', marginBottom: '3mm', lineHeight: 1.4 }}>
                      {room.desc}
                    </div>
                    {room.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '7.5pt', color: '#444', marginBottom: '1.5mm' }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#B8860B', flexShrink: 0 }} />
                        {f}
                      </div>
                    ))}
                    <div style={{
                      marginTop: '3mm', padding: '2mm 4mm',
                      background: '#1a1a2e', color: '#B8860B',
                      borderRadius: '4px', textAlign: 'center',
                      fontSize: '9pt', fontWeight: 600
                    }}>
                      900 ₽ / место / сутки
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Галерея */}
            <div style={{ marginTop: '6mm' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4mm' }}>
                <div style={{ width: '3px', height: '22px', background: '#B8860B', borderRadius: '2px' }} />
                <div className="booklet-heading" style={{ fontSize: '18pt', fontWeight: 600, color: '#1a1a2e' }}>
                  Атмосфера
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3mm' }}>
                {[
                  'https://cdn.poehali.dev/files/0ad0e3f9-3292-4355-8e4a-a5ad41a5459d.jpg',
                  'https://cdn.poehali.dev/files/f438dff6-710a-447a-8276-b522408b2a6d.jpg',
                  'https://cdn.poehali.dev/files/3622d273-d9fb-4caa-a8c5-a21dc52fbb4e.jpg',
                ].map((src, i) => (
                  <img key={i} src={src} alt="" style={{
                    width: '100%', height: '28mm', objectFit: 'cover',
                    borderRadius: '4px', display: 'block'
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === СТРАНИЦА 2: ЦЕНЫ + КОНТАКТЫ === */}
        <div className="booklet-page booklet-wrap shadow-2xl" style={{ background: 'white' }}>

          {/* Шапка страницы 2 */}
          <div style={{
            background: '#1a1a2e',
            padding: '8mm 10mm',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
          }}>
            <div>
              <div className="booklet-heading" style={{ color: '#B8860B', fontSize: '18pt', fontWeight: 700 }}>
                Хостел на Красногорской
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '9pt', marginTop: '2px' }}>
                г. Красноярск • 2-я Красногорская улица, 3
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#B8860B', fontSize: '9pt', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                Цены и услуги
              </div>
            </div>
          </div>

          <div style={{ padding: '8mm 10mm' }}>

            {/* Цены на проживание */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6mm', marginBottom: '7mm' }}>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4mm' }}>
                  <div style={{ width: '3px', height: '20px', background: '#B8860B', borderRadius: '2px' }} />
                  <div className="booklet-heading" style={{ fontSize: '15pt', fontWeight: 600, color: '#1a1a2e' }}>
                    Проживание
                  </div>
                </div>

                <div style={{
                  background: '#faf8f5', border: '1px solid #e8e0d5',
                  borderRadius: '8px', overflow: 'hidden'
                }}>
                  <div style={{ background: '#1a1a2e', padding: '4mm 5mm' }}>
                    <div style={{ color: '#B8860B', fontSize: '9pt', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                      Тариф за койко-место
                    </div>
                  </div>
                  <div style={{ padding: '4mm 5mm' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3mm 0', borderBottom: '1px solid #e8e0d5' }}>
                      <div>
                        <div style={{ fontSize: '10pt', fontWeight: 500, color: '#1a1a2e' }}>Стандартный</div>
                        <div style={{ fontSize: '8pt', color: '#888' }}>1–6 дней</div>
                      </div>
                      <div style={{ fontSize: '14pt', fontWeight: 700, color: '#B8860B' }}>900 ₽</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3mm 0' }}>
                      <div>
                        <div style={{ fontSize: '10pt', fontWeight: 500, color: '#1a1a2e' }}>Длительное проживание</div>
                        <div style={{ fontSize: '8pt', color: '#888' }}>от 7 дней</div>
                      </div>
                      <div style={{ fontSize: '14pt', fontWeight: 700, color: '#B8860B' }}>850 ₽</div>
                    </div>
                    <div style={{
                      marginTop: '3mm', padding: '2.5mm 4mm',
                      background: '#f0ece6', borderRadius: '4px',
                      fontSize: '8pt', color: '#555', lineHeight: 1.4
                    }}>
                      В стоимость включены постельное бельё и полотенце
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4mm' }}>
                  <div style={{ width: '3px', height: '20px', background: '#B8860B', borderRadius: '2px' }} />
                  <div className="booklet-heading" style={{ fontSize: '15pt', fontWeight: 600, color: '#1a1a2e' }}>
                    Питание
                  </div>
                </div>

                <div style={{
                  background: '#faf8f5', border: '1px solid #e8e0d5',
                  borderRadius: '8px', overflow: 'hidden'
                }}>
                  <div style={{ background: '#1a1a2e', padding: '4mm 5mm' }}>
                    <div style={{ color: '#B8860B', fontSize: '9pt', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                      Домашняя кухня
                    </div>
                  </div>
                  <div style={{ padding: '4mm 5mm' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3mm 0', borderBottom: '1px solid #e8e0d5' }}>
                      <div>
                        <div style={{ fontSize: '10pt', fontWeight: 500, color: '#1a1a2e' }}>Двухразовое</div>
                        <div style={{ fontSize: '8pt', color: '#888' }}>Завтрак + Ужин</div>
                      </div>
                      <div style={{ fontSize: '14pt', fontWeight: 700, color: '#B8860B' }}>900 ₽</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3mm 0' }}>
                      <div>
                        <div style={{ fontSize: '10pt', fontWeight: 500, color: '#1a1a2e' }}>Трёхразовое</div>
                        <div style={{ fontSize: '8pt', color: '#888' }}>Завтрак + Обед + Ужин</div>
                      </div>
                      <div style={{ fontSize: '14pt', fontWeight: 700, color: '#B8860B' }}>1 100 ₽</div>
                    </div>
                    <div style={{
                      marginTop: '3mm', padding: '2.5mm 4mm',
                      background: '#f0ece6', borderRadius: '4px',
                      fontSize: '8pt', color: '#555', lineHeight: 1.4
                    }}>
                      Горячие блюда, меню обновляется ежедневно
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Услуги для компаний */}
            <div style={{ marginBottom: '7mm' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4mm' }}>
                <div style={{ width: '3px', height: '20px', background: '#B8860B', borderRadius: '2px' }} />
                <div className="booklet-heading" style={{ fontSize: '15pt', fontWeight: 600, color: '#1a1a2e' }}>
                  Для компаний и организаций
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4mm' }}>
                {[
                  { icon: '🏠', title: 'Проживание', desc: 'Размещение рабочих бригад и вахтовых сотрудников' },
                  { icon: '🍽️', title: 'Питание', desc: 'Организация питания для всей команды' },
                  { icon: '🚌', title: 'Трансфер', desc: 'Организация трансфера до объекта и обратно' },
                  { icon: '📋', title: 'Регистрация', desc: 'Миграционный учёт иностранных граждан бесплатно' },
                ].map(item => (
                  <div key={item.title} style={{
                    background: '#faf8f5', border: '1px solid #e8e0d5',
                    borderRadius: '6px', padding: '4mm', textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '20pt', marginBottom: '2mm' }}>{item.icon}</div>
                    <div style={{ fontSize: '9pt', fontWeight: 600, color: '#1a1a2e', marginBottom: '1.5mm' }}>{item.title}</div>
                    <div style={{ fontSize: '7.5pt', color: '#666', lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Время заселения */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4mm', marginBottom: '7mm' }}>
              <div style={{
                background: '#1a1a2e', borderRadius: '6px', padding: '4mm 5mm',
                display: 'flex', alignItems: 'center', gap: '4mm'
              }}>
                <div style={{ fontSize: '18pt' }}>🌅</div>
                <div>
                  <div style={{ color: '#B8860B', fontSize: '9pt', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Заселение</div>
                  <div style={{ color: 'white', fontSize: '13pt', fontWeight: 700 }}>с 14:00</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '7.5pt' }}>раннее с 08:00 — по согласованию</div>
                </div>
              </div>
              <div style={{
                background: '#1a1a2e', borderRadius: '6px', padding: '4mm 5mm',
                display: 'flex', alignItems: 'center', gap: '4mm'
              }}>
                <div style={{ fontSize: '18pt' }}>🌙</div>
                <div>
                  <div style={{ color: '#B8860B', fontSize: '9pt', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Выезд</div>
                  <div style={{ color: 'white', fontSize: '13pt', fontWeight: 700 }}>до 12:00</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '7.5pt' }}>позднее до 18:00 — по согласованию</div>
                </div>
              </div>
            </div>

            {/* Контакты + карта */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6mm' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4mm' }}>
                  <div style={{ width: '3px', height: '20px', background: '#B8860B', borderRadius: '2px' }} />
                  <div className="booklet-heading" style={{ fontSize: '15pt', fontWeight: 600, color: '#1a1a2e' }}>
                    Контакты
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3mm' }}>
                  {[
                    { icon: '📍', label: 'Адрес', value: 'г. Красноярск,\n2-я Красногорская ул., д. 3' },
                    { icon: '📞', label: 'Телефон', value: '+7 (903) 920-99-88' },
                    { icon: '✉️', label: 'Email', value: 'hostel.bl124@mail.ru' },
                    { icon: '🕐', label: 'Режим работы', value: 'Круглосуточно, 24/7' },
                  ].map(item => (
                    <div key={item.label} style={{
                      display: 'flex', gap: '3mm', alignItems: 'flex-start',
                      padding: '3mm', background: '#faf8f5',
                      borderRadius: '5px', border: '1px solid #e8e0d5'
                    }}>
                      <span style={{ fontSize: '12pt', lineHeight: 1 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: '7.5pt', color: '#B8860B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.label}</div>
                        <div style={{ fontSize: '9.5pt', color: '#1a1a2e', fontWeight: 500, whiteSpace: 'pre-line', lineHeight: 1.3 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4mm' }}>
                  <div style={{ width: '3px', height: '20px', background: '#B8860B', borderRadius: '2px' }} />
                  <div className="booklet-heading" style={{ fontSize: '15pt', fontWeight: 600, color: '#1a1a2e' }}>
                    Как нас найти
                  </div>
                </div>
                <img
                  src="https://cdn.poehali.dev/files/b7c33b32-1062-4995-9df3-17e97c480545.png"
                  alt="Карта"
                  style={{ width: '100%', borderRadius: '6px', border: '1px solid #e8e0d5', display: 'block' }}
                />
                <div style={{
                  marginTop: '2mm', padding: '2.5mm 4mm',
                  background: '#f0ece6', borderRadius: '4px',
                  fontSize: '8pt', color: '#555', textAlign: 'center'
                }}>
                  Шаговая доступность от Миграционного центра
                </div>
              </div>
            </div>

          </div>

          {/* Футер */}
          <div style={{
            background: '#1a1a2e',
            padding: '5mm 10mm',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginTop: 'auto'
          }}>
            <div className="booklet-heading" style={{ color: '#B8860B', fontSize: '12pt', fontWeight: 600 }}>
              Хостел на Красногорской
            </div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '8pt', textAlign: 'center' }}>
              Работаем 24/7 • Звоните в любое время
            </div>
            <div style={{ color: 'white', fontSize: '10pt', fontWeight: 600 }}>
              +7 (903) 920-99-88
            </div>
          </div>

        </div>

        {/* Подсказка */}
        <div className="no-print text-center text-sm text-gray-500 pb-8">
          Нажмите «Распечатать / Сохранить PDF» → в диалоге печати выберите «Сохранить как PDF»
        </div>
      </div>
    </>
  );
};

export default Booklet;
