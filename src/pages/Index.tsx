import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeDestination, setActiveDestination] = useState<number | null>(null);

  const destinations = [
    {
      id: 1,
      name: 'Европейские столицы',
      description: 'Погрузитесь в культуру и историю величайших городов Европы',
      image: 'https://cdn.poehali.dev/projects/a269bc84-42ff-4efb-88c8-107162973a3d/files/c3ece11b-997b-4970-aff1-51d4cb9feab0.jpg',
      price: 'от 2 500 €',
      duration: '7-14 дней'
    },
    {
      id: 2,
      name: 'Альпийские курорты',
      description: 'Эксклюзивный отдых в сердце швейцарских и французских Альп',
      image: 'https://cdn.poehali.dev/projects/a269bc84-42ff-4efb-88c8-107162973a3d/files/abf92d72-ada4-44ba-8129-7458062d6379.jpg',
      price: 'от 3 800 €',
      duration: '5-10 дней'
    },
    {
      id: 3,
      name: 'Тропические острова',
      description: 'VIP-отдых на райских пляжах Мальдив, Сейшел и Карибов',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      price: 'от 4 200 €',
      duration: '7-12 дней'
    }
  ];

  const tours = [
    {
      title: 'Париж - Рим - Барселона',
      type: 'Культурный тур',
      days: 12,
      price: 2850
    },
    {
      title: 'Швейцарские Альпы',
      type: 'Горнолыжный курорт',
      days: 7,
      price: 3900
    },
    {
      title: 'Мальдивы Premium',
      type: 'Пляжный отдых',
      days: 10,
      price: 5200
    },
    {
      title: 'Токио - Киото',
      type: 'Экзотика',
      days: 9,
      price: 4100
    }
  ];

  const testimonials = [
    {
      name: 'Елена Соколова',
      text: 'Незабываемое путешествие по Европе! Все было организовано на высшем уровне. Особенно впечатлил сервис и внимание к деталям.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      text: 'Отдых на Мальдивах превзошел все ожидания. SV Tours подобрали идеальный отель и организовали трансферы. Профессионалы своего дела!',
      rating: 5
    },
    {
      name: 'Анна Петрова',
      text: 'Горнолыжный тур в Альпы - это было волшебно! Благодарю команду за индивидуальный подход и заботу о каждой детали поездки.',
      rating: 5
    }
  ];

  const faq = [
    {
      question: 'Какие документы необходимы для поездки?',
      answer: 'Для большинства направлений требуется загранпаспорт, действительный не менее 6 месяцев, и виза (если требуется). Мы помогаем с оформлением всех документов.'
    },
    {
      question: 'Входит ли страховка в стоимость тура?',
      answer: 'Да, все наши туры включают медицинскую страховку. Также можем оформить расширенную страховку, покрывающую отмену поездки и другие риски.'
    },
    {
      question: 'Можно ли изменить маршрут тура?',
      answer: 'Конечно! Мы создаем индивидуальные маршруты под ваши пожелания. Все туры можно адаптировать по длительности, отелям и программе.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Принимаем оплату картами, банковским переводом или наличными в офисе. Возможна рассрочка на некоторые туры.'
    },
    {
      question: 'Предоставляете ли вы сопровождение в поездке?',
      answer: 'Для групповых туров предоставляется русскоговорящий гид. Для индивидуальных поездок - круглосуточная поддержка нашей команды.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-secondary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Plane" className="text-secondary" size={32} />
            <span className="text-2xl font-cormorant font-bold text-white">SV Tours</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white/90">
            <a href="#home" className="hover:text-secondary transition-colors">Главная</a>
            <a href="#tours" className="hover:text-secondary transition-colors">Туры</a>
            <a href="#destinations" className="hover:text-secondary transition-colors">Направления</a>
            <a href="#about" className="hover:text-secondary transition-colors">О нас</a>
            <a href="#testimonials" className="hover:text-secondary transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-secondary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Контакты</a>
          </div>
          <Button variant="secondary" size="sm">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-cormorant font-bold text-white mb-6">
            Эксклюзивные путешествия
            <br />
            <span className="text-secondary">для взыскательных клиентов</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Создаем уникальные туры по всему миру с безупречным сервисом и вниманием к каждой детали
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Compass" className="mr-2" size={20} />
              Подобрать тур
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white/10">
              <Icon name="Phone" className="mr-2" size={20} />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-center mb-4">
            Премиальные направления
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Откройте для себя лучшие места планеты
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest, idx) => (
              <Card
                key={dest.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${idx * 150}ms` }}
                onMouseEnter={() => setActiveDestination(dest.id)}
                onMouseLeave={() => setActiveDestination(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-cormorant font-bold text-white mb-1">
                      {dest.name}
                    </h3>
                    <Badge variant="secondary" className="mt-2">
                      {dest.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{dest.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-cormorant font-semibold text-secondary">
                      {dest.price}
                    </span>
                    <Button variant="outline" size="sm">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-center mb-4">
            Актуальные туры
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Специально подобранные маршруты
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {tour.type}
                  </Badge>
                  <h3 className="text-xl font-cormorant font-semibold mb-3">
                    {tour.title}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      {tour.days} дней
                    </div>
                    <div className="flex items-center">
                      <Icon name="Euro" size={16} className="mr-2" />
                      от {tour.price.toLocaleString()} €
                    </div>
                  </div>
                  <Button className="w-full" variant="secondary">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold mb-6">
            О компании SV Tours
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Мы создаем незабываемые путешествия с 2010 года. Наша команда профессионалов тщательно отбирает
            лучшие отели, составляет уникальные маршруты и обеспечивает безупречный сервис на каждом этапе вашего путешествия.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center animate-fade-in">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-secondary" size={32} />
              </div>
              <h3 className="font-cormorant font-semibold text-xl mb-2">15+ лет опыта</h3>
              <p className="text-muted-foreground">Организуем туры премиум-класса</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '150ms' }}>
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-secondary" size={32} />
              </div>
              <h3 className="font-cormorant font-semibold text-xl mb-2">5000+ клиентов</h3>
              <p className="text-muted-foreground">Доверили нам свой отдых</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" className="text-secondary" size={32} />
              </div>
              <h3 className="font-cormorant font-semibold text-xl mb-2">50+ стран</h3>
              <p className="text-muted-foreground">В нашем портфолио направлений</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-center mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Что говорят о нас наши путешественники
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-center mb-4">
            Вопросы и ответы
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Ответы на частые вопросы о наших турах
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Готовы создать ваше идеальное путешествие? Наши эксперты ждут вашего звонка
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center">
              <Icon name="Phone" className="text-secondary mb-3" size={32} />
              <p className="text-lg">+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Mail" className="text-secondary mb-3" size={32} />
              <p className="text-lg">info@svtours.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="MapPin" className="text-secondary mb-3" size={32} />
              <p className="text-lg">Москва, ул. Тверская, 15</p>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="text-lg px-10">
            Заказать звонок
          </Button>
        </div>
      </section>

      <footer className="bg-primary/95 border-t border-secondary/20 py-8 px-4">
        <div className="container mx-auto text-center text-white/70">
          <p>&copy; 2024 SV Tours. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
