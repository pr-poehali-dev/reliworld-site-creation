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
              <div className="w-10 h-10 bg-primary flex items-center justify-center font-rajdhani font-bold text-2xl text-black">
                MC
              </div>
              <span className="font-rajdhani text-2xl font-bold">REALWORLD</span>
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
              Версия 1.20.4
            </Badge>
            <h1 className="font-rajdhani text-6xl md:text-8xl font-bold mb-6 minecraft-shadow">
              REALWORLD
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Уникальный сервер выживания с кастомными механиками и дружным комьюнити
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Card className="bg-card/50 backdrop-blur border-primary/20 glow-green">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Icon name="Users" className="text-primary" size={32} />
                    <div className="text-left">
                      <p className="text-3xl font-rajdhani font-bold text-primary">247</p>
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
                      <p className="text-lg font-rajdhani font-bold font-mono">play.realworld.ru</p>
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
                icon: 'Sword',
                title: 'Уникальные механики',
                description: 'Кастомные крафты, RPG система, уникальное оружие и броня'
              },
              {
                icon: 'Shield',
                title: 'Защита территорий',
                description: 'Надёжная система приватов и защиты от гриферов'
              },
              {
                icon: 'Zap',
                title: 'Без лагов',
                description: 'Мощное железо и оптимизированное ядро для плавной игры'
              },
              {
                icon: 'Trophy',
                title: 'Ивенты',
                description: 'Регулярные ивенты с призами для всех игроков'
              },
              {
                icon: 'MessageSquare',
                title: 'Активное комьюнити',
                description: 'Дружелюбные игроки и адекватная администрация'
              },
              {
                icon: 'Coins',
                title: 'Экономика',
                description: 'Продуманная игровая экономика и торговля между игроками'
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
                title: '1. Общие правила',
                content: 'Запрещены читы, оскорбления, флуд в чате. Уважайте других игроков и администрацию.'
              },
              {
                title: '2. Гриферство',
                content: 'Гриферство чужих построек строго запрещено. Нарушители будут забанены навсегда.'
              },
              {
                title: '3. Торговля и экономика',
                content: 'Мошенничество при торговле запрещено. Все сделки на свой страх и риск.'
              },
              {
                title: '4. Багоюз',
                content: 'Использование багов запрещено. О найденных багах сообщайте администрации.'
              },
              {
                title: '5. Реклама',
                content: 'Реклама сторонних серверов и ресурсов запрещена без разрешения администрации.'
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
          <h2 className="font-rajdhani text-5xl font-bold mb-12 text-center">Привилегии</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: 'VIP',
                price: '149₽',
                color: 'border-yellow-500/50',
                features: ['Префикс [VIP]', '3 доп. привата', '/fly в лобби', 'Цветной ник']
              },
              {
                name: 'PREMIUM',
                price: '299₽',
                color: 'border-blue-500/50',
                features: ['Префикс [PREMIUM]', '7 доп. приватов', '/fly на спавне', 'Кастомные команды', 'Приоритет входа']
              },
              {
                name: 'ELITE',
                price: '599₽',
                color: 'border-purple-500/50',
                features: ['Префикс [ELITE]', '15 доп. приватов', '/fly везде', 'Все VIP команды', 'Кастомные эффекты', 'Приоритетная поддержка']
              },
              {
                name: 'LEGEND',
                price: '999₽',
                color: 'border-primary',
                features: ['Префикс [LEGEND]', 'Безлимит приватов', 'Все возможности', 'Уникальные возможности', 'VIP Discord роль', 'Эксклюзивный контент']
              }
            ].map((privilege, idx) => (
              <Card key={idx} className={`bg-card/50 backdrop-blur border-2 ${privilege.color} hover:scale-105 transition-transform`}>
                <CardHeader className="text-center">
                  <CardTitle className="font-rajdhani text-3xl mb-2">{privilege.name}</CardTitle>
                  <div className="text-4xl font-rajdhani font-bold text-primary mb-4">{privilege.price}</div>
                  <CardDescription className="text-left space-y-2">
                    {privilege.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full font-rajdhani text-lg" variant={idx === 3 ? 'default' : 'outline'}>
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="forum" className="min-h-screen flex items-center py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-rajdhani text-5xl font-bold mb-12 text-center">Последние темы форума</h2>
          <div className="space-y-4">
            {[
              { title: 'Обновление 2.5: Новые мобы и данжи', author: 'Admin', replies: 47, time: '2 часа назад' },
              { title: 'Итоги ивента "Битва кланов"', author: 'EventMaster', replies: 128, time: '5 часов назад' },
              { title: 'Гайд по новой системе крафта', author: 'ProPlayer228', replies: 34, time: '8 часов назад' },
              { title: 'Набор в гильдию "Драконы Севера"', author: 'DragonLord', replies: 19, time: '1 день назад' },
              { title: 'Предложения по улучшению PvP', author: 'PvPKing', replies: 56, time: '2 дня назад' }
            ].map((topic, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-rajdhani text-xl font-semibold mb-2 hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="User" size={14} />
                          {topic.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="MessageCircle" size={14} />
                          {topic.replies} ответов
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {topic.time}
                        </span>
                      </div>
                    </div>
                    <Icon name="ChevronRight" className="text-muted-foreground" size={24} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="font-rajdhani text-lg">
              Перейти на форум
              <Icon name="ExternalLink" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary flex items-center justify-center font-rajdhani font-bold text-lg text-black">
              MC
            </div>
            <span className="font-rajdhani text-xl font-bold">REALWORLD</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Лучший Minecraft сервер с выживанием и уникальными механиками
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="Send" size={20} />
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            © 2026 RealWorld MC. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
