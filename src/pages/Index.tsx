import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', category: '', message: '' });
  };

  const categories = [
    {
      title: 'Категория B',
      icon: 'Car',
      description: 'Легковые автомобили',
      details: 'Полный курс обучения вождению легкового автомобиля',
      duration: '3 месяца',
      color: 'bg-primary',
    },
    {
      title: 'Категория A',
      icon: 'Bike',
      description: 'Мотоциклы',
      details: 'Обучение управлению мотоциклом',
      duration: '2 месяца',
      color: 'bg-secondary',
    },
    {
      title: 'Категория C',
      icon: 'Truck',
      description: 'Грузовые автомобили',
      details: 'Профессиональная подготовка водителей грузовиков',
      duration: '4 месяца',
      color: 'bg-accent',
    },
    {
      title: 'Категория D',
      icon: 'Bus',
      description: 'Автобусы',
      details: 'Подготовка водителей пассажирского транспорта',
      duration: '5 месяцев',
      color: 'bg-primary',
    },
    {
      title: 'Переподготовка',
      icon: 'RefreshCw',
      description: 'Смена категории',
      details: 'Переход с одной категории на другую',
      duration: 'От 1 месяца',
      color: 'bg-secondary',
    },
    {
      title: 'Повышение квалификации',
      icon: 'TrendingUp',
      description: 'Профессиональное развитие',
      details: 'Курсы для действующих водителей',
      duration: 'От 2 недель',
      color: 'bg-accent',
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

  const infoSections = [
    {
      title: 'Основные сведения',
      content:
        'ДОСААФ России г. Павлово - государственная образовательная организация, осуществляющая подготовку водителей транспортных средств различных категорий.',
    },
    {
      title: 'Структура и органы управления',
      content:
        'Образовательная организация находится в ведении ДОСААФ России. Управление осуществляется в соответствии с законодательством РФ.',
    },
    {
      title: 'Документы',
      content:
        'Лицензия на осуществление образовательной деятельности. Устав организации. Свидетельство о государственной регистрации.',
    },
    {
      title: 'Образование',
      content:
        'Реализуемые программы профессионального обучения водителей транспортных средств категорий A, B, C, D. Форма обучения: очная.',
    },
    {
      title: 'Образовательные стандарты',
      content:
        'Обучение ведется в соответствии с профессиональными стандартами и примерными программами, утвержденными Минобрнауки РФ.',
    },
    {
      title: 'Руководство. Педагогический состав',
      content:
        'Директор: указать ФИО. Преподавательский состав - квалифицированные специалисты с профильным образованием.',
    },
    {
      title: 'Материально-техническое обеспечение',
      content:
        'Учебные классы, оборудованные площадки, современный автопарк, компьютерные тренажеры.',
    },
    {
      title: 'Платные образовательные услуги',
      content:
        'Стоимость обучения устанавливается в соответствии с утвержденными тарифами. Возможна рассрочка платежа.',
    },
    {
      title: 'Финансово-хозяйственная деятельность',
      content:
        'Организация осуществляет деятельность в соответствии с планом финансово-хозяйственной деятельности.',
    },
    {
      title: 'Вакантные места для приема',
      content:
        'Набор ведется круглогодично. Информация о наличии мест по категориям - по телефону или при личном обращении.',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Icon name="Star" className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">ДОСААФ России</h1>
              <p className="text-xs text-muted-foreground">г. Павлово</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#programs" className="text-sm font-medium hover:text-primary transition-colors">
              Программы
            </a>
            <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#info" className="text-sm font-medium hover:text-primary transition-colors">
              Сведения об организации
            </a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#enroll">Записаться</a>
          </Button>
        </div>
      </header>

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
                Автошкола ДОСААФ России
              </h2>
              <p className="text-xl md:text-2xl text-white/90">г. Павлово</p>
              <p className="text-lg text-white/80 leading-relaxed">
                Профессиональная подготовка водителей категорий A, B, C, D. Традиции качественного
                образования и патриотического воспитания.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <a href="#enroll">
                    Записаться на обучение <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a href="#programs">Программы обучения</a>
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${category.color}`}>
                    <Icon name={category.icon as any} className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{category.details}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" className="h-4 w-4 text-primary" />
                    <span className="font-medium">{category.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                О нас
              </Badge>
              <h3 className="text-3xl font-bold md:text-4xl mb-6">
                Традиции ДОСААФ России
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ДОСААФ России - это более 70 лет истории подготовки профессиональных водителей.
                Наша организация сочетает традиции качественного образования с современными
                методиками обучения.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы воспитываем не просто водителей, но и ответственных граждан, уважающих правила
                дорожного движения и заботящихся о безопасности на дорогах.
              </p>
              <div className="flex flex-wrap gap-4">
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

      <section id="info" className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Обязательная информация
            </Badge>
            <h3 className="text-3xl font-bold md:text-4xl mb-4">
              Сведения об образовательной организации
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Информация размещена в соответствии с требованиями законодательства РФ
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {infoSections.map((section, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="enroll" className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <Badge variant="outline" className="mb-4">
                Запись на обучение
              </Badge>
              <h3 className="text-3xl font-bold md:text-4xl mb-6">Начните обучение сегодня</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Оставьте заявку, и наши специалисты свяжутся с вами для консультации и записи на
                удобное время.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon name="Phone" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Позвоните нам</div>
                    <div className="text-muted-foreground">+7 (XXX) XXX-XX-XX</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon name="Mail" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Напишите нам</div>
                    <div className="text-muted-foreground">info@pavlovo-dosaaf.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon name="MapPin" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Наш адрес</div>
                    <div className="text-muted-foreground">г. Павлово, ул. Примерная, д. 1</div>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.poehali.dev/projects/c97c0d4d-2db3-4fe6-96fb-5168e69615fd/files/1223d8db-359b-4c66-8a2e-b1b0156bc329.jpg"
                alt="Учебный класс"
                className="rounded-lg shadow-lg mt-8 hidden lg:block"
              />
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Заявка на обучение</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Категория обучения *</Label>
                    <Input
                      id="category"
                      placeholder="Например: Категория B"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      placeholder="Дополнительная информация или вопросы"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                    <Icon name="Send" className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-primary text-white py-12">
        <div className="container px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <Icon name="Star" className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">ДОСААФ России</h4>
                  <p className="text-sm text-white/80">г. Павлово</p>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Профессиональная подготовка водителей с 1951 года
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Программы</h5>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Категория A</li>
                <li>Категория B</li>
                <li>Категория C</li>
                <li>Категория D</li>
                <li>Переподготовка</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#info" className="hover:text-white transition-colors">
                    Сведения об организации
                  </a>
                </li>
                <li>
                  <a href="#advantages" className="hover:text-white transition-colors">
                    Преимущества
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-white transition-colors">
                    Программы обучения
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (XXX) XXX-XX-XX
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@pavlovo-dosaaf.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  г. Павлово, ул. Примерная, д. 1
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>© 2024 ДОСААФ России г. Павлово. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
