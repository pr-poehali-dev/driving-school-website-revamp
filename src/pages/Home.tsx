import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Home = () => {
  const categories = [
    {
      title: 'Категория B',
      icon: 'Car',
      description: 'Легковые автомобили',
      details: 'Полный курс обучения вождению легкового автомобиля',
      duration: '3 месяца',
      color: 'bg-primary',
      link: '/programs/category-b',
    },
    {
      title: 'Категория A',
      icon: 'Bike',
      description: 'Мотоциклы',
      details: 'Обучение управлению мотоциклом',
      duration: '2 месяца',
      color: 'bg-secondary',
      link: '/programs/category-a',
    },
    {
      title: 'Категория C',
      icon: 'Truck',
      description: 'Грузовые автомобили',
      details: 'Профессиональная подготовка водителей грузовиков',
      duration: '4 месяца',
      color: 'bg-accent',
      link: '/programs/category-c',
    },
    {
      title: 'Категория D',
      icon: 'Bus',
      description: 'Автобусы',
      details: 'Подготовка водителей пассажирского транспорта',
      duration: '5 месяцев',
      color: 'bg-primary',
      link: '/programs/category-d',
    },
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Государственная лицензия',
      description: 'Документы государственного образца',
    },
    {
      icon: 'Users',
      title: 'Опытные инструкторы',
      description: 'Преподаватели с многолетним стажем',
    },
    {
      icon: 'Car',
      title: 'Современный автопарк',
      description: 'Новые учебные автомобили',
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Оборудованные площадки и трассы',
    },
    {
      icon: 'Clock',
      title: 'Удобный график',
      description: 'Гибкое расписание занятий',
    },
    {
      icon: 'Trophy',
      title: '70+ лет опыта',
      description: 'Традиции ДОСААФ России',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-accent blur-3xl"></div>
        </div>
        <div className="container relative px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="text-white space-y-6">
              <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                70+ лет обучения водителей
              </Badge>
              <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
                Центр военно-патриотического воспитания ДОСААФ России
              </h2>
              <p className="text-xl md:text-2xl text-white/90">г. Павлово</p>
              <p className="text-lg text-white/80 leading-relaxed">
                Профессиональная подготовка водителей категорий A, B, C, D. Традиции качественного
                образования и патриотического воспитания молодежи.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <Link to="/contacts">
                    Записаться на обучение <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/programs">Программы обучения</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-6 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold">5000+</div>
                  <div className="text-sm text-white/80">Выпускников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm text-white/80">Сдают с 1 раза</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">70+</div>
                  <div className="text-sm text-white/80">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/c97c0d4d-2db3-4fe6-96fb-5168e69615fd/files/6ce183d0-b5d0-4e1f-861e-44ab5d579228.jpg"
                alt="Обучение вождению"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Программы обучения
            </Badge>
            <h3 className="text-3xl font-bold md:text-4xl mb-4">Категории подготовки</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите программу, которая соответствует вашим целям и начните обучение
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${category.color}`}
                  >
                    <Icon name={category.icon as any} className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{category.details}</p>
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <Icon name="Clock" className="h-4 w-4 text-primary" />
                    <span className="font-medium">{category.duration}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={category.link}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/programs">
                Все программы обучения <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Почему выбирают нас
            </Badge>
            <h3 className="text-3xl font-bold md:text-4xl mb-4">Наши преимущества</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ДОСААФ России - это гарантия качественного обучения и профессионализма
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon name={advantage.icon as any} className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{advantage.title}</h4>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                О центре
              </Badge>
              <h3 className="text-3xl font-bold md:text-4xl mb-6">Традиции ДОСААФ России</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Центр военно-патриотического воспитания и подготовки граждан к военной службе
                ДОСААФ России г. Павлово - это более 70 лет истории подготовки профессиональных
                водителей.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы воспитываем не просто водителей, но и ответственных граждан, уважающих правила
                дорожного движения и заботящихся о безопасности на дорогах.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary" />
                  <span className="font-medium">Государственная лицензия</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary" />
                  <span className="font-medium">Опытные инструкторы</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary" />
                  <span className="font-medium">Современное оборудование</span>
                </div>
              </div>
              <Button asChild size="lg">
                <Link to="/about">
                  Подробнее о центре <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/c97c0d4d-2db3-4fe6-96fb-5168e69615fd/files/68ab8ac0-3ced-46c4-9954-1fbf89859019.jpg"
                alt="Инструктор и курсант"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <Icon name="GraduationCap" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">Выпускников</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold md:text-4xl mb-6">Начните обучение сегодня</h3>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Запишитесь на консультацию и узнайте подробности о программах обучения, графике
              занятий и стоимости курсов
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary" asChild>
                <Link to="/contacts">
                  Записаться на обучение <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white" asChild>
                <Link to="/info">Сведения об организации</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
