import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HouseRules = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg sm:text-2xl font-bold text-primary">
              Хостел в г. Красноярск
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 sm:mb-8">
          Правила проживания в хостеле
        </h1>

        <div className="prose prose-sm sm:prose-base max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">1. Режим работы</h2>
            <div className="bg-secondary/20 p-4 sm:p-6 rounded-lg space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="Clock" className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1">Стойка регистрации</p>
                  <p className="text-muted-foreground">Круглосуточно, 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="LogIn" className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1">Время заселения (check-in)</p>
                  <p className="text-muted-foreground">С 14:00 (возможно раннее заселение с 08:00 при наличии свободных мест за доплату)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="LogOut" className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1">Время выселения (check-out)</p>
                  <p className="text-muted-foreground">До 12:00 (возможно позднее выселение до 18:00 при наличии свободных мест за доплату)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Moon" className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1">Тихий час</p>
                  <p className="text-muted-foreground">С 23:00 до 08:00 (просьба соблюдать тишину и не беспокоить других гостей)</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2. Условия заселения и выселения</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">2.1. Документы при заселении</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  При заселении все гости обязаны предъявить оригинал документа, удостоверяющего личность:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Граждане РФ:</strong> паспорт гражданина РФ</li>
                  <li><strong>Иностранные граждане:</strong> паспорт, миграционная карта, документ, подтверждающий право на пребывание в РФ (виза, разрешение на временное проживание и т.д.)</li>
                  <li><strong>Несовершеннолетние (до 14 лет):</strong> свидетельство о рождении</li>
                  <li><strong>Несовершеннолетние (14-18 лет):</strong> паспорт РФ + нотариально заверенное согласие родителей/опекунов при заселении без сопровождения взрослых</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">2.2. Регистрация по месту пребывания (для граждан РФ)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Согласно законодательству РФ, граждане России, прибывшие в место пребывания на срок более 90 дней, 
                  обязаны встать на регистрационный учет. Администрация хостела оказывает содействие в оформлении 
                  временной регистрации при проживании свыше 90 дней.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">2.3. Постановка на миграционный учет (для иностранных граждан)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  В соответствии с <strong>Федеральным законом от 18.07.2006 № 109-ФЗ</strong> и 
                  <strong> Федеральным законом от 25.07.2002 № 115-ФЗ «О правовом положении иностранных граждан в Российской Федерации»</strong>, 
                  иностранные граждане обязаны встать на миграционный учет по месту пребывания:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-3">
                  <li><strong>Граждане стран ЕАЭС</strong> (Армения, Беларусь, Казахстан, Киргизия): в течение <strong>30 дней</strong> с момента прибытия в РФ</li>
                  <li><strong>Граждане других иностранных государств:</strong> в течение <strong>7 рабочих дней</strong> с момента прибытия в место пребывания</li>
                  <li><strong>Граждане Украины</strong> (при наличии безвизового режима): в течение <strong>7 рабочих дней</strong></li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong>Администрация хостела обязуется:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-3">
                  <li>Поставить иностранного гостя на миграционный учет <strong>в день заселения</strong></li>
                  <li>Подать уведомление о прибытии иностранного гражданина в орган МВД России</li>
                  <li>Выдать гостю отрывную часть уведомления о прибытии (корешок) с отметкой органа МВД</li>
                  <li>Провести постановку на учет бесплатно для гостей, проживающих в хостеле</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Важно:</strong> При заселении иностранному гостю необходимо предъявить миграционную карту с отметкой о въезде в РФ. 
                  Без миграционной карты постановка на учет невозможна. Постановка на учет происходит непосредственно в день заселения.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">2.4. Процедура заселения</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Предъявление документа, удостоверяющего личность</li>
                  <li>Заполнение анкеты гостя (имя, контактный телефон, данные документа)</li>
                  <li>Оплата проживания (наличными или картой)</li>
                  <li>Ознакомление с правилами проживания (подпись гостя)</li>
                  <li>Получение ключей/карты доступа в номер</li>
                  <li>Внесение залога за ключи (возвращается при выселении) — 500 рублей</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">2.5. Процедура выселения</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Освобождение номера до 12:00</li>
                  <li>Сдача ключей/карты доступа на стойке регистрации</li>
                  <li>Осмотр номера администратором на предмет сохранности имущества</li>
                  <li>Возврат залога за ключи (при отсутствии повреждений)</li>
                  <li>Получение документов об оплате (по запросу)</li>
                </ol>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  <strong>При досрочном выселении:</strong> возврат средств за неиспользованные дни не производится, 
                  за исключением случаев, предусмотренных Пользовательским соглашением (форс-мажор, вина хостела).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">3. Правила поведения в хостеле</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="Volume2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Соблюдение тишины</h4>
                  <p className="text-sm text-muted-foreground">
                    С 23:00 до 08:00 просьба не шуметь, не включать громко музыку и телевизор, не разговаривать на повышенных тонах. 
                    В общих номерах будьте особенно внимательны к другим гостям.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Icon name="Cigarette" className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Запрет на курение</h4>
                  <p className="text-sm text-muted-foreground">
                    Курение в помещениях хостела категорически запрещено (в том числе электронных сигарет и вейпов). 
                    Для курения предусмотрена специальная зона на улице. Штраф за курение в номере — 3000 рублей.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Beer" className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Алкоголь и запрещенные вещества</h4>
                  <p className="text-sm text-muted-foreground">
                    Употребление алкоголя в общих зонах запрещено. Хранение и употребление наркотических и психотропных веществ 
                    категорически запрещено. Нарушение данного правила влечет немедленное выселение без возврата оплаты 
                    и обращение в правоохранительные органы.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Users" className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Посетители</h4>
                  <p className="text-sm text-muted-foreground">
                    Гости хостела могут приглашать посетителей только с разрешения администрации и только в дневное время (с 08:00 до 23:00). 
                    Пребывание посетителей в номере после 23:00 запрещено. Проживание незарегистрированных лиц в номере запрещено.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Flame" className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Пожарная безопасность</h4>
                  <p className="text-sm text-muted-foreground">
                    Запрещено пользоваться открытым огнем, свечами, нагревательными приборами (кроме чайника на общей кухне). 
                    При обнаружении задымления или возгорания немедленно сообщите администрации и покиньте здание по эвакуационным выходам.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Dog" className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Животные</h4>
                  <p className="text-sm text-muted-foreground">
                    Проживание с домашними животными возможно только по предварительному согласованию с администрацией 
                    и за дополнительную плату (500 рублей/сутки). Животные должны быть привиты, иметь ветеринарный паспорт.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Utensils" className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Общая кухня</h4>
                  <p className="text-sm text-muted-foreground">
                    Пользование кухней и посудой бесплатно. После приготовления пищи просьба убирать за собой, мыть посуду 
                    и возвращать ее на место. Не оставляйте продукты в холодильнике без подписи — они будут утилизированы через 3 дня.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="ShowerHead" className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Санузел и душевая</h4>
                  <p className="text-sm text-muted-foreground">
                    Общая ванная комната доступна круглосуточно. Просьба соблюдать чистоту, не оставлять личные вещи. 
                    После использования душа убедитесь, что вода перекрыта.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4. Имущество и безопасность</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">4.1. Ответственность за имущество хостела</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Гость несет полную материальную ответственность за порчу или утрату имущества хостела 
                  (мебель, постельное белье, посуда, бытовая техника, сантехника и т.д.).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  При обнаружении повреждений составляется акт, и с гостя взимается компенсация в размере рыночной стоимости 
                  поврежденного/утраченного имущества.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4.2. Хранение ценностей</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Администрация не несет ответственности за ценные вещи, деньги, документы, оставленные без присмотра в номерах 
                  или общих зонах.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Для хранения ценностей рекомендуется использовать личные замки на шкафчиках (в общих номерах) 
                  или сейф на стойке регистрации (бесплатно).
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4.3. Утеря ключей</h3>
                <p className="text-muted-foreground leading-relaxed">
                  При утере ключей от номера взимается штраф в размере 1000 рублей (стоимость замены замка). 
                  Залог за ключи в этом случае не возвращается.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5. Последствия нарушения правил</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Администрация хостела оставляет за собой право отказать в предоставлении услуг или досрочно выселить гостя 
              без возврата оплаты в следующих случаях:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Грубое нарушение правил проживания (курение в номере, шум в ночное время после предупреждения, агрессивное поведение)</li>
              <li>Порча имущества хостела</li>
              <li>Хранение или употребление наркотических веществ</li>
              <li>Проживание незарегистрированных лиц</li>
              <li>Отказ предъявить документы при заселении</li>
              <li>Создание угрозы безопасности для других гостей</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">6. Контактная информация</h2>
            <div className="bg-secondary/20 p-4 sm:p-6 rounded-lg">
              <p className="font-semibold mb-3">По всем вопросам обращайтесь к администрации хостела:</p>
              <p className="text-muted-foreground">Адрес: г. Красноярск, 2-я Красногорская улица, дом 3</p>
              <p className="text-muted-foreground">Email: <a href="mailto:hostel.bl124@mail.ru" className="text-primary hover:underline">hostel.bl124@mail.ru</a></p>
              <p className="text-muted-foreground">Телефон: <a href="tel:+79832814308" className="text-primary hover:underline">+7 (983) 281-43-08</a></p>
              <p className="text-muted-foreground mt-3">Стойка регистрации работает круглосуточно</p>
            </div>
          </section>

          <div className="bg-primary/10 p-4 sm:p-6 rounded-lg border-l-4 border-primary mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Важно:</strong> Заселяясь в хостел, вы автоматически соглашаетесь с настоящими Правилами проживания, 
              <Link to="/terms" className="text-primary hover:underline ml-1">Пользовательским соглашением</Link> и 
              <Link to="/privacy" className="text-primary hover:underline ml-1">Политикой конфиденциальности</Link>.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mt-8 pt-6 border-t">
            Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseRules;