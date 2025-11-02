import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  const history = [
    {
      year: '1951',
      title: 'Основание центра',
      description:
        'Создание учебного центра ДОСААФ в г. Павлово для подготовки водителей и патриотического воспитания молодежи',
    },
    {
      year: '1970-е',
      title: 'Развитие материальной базы',
      description:
        'Строительство учебных классов, автодрома и приобретение современного автопарка',
    },
    {
      year: '1990-е',
      title: 'Модернизация программ',
      description:
        'Внедрение новых образовательных программ в соответствии с требованиями времени',
    },
    {
      year: '2000-е',
      title: 'Цифровизация обучения',
      description:
        'Внедрение компьютерных технологий, тренажеров и мультимедийных средств обучения',
    },
    {
      year: 'Сегодня',
      title: 'Современный центр',
      description:
        'Один из ведущих центров подготовки водителей в регионе с высокими стандартами качества',
    },
  ];

  const achievements = [
    {
      icon: 'Trophy',
      number: '5000+',
      label: 'Выпускников',
      description: 'Подготовлено водителей за всю историю',
    },
    {
      icon: 'Award',
      number: '95%',
      label: 'Сдача с 1 раза',
      description: 'Успешно сдают экзамены в ГИБДД',
    },
    {
      icon: 'Users',
      number: '12',
      label: 'Инструкторов',
      description: 'Опытных преподавателей',
    },
    {
      icon: 'Car',
      number: '15',
      label: 'Автомобилей',
      description: 'Современный учебный автопарк',
    },
    {
      icon: 'Clock',
      number: '70+',
      label: 'Лет опыта',
      description: 'Традиции качественного обучения',
    },
    {
      icon: 'GraduationCap',
      number: '4',
      label: 'Категории',
      description: 'Программы подготовки водителей',
    },
  ];

  const values = [
    {
      icon: 'Shield',
      title: 'Ответственность',
      description:
        'Мы несем ответственность за качество обучения и безопасность наших курсантов',
    },
    {
      icon: 'Heart',
      title: 'Патриотизм',
      description:
        'Воспитываем любовь к Родине и чувство гражданского долга у молодого поколения',
    },
    {
      icon: 'Target',
      title: 'Профессионализм',
      description:
        'Высокие стандарты обучения и постоянное повышение квалификации преподавателей',
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Учитываем особенности каждого курсанта и подбираем оптимальную программу',
    },
    {
      icon: 'BookOpen',
      title: 'Качество образования',
      description:
        'Современные методики обучения и соответствие государственным стандартам',
    },
    {
      icon: 'Handshake',
      title: 'Доверие',
      description: 'Открытые отношения с курсантами и их семьями, прозрачность процесса обучения',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              О нас
            </Badge>
            <h1 className="text-4xl font-bold md:text-5xl mb-6">О центре ДОСААФ России</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Более 70 лет мы готовим профессиональных водителей и воспитываем патриотов своей
              страны
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Центр военно-патриотического воспитания и подготовки граждан к военной службе
                  ДОСААФ России г. Павлово - это государственная образовательная организация с
                  многолетней историей и традициями.
                </p>
                <p>
                  Наша миссия - подготовка профессиональных и ответственных водителей, воспитание
                  патриотизма и гражданской ответственности у молодого поколения.
                </p>
                <p>
                  Мы гордимся тем, что за годы работы через наш центр прошли тысячи курсантов,
                  которые стали не просто водителями, но и достойными гражданами своей страны.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/programs">
                    Программы обучения <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contacts">Связаться с нами</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/c97c0d4d-2db3-4fe6-96fb-5168e69615fd/files/68ab8ac0-3ced-46c4-9954-1fbf89859019.jpg"
                alt="Центр ДОСААФ"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <Icon name="Star" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">70+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <Icon name={achievement.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold mb-2">{achievement.label}</div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">История центра</h2>
            <p className="text-lg text-muted-foreground">
              Путь длиной более 70 лет от создания до современности
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {history.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                      {index + 1}
                    </div>
                    {index !== history.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2"></div>
                    )}
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">
                        {item.year}
                      </Badge>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Наши ценности</h2>
            <p className="text-lg text-muted-foreground">
              Принципы, которыми мы руководствуемся в нашей работе
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon name={value.icon as any} className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Почему выбирают наш центр
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Icon name="Award" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Государственная лицензия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Все программы обучения лицензированы и соответствуют государственным
                    стандартам. Документы признаются по всей России.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Icon name="Users" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Опытные преподаватели</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Наши инструкторы - профессионалы с большим стажем работы, регулярно проходящие
                    повышение квалификации.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Icon name="Car" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Современный автопарк</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Учебные автомобили в отличном техническом состоянии, оборудованные всем
                    необходимым для безопасного обучения.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Icon name="Target" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Высокие результаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    95% наших выпускников успешно сдают экзамены в ГИБДД с первого раза, что
                    подтверждает качество обучения.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Станьте частью нашей истории</h3>
            <p className="text-lg text-white/80 mb-8">
              Присоединяйтесь к тысячам выпускников, которые получили качественное образование и
              стали профессиональными водителями
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

export default About;
