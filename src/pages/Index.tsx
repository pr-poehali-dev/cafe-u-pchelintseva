import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Кафе у Пчелинцева</h1>
          <div className="flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Добро пожаловать в наш уютный уголок
              </h2>
              <p className="text-xl text-muted-foreground">
                Домашнее тепло, ароматный кофе и душевная атмосфера гаража, превращенного в любимое место встреч
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Coffee" size={20} className="mr-2" />
                  Наше меню
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Как добраться
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/0c4987e6-401c-42c2-be69-34c27135d401/files/1b3d0ec1-39b5-4637-9824-a8e23058dc2f.jpg" 
                alt="Кафе у Пчелинцева" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4 hover-scale bg-card border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Home" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Домашний уют</h3>
              <p className="text-muted-foreground">Атмосфера тепла и комфорта, как дома у друзей</p>
            </Card>
            <Card className="p-8 text-center space-y-4 hover-scale bg-card border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Coffee" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Свежий кофе</h3>
              <p className="text-muted-foreground">Зерна прямой обжарки и авторские напитки</p>
            </Card>
            <Card className="p-8 text-center space-y-4 hover-scale bg-card border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">С душой</h3>
              <p className="text-muted-foreground">Каждое блюдо готовим с любовью и заботой</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <img 
                src="https://cdn.poehali.dev/projects/0c4987e6-401c-42c2-be69-34c27135d401/files/7d282fd2-9397-4ae3-940d-d03d6e959a6f.jpg" 
                alt="Интерьер кафе" 
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <img 
                src="https://cdn.poehali.dev/projects/0c4987e6-401c-42c2-be69-34c27135d401/files/ce56e5c0-9b7e-4f85-9cc1-745b46fb77a3.jpg" 
                alt="Кофе" 
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">О нас</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <span className="text-primary font-semibold">"Кафе у Пчелинцева"</span> — это не просто кафе. 
                  Это место с историей, душой и характером.
                </p>
                <p>
                  Всё началось с обычного гаража, который хозяин решил превратить в уютное пространство 
                  для встреч с друзьями. Деревянные столы, винтажные декор и запах свежесваренного кофе — 
                  так родилось наше кафе.
                </p>
                <p>
                  Мы сохранили ту самую гаражную атмосферу: искренность, простоту и тепло. 
                  Здесь каждый гость — не просто посетитель, а желанный друг.
                </p>
                <p>
                  Приходите к нам за настоящим кофе, домашней выпечкой и приятными разговорами. 
                  У Пчелинцева всегда рады гостям!
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="text-foreground">Ежедневно 8:00 - 22:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ждём вас в гости!</h2>
            <p className="text-xl text-muted-foreground">Приходите на чашечку кофе и домашние разговоры</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 space-y-3 bg-card border-border">
              <Icon name="MapPin" size={32} className="text-primary mx-auto" />
              <h3 className="font-bold text-lg">Адрес</h3>
              <p className="text-muted-foreground">ул. Гаражная, 12<br/>Москва</p>
            </Card>
            <Card className="p-6 space-y-3 bg-card border-border">
              <Icon name="Phone" size={32} className="text-primary mx-auto" />
              <h3 className="font-bold text-lg">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </Card>
            <Card className="p-6 space-y-3 bg-card border-border">
              <Icon name="Mail" size={32} className="text-primary mx-auto" />
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-muted-foreground">hello@pchelintsev.cafe</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold text-primary">Кафе у Пчелинцева</h3>
          <p className="text-muted-foreground">Домашний уют в каждой чашке</p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={24} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground pt-4">© 2024 Кафе у Пчелинцева. Сделано с ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
