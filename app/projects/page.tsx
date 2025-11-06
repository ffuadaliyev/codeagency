'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function ProjectsPage() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 'ecommerce-ai',
      title: t('E-commerce AI Asistenti', 'E-commerce AI Assistant', 'E-commerce AI-ассистент'),
      category: t('AI & Chatbot', 'AI & Chatbot', 'ИИ и чатбот'),
      description: t(
        'Onlayn mağaza üçün 24/7 müştəri dəstəyi və məhsul tövsiyə sistemi. 40% sorğu azalması, 25% konversiya artımı.',
        '24/7 customer support and product recommendation system for online store. 40% query reduction, 25% conversion increase.',
        'Круглосуточная поддержка клиентов и система рекомендаций продуктов для интернет-магазина. Снижение запросов на 40%, увеличение конверсии на 25%.'
      ),
      tags: ['AI', 'NLP', 'E-commerce'],
      image: '/images/projects/placeholder-1.jpg',
      metrics: { roi: '+120%', time: t('8 həftə', '8 weeks', '8 недель'), satisfaction: '92%' },
    },
    {
      id: 'crm-automation',
      title: t('CRM Avtomatlaşdırma', 'CRM Automation', 'Автоматизация CRM'),
      category: t('Avtomatlaşdırma', 'Automation', 'Автоматизация'),
      description: t(
        'Satış və müştəri məlumatlarının avtomatik emalı, e-poçt kampaniyaları və hesabatlama sistemi.',
        'Automated processing of sales and customer data, email campaigns and reporting system.',
        'Автоматическая обработка данных о продажах и клиентах, email-кампании и система отчетности.'
      ),
      tags: [t('Avtomatlaşdırma', 'Automation', 'Автоматизация'), 'CRM', t('Analitika', 'Analytics', 'Аналитика')],
      image: '/images/projects/placeholder-2.jpg',
      metrics: { roi: '+85%', time: t('6 həftə', '6 weeks', '6 недель'), satisfaction: '88%' },
    },
    {
      id: 'data-dashboard',
      title: t('Analitik Dashboard', 'Analytics Dashboard', 'Аналитическая панель'),
      category: t('Data Science', 'Data Science', 'Data Science'),
      description: t(
        'Müxtəlif mənbələrdən real-vaxt məlumat toplama və vizuallaşdırma platforması.',
        'Real-time data collection and visualization platform from various sources.',
        'Платформа для сбора и визуализации данных из различных источников в реальном времени.'
      ),
      tags: ['Dashboard', t('Böyük Data', 'Big Data', 'Большие данные'), t('Vizuallaşdırma', 'Visualization', 'Визуализация')],
      image: '/images/projects/placeholder-3.jpg',
      metrics: { roi: '+95%', time: t('10 həftə', '10 weeks', '10 недель'), satisfaction: '90%' },
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              {t('Layihələrimiz', 'Our Projects', 'Наши проекты')}
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              {t(
                'Uğurlu nəticələr və ölçülə bilən ROI ilə həyata keçirdiyimiz layihələr',
                'Projects implemented with successful results and measurable ROI',
                'Проекты, реализованные с успешными результатами и измеримым ROI'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-carbon-light">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block"
              >
                <Card className="h-full hover:border-gold/50 hover:-translate-y-1 transition-all overflow-hidden">
                  <div className="aspect-video bg-carbon relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center text-stone-DEFAULT text-sm">
                      [Project Image]
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
                    </div>
                    <CardTitle className="group-hover:text-gold transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-carbon-border">
                      <div>
                        <div className="text-xs text-stone-DEFAULT mb-1">ROI</div>
                        <div className="font-serif text-gold">{project.metrics.roi}</div>
                      </div>
                      <div>
                        <div className="text-xs text-stone-DEFAULT mb-1">
                          {t('Müddət', 'Duration', 'Продолжительность')}
                        </div>
                        <div className="font-serif text-gold">{project.metrics.time}</div>
                      </div>
                      <div>
                        <div className="text-xs text-stone-DEFAULT mb-1">
                          {t('Məmnuniyyət', 'Satisfaction', 'Удовлетворенность')}
                        </div>
                        <div className="font-serif text-gold">{project.metrics.satisfaction}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
