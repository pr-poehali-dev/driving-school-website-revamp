import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Programs = () => {
  const categories = [
    {
      title: 'Категория B',
      icon: 'Car',
      description: 'Легковые автомобили',
      details:
        'Полный курс обучения вождению легкового автомобиля с механической или автоматической коробкой передач',
      duration: '3 месяца',
      hours: '190 часов',
      theory: '130 часов',
      practice: '56 часов',
      price: 'от 25 000 руб.',
      color: 'bg-primary',
      link: '/programs/category-b',
      features: ['Теоретические занятия', 'Практическое вождение', 'Экзамен в ГИБДД'],
    },
    {
      title: 'Категория A',
      icon: 'Bike',
      description: 'Мотоциклы',
      details: 'Обучение управлению мотоциклом, развитие навыков безопасного вождения',
      duration: '2 месяца',
      hours: '130 часов',
      theory: '108 часов',
      practice: '18 часов',
      price: 'от 18 000 руб.',
      color: 'bg-secondary',
      link: '/programs/category-a',
      features: ['Теория ПДД', 'Вождение на площадке', 'Вождение в городе'],
    },
    {
      title: 'Категория C',
      icon: 'Truck',
      description: 'Грузовые автомобили',
      details:
        'Профессиональная подготовка водителей грузовых автомобилей массой более 3,5 тонн',
      duration: '4 месяца',
      hours: '257 часов',
      theory: '180 часов',
      practice: '72 часа',
      price: 'от 30 000 руб.',
      color: 'bg-accent',
      link: '/programs/category-c',
      features: ['Техническое обслуживание', 'Грузоперевозки', 'Безопасность движения'],
    },
    {
      title: 'Категория D',
      icon: 'Bus',
      description: 'Автобусы',
      details: 'Подготовка водителей пассажирского транспорта, автобусов более 8 мест',
      duration: '5 месяцев',
      hours: '280 часов',
      theory: '190 часов',
      practice: '84 часа',
      price: 'от 35 000 руб.',
      color: 'bg-primary',
      link: '/programs/category-d',
      features: ['Пассажироперевозки', 'Маршрутное движение', 'Экстренные ситуации'],
    },
  ];

  const additionalPrograms = [
    {
      title: 'Переподготовка водителей',
      icon: 'RefreshCw',
      description: 'Переход с одной категории на другую',
      details:
        'Сокращенный курс обучения для водителей, имеющих права других категорий. Индивидуальный подход и гибкий график.',
      duration: 'От 1 месяца',
      price: 'от 15 000 руб.',
      color: 'bg-secondary',
    },
    {
      title: 'Повышение квалификации',
      icon: 'TrendingUp',
      description: 'Курсы для действующих водителей',
      details:
        'Программы совершенствования навыков вождения, изучение новых правил, контраварийная подготовка.',
      duration: 'От 2 недель',
      price: 'от 8 000 руб.',
      color: 'bg-accent',
    },
    {
      title: 'Восстановление навыков',
      icon: 'RotateCcw',
      description: 'Для водителей после перерыва',
      details:
        'Курс для тех, кто давно не водил автомобиль. Восстановление уверенности и практических навыков.',
      duration: 'Индивидуально',
      price: 'от 5 000 руб.',
      color: 'bg-primary',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Программы обучения
            </Badge>
            <h1 className="text-4xl font-bold md:text-5xl mb-6">Выберите категорию подготовки</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Профессиональная подготовка водителей по государственным стандартам. Все программы
              лицензированы и соответствуют требованиям ГИБДД.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">Основные категории</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Выберите программу обучения, соответствующую вашим целям
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-lg ${category.color}`}
                    >
                      <Icon name={category.icon as any} className="h-7 w-7 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {category.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {category.details}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" className="h-4 w-4 text-primary" />
                      <span>
                        <strong>Срок:</strong> {category.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="BookOpen" className="h-4 w-4 text-primary" />
                      <span>
                        <strong>Теория:</strong> {category.theory}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Car" className="h-4 w-4 text-primary" />
                      <span>
                        <strong>Практика:</strong> {category.practice}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Программа включает:</p>
                    <ul className="space-y-1">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="CheckCircle2" className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <Link to={category.link}>
                      Подробнее о программе <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">Дополнительные программы</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Специализированные курсы для различных потребностей
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {additionalPrograms.map((program, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${program.color}`}
                  >
                    <Icon name={program.icon as any} className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {program.details}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" className="h-4 w-4 text-primary" />
                      <span>
                        <strong>Срок:</strong> {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="CreditCard" className="h-4 w-4 text-primary" />
                      <span>
                        <strong>Стоимость:</strong> {program.price}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества обучения в ДОСААФ</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon name="Award" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Государственная лицензия</h3>
                  <p className="text-sm text-muted-foreground">
                    Все программы лицензированы и соответствуют государственным стандартам
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon name="Users" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Опытные инструкторы</h3>
                  <p className="text-sm text-muted-foreground">
                    Преподаватели с большим стажем работы и индивидуальным подходом
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon name="Car" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Современный автопарк</h3>
                  <p className="text-sm text-muted-foreground">
                    Новые учебные автомобили с исправным техническим состоянием
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Высокая сдача экзаменов</h3>
                  <p className="text-sm text-muted-foreground">
                    95% наших выпускников сдают экзамены в ГИБДД с первого раза
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Готовы начать обучение?</h3>
            <p className="text-lg text-white/80 mb-8">
              Запишитесь на консультацию и узнайте подробности о выбранной программе
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary" asChild>
                <Link to="/contacts">
                  Записаться на обучение <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white" asChild>
                <Link to="/about">О центре ДОСААФ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
