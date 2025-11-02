import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Info = () => {
  const sections = [
    {
      title: 'Основные сведения',
      icon: 'FileText',
      description: 'Информация об организации',
      items: [
        'Полное наименование: Государственное бюджетное профессиональное образовательное учреждение "Центр военно-патриотического воспитания и подготовки граждан к военной службе ДОСААФ России г. Павлово"',
        'Сокращенное наименование: Центр ДОСААФ России г. Павлово',
        'Дата создания: 1951 год',
        'Учредитель: Региональное отделение ДОСААФ России Нижегородской области',
        'Место нахождения: 606100, Нижегородская область, г. Павлово, ул. Ленина, д. 100',
        'Режим и график работы: Пн-Пт 9:00-18:00, Сб 9:00-14:00',
        'Контактные телефоны: +7 (831) 712-34-56',
        'Адрес электронной почты: info@pavlovo-dosaaf.ru',
      ],
    },
    {
      title: 'Структура и органы управления',
      icon: 'Workflow',
      description: 'Организационная структура',
      items: [
        'Директор - осуществляет общее руководство центром',
        'Заместитель директора по учебной работе',
        'Заместитель директора по административно-хозяйственной части',
        'Педагогический совет',
        'Методический совет',
        'Отдел подготовки водителей транспортных средств',
        'Административно-хозяйственный отдел',
      ],
    },
    {
      title: 'Документы',
      icon: 'FileCheck',
      description: 'Уставные и лицензионные документы',
      items: [
        'Устав образовательной организации',
        'Лицензия на осуществление образовательной деятельности',
        'Свидетельство о государственной регистрации',
        'Свидетельство о постановке на учет в налоговом органе',
        'План финансово-хозяйственной деятельности',
        'Локальные нормативные акты',
        'Правила внутреннего распорядка обучающихся',
        'Правила приема обучающихся',
      ],
    },
    {
      title: 'Образование',
      icon: 'GraduationCap',
      description: 'Образовательные программы',
      items: [
        'Форма обучения: очная',
        'Нормативные сроки обучения: от 2 до 5 месяцев в зависимости от категории',
        'Срок действия государственной аккредитации: бессрочно',
        'Язык обучения: русский',
        'Реализуемые программы:',
        '- Профессиональное обучение водителей транспортных средств категории "А"',
        '- Профессиональное обучение водителей транспортных средств категории "В"',
        '- Профессиональное обучение водителей транспортных средств категории "С"',
        '- Профессиональное обучение водителей транспортных средств категории "D"',
        '- Переподготовка водителей',
      ],
    },
    {
      title: 'Образовательные стандарты',
      icon: 'BookOpen',
      description: 'Стандарты и требования',
      items: [
        'Обучение ведется в соответствии с:',
        '- Федеральным законом от 10.12.1995 № 196-ФЗ "О безопасности дорожного движения"',
        '- Примерными программами профессиональной подготовки водителей транспортных средств',
        '- Профессиональными стандартами',
        '- Требованиями ГИБДД к образовательным программам',
      ],
    },
    {
      title: 'Руководство. Педагогический состав',
      icon: 'Users',
      description: 'Руководители и преподаватели',
      items: [
        'Директор центра: [ФИО] - высшее образование, стаж работы 25 лет',
        'Преподавательский состав: 12 человек',
        'Инструкторы по вождению: 8 человек',
        'Все преподаватели имеют профильное образование и регулярно проходят повышение квалификации',
        'Средний стаж работы преподавателей: 15 лет',
      ],
    },
    {
      title: 'Материально-техническое обеспечение',
      icon: 'Building',
      description: 'Оснащение и оборудование',
      items: [
        'Учебные классы: 4 аудитории, оборудованные современными техническими средствами',
        'Автодром: учебная площадка площадью 1 га, оборудованная всеми необходимыми элементами',
        'Автопарк: 12 учебных автомобилей различных категорий',
        'Компьютерные тренажеры для отработки навыков вождения',
        'Мультимедийное оборудование',
        'Библиотека с учебной литературой',
        'Методические материалы и стенды',
      ],
    },
    {
      title: 'Стипендии и меры поддержки',
      icon: 'Coins',
      description: 'Финансовая поддержка обучающихся',
      items: [
        'Программа не предусматривает выплату стипендий',
        'Возможна рассрочка оплаты обучения',
        'Льготные условия для отдельных категорий граждан',
        'Скидки для групповых заявок',
      ],
    },
    {
      title: 'Платные образовательные услуги',
      icon: 'CreditCard',
      description: 'Стоимость обучения',
      items: [
        'Стоимость обучения устанавливается на основании утвержденного прейскуранта',
        'Категория "А": от 18 000 руб.',
        'Категория "В": от 25 000 руб.',
        'Категория "С": от 30 000 руб.',
        'Категория "D": от 35 000 руб.',
        'Переподготовка: от 15 000 руб.',
        'Возможна оплата в рассрочку без процентов',
        'Образец договора об оказании платных образовательных услуг предоставляется при обращении',
      ],
    },
    {
      title: 'Финансово-хозяйственная деятельность',
      icon: 'TrendingUp',
      description: 'Финансовая информация',
      items: [
        'Объем образовательной деятельности за счет средств физических лиц',
        'План финансово-хозяйственной деятельности утверждается ежегодно',
        'Отчеты о финансовой деятельности размещаются на официальном сайте',
      ],
    },
    {
      title: 'Вакантные места для приема',
      icon: 'UserPlus',
      description: 'Информация о наборе',
      items: [
        'Набор на обучение ведется круглогодично',
        'Формирование групп происходит по мере комплектования',
        'Категория "А": есть вакантные места',
        'Категория "В": есть вакантные места',
        'Категория "С": есть вакантные места',
        'Категория "D": формируется группа',
        'Для получения актуальной информации о наличии мест обращайтесь по телефону',
      ],
    },
    {
      title: 'Доступная среда',
      icon: 'Accessibility',
      description: 'Условия для лиц с ОВЗ',
      items: [
        'Обеспечен доступ в здание для инвалидов и лиц с ограниченными возможностями здоровья',
        'Имеются специально оборудованные учебные кабинеты',
        'Возможность обучения по индивидуальной программе',
        'Консультации для лиц с ОВЗ',
      ],
    },
    {
      title: 'Международное сотрудничество',
      icon: 'Globe',
      description: 'Международная деятельность',
      items: [
        'В настоящее время международные договоры не заключены',
        'Образовательная деятельность осуществляется на территории Российской Федерации',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Официальная информация
            </Badge>
            <h1 className="text-4xl font-bold md:text-5xl mb-6">
              Сведения об образовательной организации
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Информация размещена в соответствии с требованиями Федерального закона от 29.12.2012
              № 273-ФЗ "Об образовании в Российской Федерации" и Постановления Правительства РФ от
              10.07.2013 № 582
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name={section.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <CardDescription className="text-base">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Icon name="Check" className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4">
                    Нажмите для просмотра всей информации
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Подробная информация</h2>
            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon name={section.icon as any} className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{section.title}</CardTitle>
                        <CardDescription className="text-base">
                          {section.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Icon name="Check" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Есть вопросы?</h3>
            <p className="text-white/80 mb-6">
              Свяжитесь с нами для получения дополнительной информации
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Контакты <Icon name="ArrowRight" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Info;
