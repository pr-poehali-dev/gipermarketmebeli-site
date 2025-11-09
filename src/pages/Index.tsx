import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-accent font-bold text-xl">GMM</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">GiperMarketMebeli</h1>
                <p className="text-xs text-muted-foreground">Фабрика премиальной мебели</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-accent transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-accent transition-colors">
                Каталог
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">
                О фабрике
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-accent transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('delivery')} className="text-sm font-medium hover:text-accent transition-colors">
                Доставка
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-accent transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-accent transition-colors">
                Контакты
              </button>
            </nav>

            <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90 text-primary">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-bold text-primary leading-tight">
                Создаём мебель вашей мечты
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Премиальная мебель ручной работы с индивидуальным дизайном. 
                Элегантность, качество и долговечность в каждой детали.
              </p>
              <div className="flex gap-4 pt-4">
                <Button onClick={() => scrollToSection('catalog')} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Смотреть каталог
                </Button>
                <Button onClick={() => scrollToSection('contacts')} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Заказать проект
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/6c048977-5b3c-4d0a-a079-9eb9f380397e.jpg"
                alt="Премиальная мебель"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-primary mb-4">Каталог мебели</h2>
            <p className="text-xl text-muted-foreground">Откройте для себя коллекции премиального качества</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Мягкая мебель',
                description: 'Диваны, кресла, пуфы из натуральных материалов',
                image: 'https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/6c048977-5b3c-4d0a-a079-9eb9f380397e.jpg',
                icon: 'Armchair'
              },
              {
                title: 'Столовые группы',
                description: 'Обеденные столы и стулья из массива дерева',
                image: 'https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/83c73519-29eb-4863-99b5-fcbe45159cb8.jpg',
                icon: 'Table'
              },
              {
                title: 'Спальни',
                description: 'Кровати, комоды, прикроватные тумбы',
                image: 'https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/d54f4bcc-8204-4d5a-a5ca-f446767a2a1b.jpg',
                icon: 'Bed'
              }
            ].map((item, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon name={item.icon} size={20} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  <Button variant="link" className="mt-4 p-0 text-accent hover:text-accent/80">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl font-bold text-primary">О фабрике</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                GiperMarketMebeli — это более 15 лет опыта в создании премиальной мебели. 
                Мы объединяем традиционное мастерство с современными технологиями, 
                создавая изделия, которые служат десятилетиями.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { icon: 'Award', title: '15+ лет', subtitle: 'на рынке' },
                  { icon: 'Users', title: '5000+', subtitle: 'довольных клиентов' },
                  { icon: 'Package', title: '100%', subtitle: 'гарантия качества' },
                  { icon: 'Truck', title: 'Бесплатная', subtitle: 'доставка' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] animate-scale-in">
              <div className="absolute inset-0 bg-accent/10 rounded-2xl -rotate-3" />
              <img 
                src="https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/83c73519-29eb-4863-99b5-fcbe45159cb8.jpg"
                alt="О фабрике"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-primary mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Наши реализованные проекты</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/6c048977-5b3c-4d0a-a079-9eb9f380397e.jpg',
              'https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/83c73519-29eb-4863-99b5-fcbe45159cb8.jpg',
              'https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/d54f4bcc-8204-4d5a-a5ca-f446767a2a1b.jpg',
              'https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/6c048977-5b3c-4d0a-a079-9eb9f380397e.jpg',
              'https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/83c73519-29eb-4863-99b5-fcbe45159cb8.jpg',
              'https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/d54f4bcc-8204-4d5a-a5ca-f446767a2a1b.jpg'
            ].map((image, index) => (
              <div key={index} className="group relative h-80 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={image}
                  alt={`Проект ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-white text-xl font-bold mb-2">Проект #{index + 1}</h4>
                    <p className="text-white/80">Премиальная мебель на заказ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-primary mb-4">Доставка</h2>
            <p className="text-xl text-muted-foreground">Быстро и надёжно доставим вашу мебель</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'MapPin',
                title: 'По всей России',
                description: 'Доставляем в любой город'
              },
              {
                icon: 'Clock',
                title: '7-14 дней',
                description: 'Средний срок доставки'
              },
              {
                icon: 'ShieldCheck',
                title: 'Гарантия',
                description: 'Страхование груза'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Елена Иванова',
                rating: 5,
                text: 'Заказывали спальню на фабрике GMM. Качество превзошло все ожидания! Мебель изготовлена из натурального дерева, все детали продуманы до мелочей.'
              },
              {
                name: 'Дмитрий Петров',
                rating: 5,
                text: 'Отличная фабрика! Помогли с дизайн-проектом, учли все наши пожелания. Доставка точно в срок, сборка профессиональная. Рекомендую!'
              },
              {
                name: 'Анна Смирнова',
                rating: 5,
                text: 'Купили обеденную группу — стол и стулья. Невероятное качество исполнения! Через год мебель выглядит как новая. Спасибо команде GMM!'
              },
              {
                name: 'Михаил Соколов',
                rating: 5,
                text: 'Заказывали мягкую мебель для гостиной. Очень довольны результатом! Удобная, красивая, качественная. Цена полностью соответствует качеству.'
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">"{review.text}"</p>
                <p className="font-semibold text-primary">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-primary mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами для консультации</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Телефон</p>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Email</p>
                  <p className="text-muted-foreground">info@gipermarketmebeli.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Адрес</p>
                  <p className="text-muted-foreground">г. Москва, ул. Мебельная, д. 10</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Режим работы</p>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>

            <Card className="p-6 border-0 shadow-lg animate-scale-in">
              <h3 className="text-2xl font-bold text-primary mb-6">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" className="border-border" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="border-border" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="border-border" />
                </div>
                <div>
                  <Textarea placeholder="Сообщение" rows={4} className="border-border" />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-primary">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">GMM</span>
                </div>
                <span className="font-bold text-lg">GiperMarketMebeli</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Фабрика премиальной мебели</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">Мягкая мебель</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Столовые группы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Спальни</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#about" className="hover:text-accent transition-colors">О фабрике</a></li>
                <li><a href="#delivery" className="hover:text-accent transition-colors">Доставка</a></li>
                <li><a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@gipermarketmebeli.ru</li>
                <li>г. Москва, ул. Мебельная, 10</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
            <p>&copy; 2024 GiperMarketMebeli. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
