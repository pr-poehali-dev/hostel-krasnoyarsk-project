import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PrivacyPolicy = () => {
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
          Политика конфиденциальности
        </h1>

        <div className="prose prose-sm sm:prose-base max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground leading-relaxed">
              Настоящая Политика конфиденциальности персональных данных (далее – Политика) действует в отношении всей информации, 
              которую Индивидуальный предприниматель Горякин Александр Александрович (ИНН: 890405283300, ОГРНИП: 325723200125202), 
              расположенный по адресу: г. Красноярск, 2-я Красногорская улица, дом 3, может получить о Пользователе 
              во время использования сайта хостела.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2. Персональные данные пользователей</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              В рамках настоящей Политики под «персональными данными Пользователя» понимаются:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Персональные данные, которые Пользователь предоставляет самостоятельно при заполнении форм: ФИО, номер телефона, адрес электронной почты</li>
              <li>Данные, которые автоматически передаются в процессе использования сайта: IP-адрес, информация из cookies, информация о браузере</li>
              <li>Данные о бронировании: даты заезда и выезда, количество гостей, дополнительные пожелания</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">3. Цели сбора персональных данных</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Персональные данные Пользователя используются в целях:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Обработки заявок на бронирование номеров хостела</li>
              <li>Связи с Пользователем для уточнения деталей бронирования</li>
              <li>Информирования Пользователя об изменениях в работе хостела</li>
              <li>Улучшения качества обслуживания и работы сайта</li>
              <li>Проведения статистических и маркетинговых исследований</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4. Обработка и защита персональных данных</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Обработка персональных данных осуществляется с использованием средств автоматизации и без использования 
              средств автоматизации с соблюдением требований действующего законодательства РФ, в том числе 
              Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Хостел принимает необходимые организационные и технические меры для защиты персональных данных Пользователя 
              от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, предоставления, 
              распространения, а также от иных неправомерных действий третьих лиц.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5. Передача персональных данных третьим лицам</h2>
            <p className="text-muted-foreground leading-relaxed">
              Персональные данные Пользователя могут быть переданы третьим лицам только в случаях, предусмотренных 
              действующим законодательством РФ. Хостел не продает и не передает персональные данные третьим лицам 
              в коммерческих целях.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">6. Срок хранения персональных данных</h2>
            <p className="text-muted-foreground leading-relaxed">
              Персональные данные хранятся в течение срока, необходимого для достижения целей их обработки, 
              но не более 5 лет с момента последнего взаимодействия с Пользователем, если иное не предусмотрено 
              законодательством РФ.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">7. Права пользователя</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Пользователь имеет право:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Получать информацию о наличии и содержании своих персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения своих персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия или бездействие Хостела в уполномоченный орган по защите прав субъектов персональных данных</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Для реализации своих прав Пользователь может направить письменное обращение на электронную почту: 
              <a href="mailto:hostel.bl124@mail.ru" className="text-primary hover:underline ml-1">hostel.bl124@mail.ru</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">8. Изменение Политики конфиденциальности</h2>
            <p className="text-muted-foreground leading-relaxed">
              Хостел имеет право вносить изменения в настоящую Политику конфиденциальности. Новая редакция Политики 
              вступает в силу с момента ее размещения на сайте. Действующая редакция всегда находится на данной странице.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">9. Контактная информация</h2>
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

export default PrivacyPolicy;
