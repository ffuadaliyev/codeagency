'use client'

import { Bot, Workflow, Brain, Globe, Database, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const getServices = (t: (az: string, en: string, ru?: string) => string) => [
  {
    id: 'chatbot',
    icon: Bot,
    title: translations.services.chatbot.title,
    description: translations.services.chatbot.desc,
    features: [
      t('Məlumat bazası ilə inteqrasiya', 'Database integration', 'Интеграция с базой данных'),
      t('Çoxdilli cavablar və kontekst yaddaşı', 'Multilingual responses and context memory', 'Многоязычные ответы и контекстная память'),
      t('Sorğu yönləndirmə və avtomatik cavablandırma', 'Query routing and automatic responses', 'Маршрутизация запросов и автоматические ответы'),
      t('Bilik bazası və hesabatlama', 'Knowledge base and reporting', 'База знаний и отчетность'),
      t('24/7 müştəri dəstəyi', '24/7 customer support', 'Круглосуточная поддержка клиентов'),
    ],
    technologies: ['NLP', 'Machine Learning', 'API Integration'],
    deliveryTime: t('3-6 həftə', '3-6 weeks', '3-6 недель'),
  },
  {
    id: 'automation',
    icon: Workflow,
    title: translations.services.automation.title,
    description: translations.services.automation.desc,
    features: [
      t('İş axını orkestri', 'Workflow orchestration', 'Оркестрация рабочих процессов'),
      t('Mütəmadi məlumat toplama və transformasiya', 'Regular data collection and transformation', 'Регулярный сбор и преобразование данных'),
      t('Bildiriş və eskalasiya sistemləri', 'Notification and escalation systems', 'Системы уведомлений и эскалации'),
      t('Status izləmə və arxivləşdirmə', 'Status tracking and archiving', 'Отслеживание статуса и архивирование'),
      t('ROI ölçülməsi', 'ROI measurement', 'Измерение ROI'),
    ],
    technologies: ['Workflow Automation', 'API Integration', 'Cloud Services'],
    deliveryTime: t('4-8 həftə', '4-8 weeks', '4-8 недель'),
  },
  {
    id: 'ai-integration',
    icon: Brain,
    title: translations.services.ai.title,
    description: translations.services.ai.desc,
    features: [
      t('Mətn, şəkil, səs və strukturlaşdırılmış data ilə iş', 'Work with text, image, audio and structured data', 'Работа с текстом, изображениями, аудио и структурированными данными'),
      t('Tövsiyə və təsnifat sistemləri', 'Recommendation and classification systems', 'Системы рекомендаций и классификации'),
      t('Anomaliya aşkarlanması və proqnozlaşdırma', 'Anomaly detection and forecasting', 'Обнаружение аномалий и прогнозирование'),
      t('Özəl verilənlərlə incə-tənzimləmə', 'Fine-tuning with custom data', 'Тонкая настройка на пользовательских данных'),
      t('Giriş nəzarəti və təhlükəsizlik', 'Access control and security', 'Контроль доступа и безопасность'),
    ],
    technologies: ['Deep Learning', 'Computer Vision', 'NLP'],
    deliveryTime: t('6-12 həftə', '6-12 weeks', '6-12 недель'),
  },
  {
    id: 'web-mobile',
    icon: Globe,
    title: translations.services.web.title,
    description: translations.services.web.desc,
    features: [
      t('Responsive və mobil-öncə dizayn', 'Responsive and mobile-first design', 'Адаптивный и мобильный дизайн'),
      t('E-commerce və ödəniş inteqrasiyası', 'E-commerce and payment integration', 'Интеграция электронной коммерции и платежей'),
      t('Rezervasiya və şəxsi kabinet', 'Booking and personal cabinet', 'Бронирование и личный кабинет'),
      t('Çoxdillilik və SEO optimallaşdırma', 'Multilingual and SEO optimization', 'Многоязычность и SEO-оптимизация'),
      t('Test və monitorinq', 'Testing and monitoring', 'Тестирование и мониторинг'),
    ],
    technologies: ['React', 'Next.js', 'React Native', 'TypeScript'],
    deliveryTime: t('4-12 həftə', '4-12 weeks', '4-12 недель'),
  },
  {
    id: 'data',
    icon: Database,
    title: translations.services.data.title,
    description: translations.services.data.desc,
    features: [
      t('Strukturlaşdırma və keyfiyyət yoxlaması', 'Structuring and quality control', 'Структурирование и контроль качества'),
      t('Uzunmüddətli saxlanma və versiyalaşdırma', 'Long-term storage and versioning', 'Долгосрочное хранение и версионирование'),
      t('İnteraktiv dashboardlar', 'Interactive dashboards', 'Интерактивные панели'),
      t('Axtarış və filter sistemləri', 'Search and filter systems', 'Системы поиска и фильтрации'),
      t('Periodik hesabatlar', 'Periodic reports', 'Периодические отчеты'),
    ],
    technologies: ['Data Engineering', 'ETL', 'Analytics'],
    deliveryTime: t('3-8 həftə', '3-8 weeks', '3-8 недель'),
  },
  {
    id: 'ml',
    icon: TrendingUp,
    title: translations.services.ml.title,
    description: translations.services.ml.desc,
    features: [
      t('Eksperiment dizaynı və A/B test', 'Experiment design and A/B testing', 'Дизайн экспериментов и A/B тестирование'),
      t('Xüsusiyyət mühəndisliyi', 'Feature engineering', 'Инжиниринг признаков'),
      t('Model izləmə və versiyalaşdırma', 'Model tracking and versioning', 'Отслеживание и версионирование моделей'),
      t('Ədalətlilik və izah edilə bilənlik', 'Fairness and explainability', 'Справедливость и объяснимость'),
      t('Production deployment', 'Production deployment', 'Развертывание в продакшн'),
    ],
    technologies: ['Python', 'ML Frameworks', 'MLOps'],
    deliveryTime: t('8-16 həftə', '8-16 weeks', '8-16 недель'),
  },
]

export default function ServicesPage() {
  const { language, t } = useLanguage()
  const services = getServices(t)

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              {t(translations.services.title.az, translations.services.title.en, translations.services.title.ru)}
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              {t(translations.services.subtitle.az, translations.services.subtitle.en, translations.services.subtitle.ru)}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-carbon-light">
        <div className="container px-4">
          <div className="space-y-12">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <Card className="overflow-hidden hover:border-gold/50 transition-all">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 p-8">
                        <CardHeader className="p-0 mb-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-7 h-7 text-gold" aria-hidden="true" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl mb-2">
                                {t(service.title.az, service.title.en, service.title.ru)}
                              </CardTitle>
                              <CardDescription className="text-base">
                                {t(service.description.az, service.description.en, service.description.ru)}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <h3 className="text-sm font-semibold text-stone-light mb-3">
                            {t('Əsas xüsusiyyətlər:', 'Key features:', 'Основные функции:')}
                          </h3>
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-sm text-stone-DEFAULT">
                                <span className="text-gold mt-1">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                      <div className="bg-carbon border-l border-carbon-border p-8 flex flex-col justify-between">
                        <div>
                          <div className="text-sm text-stone-DEFAULT mb-2">
                            {t('Çatdırılma müddəti', 'Delivery time', 'Срок поставки')}
                          </div>
                          <div className="text-2xl font-serif text-gold mb-6">
                            {service.deliveryTime}
                          </div>
                          <div className="text-sm text-stone-DEFAULT mb-4">
                            {t(
                              '* Layihənin mürəkkəbliyindən asılı olaraq dəyişə bilər',
                              '* May vary depending on project complexity',
                              '* Может варьироваться в зависимости от сложности проекта'
                            )}
                          </div>
                        </div>
                        <Button asChild size="lg" className="w-full">
                          <Link href="/quote">
                            {t(translations.common.cta.getQuote.az, translations.common.cta.getQuote.en, translations.common.cta.getQuote.ru)}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-carbon">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-stone-light mb-4">
              {t('Özəl həll lazımdır?', 'Need a custom solution?', 'Нужно индивидуальное решение?')}
            </h2>
            <p className="text-stone-DEFAULT mb-8">
              {t(
                'Yuxarıdakı xidmətlər siyahısında axtardığınızı tapa bilmirsiniz? Gəlin sizin spesifik ehtiyaclarınız üçün custom həll hazırlayaq.',
                "Can't find what you're looking for in the services list above? Let's create a custom solution for your specific needs.",
                'Не можете найти то, что ищете в списке услуг выше? Давайте создадим индивидуальное решение для ваших конкретных потребностей.'
              )}
            </p>
            <Button asChild size="xl">
              <Link href="/contact">
                {t(translations.common.cta.contactUs.az, translations.common.cta.contactUs.en, translations.common.cta.contactUs.ru)}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
