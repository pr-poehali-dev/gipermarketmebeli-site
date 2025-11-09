import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'home', label: 'Головна' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'about', label: 'Про фабрику' },
    { id: 'portfolio', label: 'Портфоліо' },
    { id: 'delivery', label: 'Доставка' },
    { id: 'reviews', label: 'Відгуки' },
    { id: 'contacts', label: 'Контакти' },
  ];

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
                <p className="text-xs text-muted-foreground">Фабрика преміальних меблів</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button onClick={() => scrollToSection('contacts')} className="hidden sm:flex bg-accent hover:bg-accent/90 text-primary">
                Зв'язатися
              </Button>

              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-6 mt-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-accent font-bold text-xl">GMM</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-primary">GiperMarketMebeli</h2>
                        <p className="text-xs text-muted-foreground">Фабрика преміальних меблів</p>
                      </div>
                    </div>

                    <nav className="flex flex-col gap-4">
                      {menuItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="text-left text-lg font-medium hover:text-accent transition-colors py-2 border-b border-border"
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>

                    <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90 text-primary mt-4">
                      Зв'язатися з нами
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-bold text-primary leading-tight">
                Створюємо меблі вашої мрії
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Преміальні меблі ручної роботи з індивідуальним дизайном. 
                Елегантність, якість і довговічність у кожній деталі.
              </p>
              <div className="flex gap-4 pt-4">
                <Button onClick={() => scrollToSection('catalog')} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Дивитися каталог
                </Button>
                <Button onClick={() => scrollToSection('contacts')} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Замовити проєкт
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/6c048977-5b3c-4d0a-a079-9eb9f380397e.jpg"
                alt="Преміальні меблі"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-primary mb-4">Каталог меблів</h2>
            <p className="text-xl text-muted-foreground">Відкрийте для себе колекції преміальної якості</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'М\'які меблі',
                description: 'Дивани, крісла, пуфи з натуральних матеріалів',
                image: 'https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/6c048977-5b3c-4d0a-a079-9eb9f380397e.jpg',
                icon: 'Armchair'
              },
              {
                title: 'Обідні групи',
                description: 'Обідні столи та стільці з масиву дерева',
                image: 'https://cdn.poehali.dev/projects/5690b466-9ca4-4053-bed4-a4a9d561c8f8/files/83c73519-29eb-4863-99b5-fcbe45159cb8.jpg',
                icon: 'Table'
              },
              {
                title: 'Спальні',
                description: 'Ліжка, комоди, прикроватні тумби',
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
                    Детальніше <Icon name="ArrowRight" size={16} className="ml-2" />
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
              <h2 className="text-5xl font-bold text-primary">Про фабрику</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                GiperMarketMebeli — це понад 15 років досвіду у створенні преміальних меблів. 
                Ми поєднуємо традиційну майстерність із сучасними технологіями, 
                створюючи вироби, які служать десятиліттями.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { icon: 'Award', title: '15+ років', subtitle: 'на ринку' },
                  { icon: 'Users', title: '5000+', subtitle: 'задоволених клієнтів' },
                  { icon: 'Package', title: '100%', subtitle: 'гарантія якості' },
                  { icon: 'Truck', title: 'Безкоштовна', subtitle: 'доставка' }
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
                alt="Про фабрику"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-primary mb-4">Портфоліо</h2>
            <p className="text-xl text-muted-foreground">Наші реалізовані проєкти</p>
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
                  alt={`Проєкт ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-white text-xl font-bold mb-2">Проєкт #{index + 1}</h4>
                    <p className="text-white/80">Преміальні меблі на замовлення</p>
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
            <p className="text-xl text-muted-foreground">Швидко та надійно доставимо ваші меблі</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'MapPin',
                title: 'По всій Україні',
                description: 'Доставляємо в будь-яке місто'
              },
              {
                icon: 'Clock',
                title: '7-14 днів',
                description: 'Середній термін доставки'
              },
              {
                icon: 'ShieldCheck',
                title: 'Гарантія',
                description: 'Страхування вантажу'
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
            <h2 className="text-5xl font-bold text-primary mb-4">Відгуки клієнтів</h2>
            <p className="text-xl text-muted-foreground">Що кажуть наші клієнти</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Олена Іванова',
                rating: 5,
                text: 'Замовляли спальню на фабриці GMM. Якість перевершила всі очікування! Меблі виготовлені з натурального дерева, всі деталі продумані до дрібниць.'
              },
              {
                name: 'Дмитро Петров',
                rating: 5,
                text: 'Чудова фабрика! Допомогли з дизайн-проєктом, врахували всі наші побажання. Доставка точно в термін, збирання професійне. Рекомендую!'
              },
              {
                name: 'Анна Смирнова',
                rating: 5,
                text: 'Купили обідню групу — стіл і стільці. Неймовірна якість виконання! Через рік меблі виглядають як нові. Дякуємо команді GMM!'
              },
              {
                name: 'Михайло Соколов',
                rating: 5,
                text: 'Замовляли м\'які меблі для вітальні. Дуже задоволені результатом! Зручні, красиві, якісні. Ціна повністю відповідає якості.'
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
            <h2 className="text-5xl font-bold text-primary mb-4">Контакти</h2>
            <p className="text-xl text-muted-foreground">Зв'яжіться з нами для консультації</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Телефон</p>
                  <p className="text-muted-foreground">+380 (44) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Email</p>
                  <p className="text-muted-foreground">info@gipermarketmebeli.ua</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Адреса</p>
                  <p className="text-muted-foreground">м. Київ, вул. Меблева, буд. 10</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Режим роботи</p>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br />Сб-Нд: 10:00 - 18:00</p>
                </div>
              </div>
            </div>

            <Card className="p-6 border-0 shadow-lg animate-scale-in">
              <h3 className="text-2xl font-bold text-primary mb-6">Залишіть заявку</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше ім'я" className="border-border" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="border-border" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="border-border" />
                </div>
                <div>
                  <Textarea placeholder="Повідомлення" rows={4} className="border-border" />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-primary">
                  Відправити заявку
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
              <p className="text-sm text-primary-foreground/70">Фабрика преміальних меблів</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">М'які меблі</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Обідні групи</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Спальні</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Інформація</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#about" className="hover:text-accent transition-colors">Про фабрику</a></li>
                <li><a href="#delivery" className="hover:text-accent transition-colors">Доставка</a></li>
                <li><a href="#reviews" className="hover:text-accent transition-colors">Відгуки</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакти</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>+380 (44) 123-45-67</li>
                <li>info@gipermarketmebeli.ua</li>
                <li>м. Київ, вул. Меблева, 10</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
            <p>&copy; 2024 GiperMarketMebeli. Усі права захищено.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
