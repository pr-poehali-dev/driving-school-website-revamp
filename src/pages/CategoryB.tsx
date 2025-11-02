import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const CategoryB = () => {
  const programDetails = [
    { icon: 'Clock', label: 'Продолжительность', value: '3 месяца' },
    { icon: 'BookOpen', label: 'Теоретические занятия', value: '130 часов' },
    { icon: 'Car', label: 'Практическое вождение', value: '56 часов' },
    { icon: 'Users', label: 'Размер группы', value: 'До 20 человек' },
    { icon: 'Calendar', label: 'Начало занятий', value: 'Круглогодично' },
    { icon: 'CreditCard', label: 'Стоимость', value: 'От 25 000 руб.' },
  ];

  const curriculum = [
    {
      title: 'Теоретический курс',
      items: [
        'Правила дорожного движения',
        'Основы безопасности движения',
        'Устройство и техническое обслуживание автомобиля',
        'Первая помощь при ДТП',
        'Психофизиологические основы деятельности водителя',
        'Организация и выполнение грузовых и пассажирских перевозок',
      ],
    },
    {
      title: 'Практический курс',
      items: [
        'Начальное обучение вождению (площадка)',
        'Упражнения: эстакада, параллельная парковка, гараж',
        'Вождение в условиях дорожного движения',
        'Маневрирование в ограниченном пространстве',
        'Движение в транспортном потоке',
        'Проезд перекрестков и пешеходных переходов',
      ],
    },
  ];

  const requirements = [
    'Возраст от 17 лет (получение прав с 18 лет)',
    'Медицинская справка установленного образца',
    'Паспорт гражданина РФ',
    'Фотографии 3x4 см (2 шт)',
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Государственная программа',
      description: 'Обучение по утвержденной государственной программе',
    },
    {
      icon: 'Car',
      title: 'Современные автомобили',
      description: 'Учебные автомобили с МКПП и АКПП',
    },
    {
      icon: 'Users',
      title: 'Опытные инструкторы',
      description: 'Профессиональные инструкторы с большим стажем',
    },
    {
      icon: 'MapPin',
      title: 'Удобная площадка',
      description: 'Оборудованный автодром для практических занятий',
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Утренние, дневные и вечерние группы',
    },
    {
      icon: 'CreditCard',
      title: 'Рассрочка оплаты',
      description: 'Возможность оплаты обучения в рассрочку',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link
                to="/programs"
                className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                <Icon name="ArrowLeft" className="h-5 w-5" />
                <span>Все программы</span>
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="text-white space-y-6">
                <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                  Программа обучения
                </Badge>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20">
                    <Icon name="Car" className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold md:text-5xl">Категория B</h1>
                    <p className="text-xl text-white/90">Легковые автомобили</p>
                  </div>
                </div>
                <p className="text-lg text-white/80 leading-relaxed">
                  Полный курс обучения вождению легкового автомобиля с механической или
                  автоматической коробкой передач. Подготовка к успешной сдаче экзаменов в ГИБДД.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-primary" asChild>
                  <Link to="/contacts">
                    Записаться на обучение <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/c97c0d4d-2db3-4fe6-96fb-5168e69615fd/files/6ce183d0-b5d0-4e1f-861e-44ab5d579228.jpg"
                  alt="Обучение вождению категория B"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Параметры программы</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programDetails.map((detail, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon name={detail.icon as any} className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                        <p className="text-lg font-semibold">{detail.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Программа обучения</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {curriculum.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Icon
                            name="CheckCircle2"
                            className="h-5 w-5 text-primary shrink-0 mt-0.5"
                          />
                          <span className="text-muted-foreground">{item}</span>
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

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Требования для поступления</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Check" className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-lg">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества обучения</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name={advantage.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Готовы начать обучение?</h3>
            <p className="text-lg text-white/80 mb-8">
              Запишитесь на консультацию и начните путь к получению водительских прав
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary" asChild>
                <Link to="/contacts">
                  Записаться сейчас <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white" asChild>
                <Link to="/programs">Другие программы</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryB;
