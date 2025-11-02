import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', email: '', category: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      details: ['+7 (831) 712-34-56', '+7 (831) 712-34-57'],
      description: 'Пн-Пт 9:00-18:00, Сб 9:00-14:00',
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: ['info@pavlovo-dosaaf.ru', 'education@pavlovo-dosaaf.ru'],
      description: 'Ответим в течение 24 часов',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      details: ['606100, Нижегородская область', 'г. Павлово, ул. Ленина, д. 100'],
      description: 'Остановка "Центр"',
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      details: ['Пн-Пт: 9:00 - 18:00', 'Сб: 9:00 - 14:00', 'Вс: Выходной'],
      description: 'Обед 13:00-14:00',
    },
  ];

  const socialLinks = [
    { icon: 'Phone', name: 'Позвонить', href: 'tel:+78317123456' },
    { icon: 'Mail', name: 'Написать', href: 'mailto:info@pavlovo-dosaaf.ru' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Свяжитесь с нами
            </Badge>
            <h1 className="text-4xl font-bold md:text-5xl mb-6">Контакты</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Центр военно-патриотического воспитания и подготовки граждан к военной службе
              ДОСААФ России г. Павлово
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Icon name={info.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Форма обратной связи</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Заполните форму, и наши специалисты свяжутся с вами в ближайшее время для
                консультации и записи на обучение.
              </p>
              <Card>
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                  <CardDescription>
                    Все поля обязательны для заполнения, кроме комментария
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
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@mail.ru"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Интересующая категория *</Label>
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

              <div className="mt-8 flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <Button key={index} variant="outline" asChild>
                    <a href={link.href} className="flex items-center gap-2">
                      <Icon name={link.icon as any} className="h-4 w-4" />
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Как нас найти</h2>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Схема проезда</CardTitle>
                  <CardDescription>г. Павлово, ул. Ленина, д. 100</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Icon name="MapPin" className="h-12 w-12 mx-auto mb-2" />
                      <p>Интерактивная карта</p>
                      <p className="text-sm">
                        606100, Нижегородская область
                        <br />
                        г. Павлово, ул. Ленина, д. 100
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Общественный транспорт</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon name="Bus" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Автобусы</p>
                        <p className="text-sm text-muted-foreground">
                          Маршруты №1, №5, №12 до остановки "Центр"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon name="Car" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Парковка</p>
                        <p className="text-sm text-muted-foreground">
                          Бесплатная парковка для посетителей
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <img
                src="https://cdn.poehali.dev/projects/c97c0d4d-2db3-4fe6-96fb-5168e69615fd/files/1223d8db-359b-4c66-8a2e-b1b0156bc329.jpg"
                alt="Здание центра ДОСААФ"
                className="rounded-lg shadow-lg mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Как записаться на обучение?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Вы можете позвонить по телефону, заполнить форму на сайте или прийти лично в
                    рабочее время. Специалисты проконсультируют вас и помогут выбрать удобный
                    график занятий.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Какие документы нужны для поступления?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Паспорт, медицинская справка установленного образца и фотографии 3x4 см.
                    Подробный список документов вам предоставят при записи.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Можно ли оплатить обучение в рассрочку?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Да, мы предоставляем возможность оплаты обучения в рассрочку без процентов.
                    Условия обсуждаются индивидуально.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
