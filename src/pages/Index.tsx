import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary flex items-center justify-center font-rajdhani font-bold text-xl text-black">
                ❄️
              </div>
              <span className="font-rajdhani text-2xl font-bold">FLAKEGRIEF</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О сервере' },
                { id: 'rules', label: 'Правила' },
                { id: 'donate', label: 'Донат' },
                { id: 'forum', label: 'Форум' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-rajdhani text-lg transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 text-lg px-4 py-2 bg-primary text-black">
              Версия 1.16.5
            </Badge>
            <h1 className="font-rajdhani text-6xl md:text-8xl font-bold mb-6 minecraft-shadow">
              ☃️ FLAKEGRIEF ⛄
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Сервер с уникальными механиками, двумя валютами и активным комьюнити
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Card className="bg-card/50 backdrop-blur border-primary/20 glow-green">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Icon name="Users" className="text-primary" size={32} />
                    <div className="text-left">
                      <p className="text-3xl font-rajdhani font-bold text-primary">Смотреть на IP</p>
                      <p className="text-sm text-muted-foreground">Игроков онлайн</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Icon name="Server" className="text-muted-foreground" size={32} />
                    <div className="text-left">
                      <p className="text-base font-rajdhani font-bold font-mono">flakeworld.minerent.io</p>
                      <p className="text-sm text-muted-foreground">IP сервера</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="font-rajdhani text-xl h-14 px-8 animate-glow-pulse">
              <Icon name="Play" size={24} className="mr-2" />
              Начать играть
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-rajdhani text-5xl font-bold mb-12 text-center">О сервере</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Gem',
                title: 'Уникальные предметы',
                description: 'Эксклюзивные предметы и кастомные крафты, которых нет на других серверах'
              },
              {
                icon: 'Shield',
                title: 'Защита территорий',
                description: 'Надёжная система приватов для защиты твоих построек'
              },
              {
                icon: 'Zap',
                title: 'Без лагов',
                description: 'Мощные сервера и оптимизация для стабильной игры'
              },
              {
                icon: 'Trophy',
                title: 'Ивенты',
                description: 'Регулярные ивенты с ценными призами для всех игроков'
              },
              {
                icon: 'Users',
                title: 'Активное комьюнити',
                description: 'Дружелюбные игроки и отзывчивая администрация'
              },
              {
                icon: 'Coins',
                title: 'Двойная экономика',
                description: 'Две игровые валюты для продуманной торговой системы'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <Icon name={feature.icon as any} className="text-primary mb-4" size={40} />
                  <CardTitle className="font-rajdhani text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="min-h-screen flex items-center py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-rajdhani text-5xl font-bold mb-12 text-center">Правила сервера</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                title: '1. Основные положения',
                content: 'Незнание правил не освобождает от ответственности. Решения администрации окончательны. Запрещены взлом аккаунтов, распространение личных данных, нанесение вреда серверу и продажа игровых ценностей за реальные деньги.'
              },
              {
                title: '2. Никнеймы и аккаунты',
                content: 'Ник не должен содержать оскорблений. Сохраняйте чеки после покупок. Безопасность аккаунта — ваша ответственность. Используйте /link для привязки через Telegram.'
              },
              {
                title: '3. Приобретение платных услуг',
                content: 'Участие в проекте бесплатно. Донат — добровольная поддержка, не подлежит возврату. Покупка привилегий не даёт права нарушать правила.'
              },
              {
                title: '4. Правила поведения',
                content: 'Запрещены: флуд, капс, оскорбления, унижения, угрозы, моральное давление, призывы к суициду, экстремизм, нацистская символика, попрошайничество, дезинформация, реклама сторонних серверов.'
              },
              {
                title: '5. Стороннее ПО',
                content: 'Запрещены читы и моды, дающие преимущество (кроме HaperVisual, topkavisual, darknessvisual). Игра с читами = бан на 40 дней. Помощь читеру = бан на 14 дней.'
              },
              {
                title: '6. Игровой процесс',
                content: 'Запрещены лаг-машины, лава-касты (бан 60 дней), спам командами (мут 20 часов), ложные жалобы (мут 12 дней).'
              },
              {
                title: '7. Варпы',
                content: 'Минимум 10 блоков от варпа до ловушки. Выход 2x1 блока, свободный от препятствий. В радиусе 5 блоков — без обсидиана. Варп не в земле/шахте. Нарушение = бан 1 день.'
              }
            ].map((rule, idx) => (
              <AccordionItem key={idx} value={`rule-${idx}`} className="bg-card border-border">
                <AccordionTrigger className="font-rajdhani text-xl px-6 hover:text-primary">
                  {rule.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-muted-foreground">
                  {rule.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="donate" className="min-h-screen flex items-center py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-rajdhani text-5xl font-bold mb-12 text-center">Донат</h2>
          <div className="flex flex-col items-center justify-center">
            <Card className="bg-card/50 backdrop-blur border-primary max-w-2xl">
              <CardHeader className="text-center">
                <Icon name="Sparkles" className="text-primary mx-auto mb-4" size={64} />
                <CardTitle className="font-rajdhani text-4xl mb-4">Скоро открытие!</CardTitle>
                <CardDescription className="text-lg">
                  Мы работаем над системой донат-привилегий. Следи за новостями в нашем Telegram-канале, чтобы не пропустить старт!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button size="lg" className="font-rajdhani text-xl" asChild>
                  <a href="https://t.me/flakegrief" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Перейти в Telegram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="forum" className="min-h-screen flex items-center py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-rajdhani text-5xl font-bold mb-12 text-center">Форум и новости</h2>
          <div className="flex flex-col items-center justify-center">
            <Card className="bg-card/50 backdrop-blur border-border max-w-2xl">
              <CardHeader className="text-center">
                <Icon name="MessageSquare" className="text-primary mx-auto mb-4" size={64} />
                <CardTitle className="font-rajdhani text-3xl mb-4">Присоединяйся к нам!</CardTitle>
                <CardDescription className="text-lg">
                  Общайся с игроками, обсуждай новости сервера и участвуй в жизни комьюнити в нашем Telegram-канале
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button size="lg" className="font-rajdhani text-xl" asChild>
                  <a href="https://t.me/flakegrief" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram-канал
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary flex items-center justify-center font-rajdhani font-bold text-lg text-black">
              ❄️
            </div>
            <span className="font-rajdhani text-xl font-bold">FLAKEGRIEF</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Minecraft сервер 1.16.5 с уникальными механиками и двойной экономикой
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://t.me/flakegrief" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://t.me/lerocose" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={20} />
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            © 2026 FlakeGrief. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;