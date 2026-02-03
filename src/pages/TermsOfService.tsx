import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TermsOfService = () => {
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
          Пользовательское соглашение (Договор оферты)
        </h1>

        <div className="prose prose-sm sm:prose-base max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Настоящее Пользовательское соглашение (далее – Соглашение) является публичной офертой в соответствии со статьей 437 
              Гражданского кодекса Российской Федерации и регулирует отношения между Индивидуальным предпринимателем 
              Горякиным Александром Александровичем (ИНН: 890405283300, ОГРНИП: 325723200125202), 
              именуемым в дальнейшем «Исполнитель», и физическим лицом, именуемым в дальнейшем «Клиент», 
              при предоставлении услуг временного размещения в хостеле, расположенном по адресу: 
              г. Красноярск, 2-я Красногорская улица, дом 3.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Принятием (акцептом) условий настоящего Соглашения является:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-3">
              <li>Отправка заявки на бронирование через форму на сайте</li>
              <li>Бронирование по телефону</li>
              <li>Оплата услуг</li>
              <li>Фактическое заселение в хостел</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Акцепт настоящей оферты означает полное и безоговорочное принятие Клиентом всех условий Соглашения без каких-либо изъятий и ограничений.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2. Предмет соглашения</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              По настоящему Соглашению Исполнитель обязуется предоставить Клиенту услуги временного размещения (проживания) 
              в хостеле, расположенном по адресу: г. Красноярск, 2-я Красногорская улица, дом 3, а Клиент обязуется 
              оплатить эти услуги и соблюдать правила проживания.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3 font-semibold">
              Услуги включают:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-3">
              <li>Предоставление спального места в номере выбранной категории (общий номер или отдельный номер)</li>
              <li>Предоставление постельного белья и полотенец</li>
              <li>Доступ к общим зонам хостела (кухня, ванная комната, душевая, зона отдыха, коридоры)</li>
              <li>Пользование коммунальными услугами (электричество, вода, отопление, Wi-Fi)</li>
              <li>Пользование кухонным оборудованием и посудой</li>
              <li>Хранение личных вещей в отведенных местах</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-3 font-semibold">
              Дополнительные услуги (оплачиваются отдельно):
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Питание (завтрак, обед, ужин)</li>
              <li>Трансфер от/до вокзала, аэропорта</li>
              <li>Стирка и глажка белья</li>
              <li>Продление времени проживания (ранний заезд/поздний выезд)</li>
              <li>Другие услуги по согласованию с Исполнителем</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">3. Порядок оказания услуг</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">3.1. Порядок заключения договора</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Договор на оказание услуг размещения считается заключенным с момента акцепта Клиентом настоящей публичной оферты 
                  (отправка заявки, звонок, оплата или фактическое заселение).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  После получения заявки Исполнитель в течение 24 часов связывается с Клиентом для подтверждения бронирования, 
                  уточнения деталей и согласования условий проживания.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3.2. Порядок предоставления услуг</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Клиент прибывает в хостел в согласованную дату и время</li>
                  <li>При заселении Клиент предъявляет документ, удостоверяющий личность</li>
                  <li>Исполнитель фиксирует данные документа в журнале регистрации (в соответствии с требованиями законодательства РФ)</li>
                  <li>Клиент производит оплату услуг согласно действующим тарифам</li>
                  <li>Исполнитель передает Клиенту ключи от номера (при отдельном номере) или предоставляет доступ к общему номеру</li>
                  <li>Исполнитель информирует Клиента о правилах проживания и расположении общих зон</li>
                  <li>Клиент размещается в номере и может пользоваться услугами хостела в соответствии с условиями Соглашения</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3.3. Порядок выселения</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  В день выезда Клиент обязан освободить номер до 12:00 (расчетный час), сдать ключи (при наличии) и 
                  пройти процедуру выселения с проверкой сохранности имущества.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  В случае выявления порчи или утраты имущества составляется акт с указанием размера ущерба. 
                  Клиент обязан возместить ущерб до момента выезда либо в течение 3 рабочих дней после выезда.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3.4. Приемка услуг</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Услуги считаются принятыми Клиентом и оказанными Исполнителем надлежащим образом, если в течение срока проживания 
                  или в момент выезда Клиент не предъявил письменных претензий по качеству услуг. По требованию Клиента 
                  Исполнитель предоставляет акт об оказании услуг.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4. Бронирование и порядок расчетов</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">3.1. Порядок бронирования</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Бронирование осуществляется путем заполнения формы на сайте или по телефону. После получения заявки 
                  Исполнитель связывается с Клиентом для подтверждения бронирования и уточнения деталей.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3.2. Оплата услуг</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Оплата производится наличными или безналичным способом при заселении. Возможна предоплата по согласованию 
                  с Исполнителем. Цены на услуги размещения указаны на сайте и могут быть изменены в зависимости от сезона 
                  и загруженности хостела.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Стоимость услуг включает НДС (Исполнитель применяет упрощенную систему налогообложения). 
                  По запросу Клиента предоставляется документ, подтверждающий оплату (квитанция, акт об оказании услуг).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3.3. Отмена и изменение бронирования</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Клиент вправе отменить или изменить бронирование без штрафных санкций не позднее чем за 24 часа до даты заезда. 
                  При отмене бронирования менее чем за 24 часа, предоплата не возвращается.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Исполнитель вправе отменить бронирование в случае форс-мажорных обстоятельств с полным возвратом предоплаты Клиенту.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5. Права и обязанности сторон</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">5.1. Исполнитель обязан:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Предоставить Клиенту услуги в соответствии с условиями настоящего Соглашения</li>
                  <li>Обеспечить соответствие номера и услуг заявленной категории и описанию на сайте</li>
                  <li>Обеспечить чистоту и порядок в общих зонах хостела</li>
                  <li>Обеспечить исправность коммунальных услуг и оборудования</li>
                  <li>Принимать меры по обеспечению безопасности Клиентов и их имущества</li>
                  <li>Не разглашать персональные данные Клиента третьим лицам без его согласия</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">5.2. Исполнитель имеет право:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Требовать от Клиента соблюдения правил проживания</li>
                  <li>Требовать возмещения ущерба, причиненного имуществу хостела</li>
                  <li>Отказать в заселении при отсутствии документов, удостоверяющих личность</li>
                  <li>Досрочно расторгнуть договор при грубом нарушении Клиентом правил проживания</li>
                  <li>Изменять цены на услуги с уведомлением на сайте</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">5.3. Клиент обязан:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Соблюдать правила проживания, установленные в разделе 6 настоящего Соглашения</li>
                  <li>Своевременно оплатить услуги размещения</li>
                  <li>Бережно относиться к имуществу хостела</li>
                  <li>Возместить ущерб в случае порчи или утраты имущества</li>
                  <li>Предъявить документ, удостоверяющий личность, при заселении</li>
                  <li>Соблюдать тишину в установленное время</li>
                  <li>Освободить номер в расчетный час</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">5.4. Клиент имеет право:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Получать услуги надлежащего качества в соответствии с условиями Соглашения</li>
                  <li>Требовать устранения недостатков в оказании услуг</li>
                  <li>Расторгнуть договор досрочно с соблюдением порядка, установленного разделом 7</li>
                  <li>Получить документы, подтверждающие оплату услуг</li>
                  <li>Пользоваться всеми услугами, включенными в стоимость проживания</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">6. Правила проживания</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">4.1. Время заселения и выселения</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Заселение возможно круглосуточно по предварительному согласованию. Расчетный час – 12:00. 
                  При желании продлить проживание необходимо заранее уведомить Исполнителя о своих намерениях.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">4.2. Документы при заселении</h3>
                <p className="text-muted-foreground leading-relaxed">
                  При заселении Клиент обязан предъявить паспорт или иной документ, удостоверяющий личность. 
                  Данные документа фиксируются Исполнителем в соответствии с требованиями законодательства РФ.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">4.3. Правила проживания</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Соблюдать тишину с 23:00 до 08:00</li>
                  <li>Не курить в помещениях хостела</li>
                  <li>Не приводить посторонних лиц без согласования с администрацией</li>
                  <li>Бережно относиться к имуществу хостела</li>
                  <li>Соблюдать правила пожарной безопасности</li>
                  <li>Не хранить запрещенные законом предметы и вещества</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">7. Ответственность сторон</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">5.1. Ответственность Клиента</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Клиент несет материальную ответственность за порчу или утрату имущества хостела. В случае причинения 
                  ущерба Клиент обязуется возместить его стоимость в полном объеме.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">5.2. Ответственность Исполнителя</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Исполнитель не несет ответственности за сохранность личных вещей Клиента, не сданных на хранение. 
                  Исполнитель обязуется предоставить услуги надлежащего качества в соответствии с условиями настоящего Соглашения.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">8. Возврат денежных средств и порядок расторжения договора</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">6.1. Основания для возврата</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Возврат денежных средств производится в следующих случаях:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Отмена бронирования Клиентом не менее чем за 24 часа до даты заезда – полный возврат предоплаты</li>
                  <li>Невозможность предоставления услуг по вине Исполнителя – полный возврат оплаты в течение 3 рабочих дней</li>
                  <li>Некачественное оказание услуг – возврат пропорционально неоказанным услугам по согласованию сторон</li>
                  <li>Досрочное выселение по инициативе Клиента – возврат за неиспользованные дни проживания за вычетом фактически оказанных услуг</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">6.2. Порядок возврата</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Возврат денежных средств осуществляется тем же способом, которым была произведена оплата, в течение 10 рабочих дней 
                  с момента обращения Клиента. Для возврата необходимо направить письменное заявление на email: hostel.bl124@mail.ru 
                  с указанием реквизитов для возврата.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">6.3. Расторжение договора</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Договор может быть расторгнут по инициативе любой из сторон с уведомлением не менее чем за 24 часа. 
                  Исполнитель вправе расторгнуть договор в одностороннем порядке без предупреждения в случае грубого нарушения 
                  Клиентом правил проживания (п. 4.3 настоящего Соглашения) без возврата оплаты.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">9. Форс-мажор</h2>
            <p className="text-muted-foreground leading-relaxed">
              Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по настоящему 
              Соглашению, если это неисполнение явилось следствием обстоятельств непреодолимой силы (пожар, наводнение, 
              землетрясение, военные действия, акты государственных органов и т.п.).
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">10. Разрешение споров</h2>
            <p className="text-muted-foreground leading-relaxed">
              Все споры и разногласия решаются путем переговоров. В случае недостижения согласия спор передается 
              на рассмотрение в суд по месту нахождения Исполнителя в соответствии с законодательством РФ.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">11. Персональные данные</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Обработка персональных данных Клиента осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ 
              «О персональных данных» и Политикой конфиденциальности, размещенной на сайте.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Акцептуя настоящее Соглашение, Клиент дает согласие на обработку своих персональных данных в целях:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-3">
              <li>Исполнения обязательств по настоящему Соглашению</li>
              <li>Связи с Клиентом по вопросам бронирования и проживания</li>
              <li>Выполнения требований законодательства РФ о регистрации граждан по месту пребывания</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Клиент вправе отозвать согласие на обработку персональных данных в порядке, предусмотренном 
              <Link to="/privacy" className="text-primary hover:underline ml-1">Политикой конфиденциальности</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">12. Заключительные положения</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Настоящее Соглашение вступает в силу с момента его акцепта Клиентом и действует до полного исполнения 
              сторонами своих обязательств.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Исполнитель вправе вносить изменения в Соглашение в одностороннем порядке, размещая новую редакцию 
              на сайте. Новая редакция вступает в силу через 3 дня с момента размещения. Продолжение использования услуг 
              после вступления изменений в силу означает согласие Клиента с новыми условиями.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Во всем остальном, что не предусмотрено настоящим Соглашением, стороны руководствуются действующим 
              законодательством Российской Федерации.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Признание судом какого-либо положения Соглашения недействительным или не подлежащим принудительному исполнению 
              не влечет недействительности иных положений Соглашения.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">13. Реквизиты и контактная информация</h2>
            <div className="bg-secondary/20 p-4 sm:p-6 rounded-lg">
              <p className="font-semibold mb-2">ИП Горякин Александр Александрович</p>
              <p className="text-muted-foreground">ИНН: 890405283300</p>
              <p className="text-muted-foreground">ОГРНИП: 325723200125202</p>
              <p className="text-muted-foreground">Адрес: г. Красноярск, 2-я Красногорская улица, дом 3</p>
              <p className="text-muted-foreground">Email: <a href="mailto:hostel.bl124@mail.ru" className="text-primary hover:underline">hostel.bl124@mail.ru</a></p>
              <p className="text-muted-foreground">Телефон: <a href="tel:+79832814308" className="text-primary hover:underline">+7 (983) 281-43-08</a></p>
            </div>
          </section>

          <p className="text-sm text-muted-foreground mt-8 pt-6 border-t">
            Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;