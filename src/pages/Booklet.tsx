import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Booklet = () => {
  const handlePrint = () => window.print();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .bfont { font-family: 'Inter', sans-serif; }
        .bhead { font-family: 'Playfair Display', serif; }

        .bpage {
          width: 210mm;
          height: 297mm;
          background: white;
          overflow: hidden;
          position: relative;
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }

        @media screen {
          .print-root {
            background: #d6d1ca;
            min-height: 100vh;
            padding: 32px 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
          }
          .bpage { box-shadow: 0 8px 40px rgba(0,0,0,0.18); }
        }

        @media print {
          html, body { margin: 0; padding: 0; background: white; }
          .no-print { display: none !important; }
          .print-root { padding: 0; gap: 0; background: white; display: block; }
          .bpage {
            width: 210mm;
            height: 297mm;
            page-break-after: always;
            box-shadow: none;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          @page { margin: 0; size: A4 portrait; }
        }
      `}</style>

      <div className="no-print" style={{ position: 'fixed', top: 16, right: 16, zIndex: 100, display: 'flex', gap: 8 }}>
        <Button onClick={handlePrint} size="lg" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
          <Icon name="Printer" size={18} className="mr-2" />
          Сохранить PDF / Печать
        </Button>
        <Button variant="outline" onClick={() => window.history.back()} size="lg" style={{ background: 'white' }}>
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          Назад
        </Button>
      </div>

      <div className="print-root bfont">

        {/* ════════════════════════════════════════
            СТРАНИЦА 1
        ════════════════════════════════════════ */}
        <div className="bpage" style={{ display: 'flex', flexDirection: 'column' }}>

          {/* ШАПКА — фото как обычный img, текст поверх */}
          <div style={{ position: 'relative', height: '80mm', overflow: 'hidden', flexShrink: 0 }}>
            <img
              src="https://cdn.poehali.dev/files/6aebe38d-8d22-4cfc-8558-fd863e1c9eef.jpg"
              alt="Хостел на Красногорской"
              style={{
                width: '100%', height: '80mm',
                objectFit: 'cover', display: 'block',
                printColorAdjust: 'exact',
              }}
            />
            {/* Градиент-оверлей */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(10,10,30,0.25) 0%, rgba(10,10,30,0.80) 100%)',
              printColorAdjust: 'exact',
            }} />
            {/* Золотая полоса снизу */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: 5, background: '#B8860B',
              printColorAdjust: 'exact',
            }} />
            {/* Текст */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '0 10mm 8mm',
            }}>
              <div style={{
                display: 'inline-block', background: '#B8860B', color: 'white',
                fontSize: 8, fontWeight: 700, letterSpacing: 2,
                textTransform: 'uppercase', padding: '3px 11px',
                borderRadius: 2, marginBottom: 6, width: 'fit-content',
                printColorAdjust: 'exact',
              }}>
                г. Красноярск
              </div>
              <div className="bhead" style={{ color: 'white', fontSize: 30, fontWeight: 700, lineHeight: 1.1, marginBottom: 5 }}>
                Хостел на Красногорской
              </div>
              <div style={{ color: 'rgba(255,255,255,0.88)', fontSize: 10.5, fontWeight: 300 }}>
                Уютное размещение&nbsp;&nbsp;•&nbsp;&nbsp;Домашняя кухня&nbsp;&nbsp;•&nbsp;&nbsp;Трансфер
              </div>
            </div>
          </div>

          {/* ТЕЛО СТРАНИЦЫ 1 */}
          <div style={{ padding: '4mm 10mm 0', flex: 1, display: 'flex', flexDirection: 'column' }}>

            {/* Заголовок "Наши номера" */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '3mm' }}>
              <div style={{ width: 3, height: 18, background: '#B8860B', borderRadius: 2, flexShrink: 0 }} />
              <div className="bhead" style={{ fontSize: 15, fontWeight: 600, color: '#1a1a2e' }}>Наши номера</div>
            </div>

            {/* 3 номера */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4mm', marginBottom: '4mm' }}>
              {[
                { img: 'https://cdn.poehali.dev/files/a2fe496b-1941-4729-966b-81ce98db8c57.jpg', title: '4-местный' },
                { img: 'https://cdn.poehali.dev/files/282cb7d1-99f4-4580-af2c-6b1d10169356.jpg', title: '8-местный' },
                { img: 'https://cdn.poehali.dev/files/07638c2d-3ec1-4753-9d1c-10ab0efcaffd.jpg', title: '14-местный' },
              ].map(room => (
                <div key={room.title} style={{ border: '1px solid #e2d9ce', borderRadius: 6, overflow: 'hidden', background: '#faf8f5' }}>
                  <img src={room.img} alt={room.title} style={{ width: '100%', height: '30mm', objectFit: 'cover', display: 'block' }} />
                  <div style={{ padding: '2.5mm 3.5mm' }}>
                    <div className="bhead" style={{ fontSize: 11, fontWeight: 600, color: '#1a1a2e', marginBottom: '2mm' }}>{room.title}</div>
                    {['Санузел и душ в номере', 'Постельное бельё и полотенце'].map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 7.5, color: '#444', marginBottom: '1.5mm' }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#B8860B', flexShrink: 0, printColorAdjust: 'exact' }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Галерея */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '3mm', marginTop: '4mm' }}>
              <div style={{ width: 3, height: 18, background: '#B8860B', borderRadius: 2, flexShrink: 0 }} />
              <div className="bhead" style={{ fontSize: 15, fontWeight: 600, color: '#1a1a2e' }}>Атмосфера</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4mm', marginBottom: '4mm' }}>
              {[
                'https://cdn.poehali.dev/files/0ad0e3f9-3292-4355-8e4a-a5ad41a5459d.jpg',
                'https://cdn.poehali.dev/files/f438dff6-710a-447a-8276-b522408b2a6d.jpg',
                'https://cdn.poehali.dev/files/3622d273-d9fb-4caa-a8c5-a21dc52fbb4e.jpg',
              ].map((src, i) => (
                <img key={i} src={src} alt="" style={{ width: '100%', height: '44mm', objectFit: 'cover', objectPosition: 'center', borderRadius: 4, display: 'block' }} />
              ))}
            </div>
          </div>

          {/* Футер стр.1 */}
          <div style={{
            background: '#1a1a2e', padding: '3mm 10mm',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexShrink: 0,
            printColorAdjust: 'exact',
          }}>
            <div className="bhead" style={{ color: '#B8860B', fontSize: 11, fontWeight: 700 }}>Хостел на Красногорской</div>
            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 7.5 }}>г. Красноярск, 2-я Красногорская ул., д. 3</div>
            <div style={{ color: 'white', fontSize: 10, fontWeight: 600 }}>+7 (903) 920-99-88</div>
          </div>
        </div>


        {/* ════════════════════════════════════════
            СТРАНИЦА 2
        ════════════════════════════════════════ */}
        <div className="bpage">

          {/* Шапка стр.2 */}
          <div style={{
            background: '#1a1a2e', padding: '5.5mm 10mm',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            printColorAdjust: 'exact',
          }}>
            <div className="bhead" style={{ color: '#B8860B', fontSize: 16, fontWeight: 700 }}>Хостел на Красногорской</div>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 8.5 }}>Цены, услуги и контакты</div>
          </div>

          <div style={{ padding: '6mm 10mm' }}>

            {/* Цены — 2 колонки */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5mm', marginBottom: '5mm' }}>

              {/* Проживание */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '3mm' }}>
                  <div style={{ width: 3, height: 18, background: '#B8860B', borderRadius: 2, flexShrink: 0 }} />
                  <div className="bhead" style={{ fontSize: 14, fontWeight: 600, color: '#1a1a2e' }}>Проживание</div>
                </div>
                <div style={{ border: '1px solid #e2d9ce', borderRadius: 7, overflow: 'hidden' }}>
                  <div style={{ background: '#1a1a2e', padding: '3mm 4mm', printColorAdjust: 'exact' }}>
                    <div style={{ color: '#B8860B', fontSize: 7.5, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Тариф за койко-место / сутки</div>
                  </div>
                  <div style={{ background: '#faf8f5', padding: '0 4mm' }}>
                    {[
                      { label: 'Стандартный', sub: '1–6 дней', price: '900 ₽' },
                      { label: 'Длительное', sub: 'от 7 дней', price: '850 ₽' },
                    ].map((r, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '3.5mm 0',
                        borderBottom: i === 0 ? '1px solid #e2d9ce' : 'none',
                      }}>
                        <div>
                          <div style={{ fontSize: 9.5, fontWeight: 500, color: '#1a1a2e' }}>{r.label}</div>
                          <div style={{ fontSize: 7.5, color: '#888' }}>{r.sub}</div>
                        </div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: '#B8860B' }}>{r.price}</div>
                      </div>
                    ))}
                    <div style={{ padding: '2.5mm 0 3mm', fontSize: 7.5, color: '#666', lineHeight: 1.4 }}>
                      Постельное бельё и полотенце включены
                    </div>
                  </div>
                </div>
              </div>

              {/* Питание */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '3mm' }}>
                  <div style={{ width: 3, height: 18, background: '#B8860B', borderRadius: 2, flexShrink: 0 }} />
                  <div className="bhead" style={{ fontSize: 14, fontWeight: 600, color: '#1a1a2e' }}>Питание</div>
                </div>
                <div style={{ border: '1px solid #e2d9ce', borderRadius: 7, overflow: 'hidden' }}>
                  <div style={{ background: '#1a1a2e', padding: '3mm 4mm', printColorAdjust: 'exact' }}>
                    <div style={{ color: '#B8860B', fontSize: 7.5, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Домашняя кухня / в день</div>
                  </div>
                  <div style={{ background: '#faf8f5', padding: '0 4mm' }}>
                    {[
                      { label: 'Двухразовое', sub: 'Завтрак + Ужин', price: '900 ₽' },
                      { label: 'Трёхразовое', sub: 'Завтрак + Обед + Ужин', price: '1 100 ₽' },
                    ].map((r, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '3.5mm 0',
                        borderBottom: i === 0 ? '1px solid #e2d9ce' : 'none',
                      }}>
                        <div>
                          <div style={{ fontSize: 9.5, fontWeight: 500, color: '#1a1a2e' }}>{r.label}</div>
                          <div style={{ fontSize: 7.5, color: '#888' }}>{r.sub}</div>
                        </div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: '#B8860B' }}>{r.price}</div>
                      </div>
                    ))}
                    <div style={{ padding: '2.5mm 0 3mm', fontSize: 7.5, color: '#666', lineHeight: 1.4 }}>
                      Горячие блюда, меню обновляется ежедневно
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Заселение / выезд */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4mm', marginBottom: '5mm' }}>
              {[
                { emoji: '🌅', label: 'Заселение', time: 'с 14:00', note: 'раннее с 08:00 — по согласованию' },
                { emoji: '🌙', label: 'Выезд', time: 'до 12:00', note: 'позднее до 18:00 — по согласованию' },
              ].map(item => (
                <div key={item.label} style={{
                  background: '#1a1a2e', borderRadius: 7, padding: '3.5mm 4.5mm',
                  display: 'flex', alignItems: 'center', gap: '3.5mm',
                  printColorAdjust: 'exact',
                }}>
                  <span style={{ fontSize: 20 }}>{item.emoji}</span>
                  <div>
                    <div style={{ color: '#B8860B', fontSize: 7.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{item.label}</div>
                    <div style={{ color: 'white', fontSize: 14, fontWeight: 700 }}>{item.time}</div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 7 }}>{item.note}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Услуги для компаний */}
            <div style={{ marginBottom: '5mm' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '3mm' }}>
                <div style={{ width: 3, height: 18, background: '#B8860B', borderRadius: 2, flexShrink: 0 }} />
                <div className="bhead" style={{ fontSize: 14, fontWeight: 600, color: '#1a1a2e' }}>Услуги для компаний и организаций</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3mm' }}>
                {[
                  { emoji: '🏠', title: 'Проживание', desc: 'Размещение вахтовых сотрудников и бригад' },
                  { emoji: '🍽️', title: 'Питание', desc: 'Организация питания для всей команды' },
                  { emoji: '🚌', title: 'Трансфер', desc: 'Доставка до объекта и обратно' },
                  { emoji: '📋', title: 'Регистрация', desc: 'Миграционный учёт иностранцев — бесплатно' },
                ].map(item => (
                  <div key={item.title} style={{
                    background: '#faf8f5', border: '1px solid #e2d9ce',
                    borderRadius: 7, padding: '3.5mm', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 18, marginBottom: '1.5mm' }}>{item.emoji}</div>
                    <div style={{ fontSize: 8.5, fontWeight: 700, color: '#1a1a2e', marginBottom: '1.5mm' }}>{item.title}</div>
                    <div style={{ fontSize: 7, color: '#666', lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Контакты + карта */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '5mm' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '3mm' }}>
                  <div style={{ width: 3, height: 18, background: '#B8860B', borderRadius: 2, flexShrink: 0 }} />
                  <div className="bhead" style={{ fontSize: 14, fontWeight: 600, color: '#1a1a2e' }}>Контакты</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5mm' }}>
                  {[
                    { emoji: '📍', label: 'Адрес', value: 'г. Красноярск, 2-я Красногорская ул., д. 3' },
                    { emoji: '📞', label: 'Телефон', value: '+7 (903) 920-99-88' },
                    { emoji: '✉️', label: 'Email', value: 'hostel.bl124@mail.ru' },
                    { emoji: '🕐', label: 'Режим работы', value: 'Круглосуточно, 24/7, без выходных' },
                  ].map(item => (
                    <div key={item.label} style={{
                      display: 'flex', gap: '3mm', alignItems: 'center',
                      background: '#faf8f5', border: '1px solid #e2d9ce',
                      borderRadius: 5, padding: '2.5mm 3.5mm',
                    }}>
                      <span style={{ fontSize: 13, flexShrink: 0 }}>{item.emoji}</span>
                      <div>
                        <div style={{ fontSize: 7, color: '#B8860B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.label}</div>
                        <div style={{ fontSize: 9, color: '#1a1a2e', fontWeight: 500, lineHeight: 1.3 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '3mm' }}>
                  <div style={{ width: 3, height: 18, background: '#B8860B', borderRadius: 2, flexShrink: 0 }} />
                  <div className="bhead" style={{ fontSize: 14, fontWeight: 600, color: '#1a1a2e' }}>Как нас найти</div>
                </div>
                <img
                  src="https://cdn.poehali.dev/files/b7c33b32-1062-4995-9df3-17e97c480545.png"
                  alt="Карта"
                  style={{ width: '100%', borderRadius: 6, border: '1px solid #e2d9ce', display: 'block' }}
                />
                <div style={{
                  marginTop: '2mm', background: '#f0ece6', borderRadius: 4,
                  padding: '2mm 3mm', fontSize: 7.5, color: '#555', textAlign: 'center',
                }}>
                  Шаговая доступность от Миграционного центра
                </div>
              </div>
            </div>

          </div>

          {/* Футер стр.2 */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: '#B8860B', padding: '4mm 10mm',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            printColorAdjust: 'exact',
          }}>
            <div style={{ color: 'white', fontSize: 10, fontWeight: 700 }}>+7 (903) 920-99-88</div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 8.5, textAlign: 'center' }}>
              Звоните в любое время — мы работаем круглосуточно
            </div>
            <div style={{ color: 'white', fontSize: 9, fontWeight: 600 }}>hostel.bl124@mail.ru</div>
          </div>
        </div>

        {/* Подсказка на экране */}
        <div className="no-print" style={{ color: '#888', fontSize: 13, textAlign: 'center', paddingBottom: 24 }}>
          Нажмите «Сохранить PDF / Печать» → в диалоге выберите «Сохранить как PDF», поля — «Нет»
        </div>
      </div>
    </>
  );
};

export default Booklet;