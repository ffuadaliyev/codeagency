'use client'

import { Bot, Workflow, Brain, Globe, Database, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Bot,
      title: translations.services.chatbot.title,
      description: translations.services.chatbot.desc,
      tags: [
        t('24/7 Dəstək', '24/7 Support', 'Круглосуточная поддержка'),
        t('Çoxdilli', 'Multilingual', 'Многоязычный'),
        t('İnteqrasiya', 'Integration', 'Интеграция'),
      ],
      href: '/services#chatbot',
    },
    {
      icon: Workflow,
      title: translations.services.automation.title,
      description: translations.services.automation.desc,
      tags: [
        t('ROI Artımı', 'ROI Growth', 'Рост ROI'),
        t('Sürət', 'Speed', 'Скорость'),
        t('Effektivlik', 'Efficiency', 'Эффективность'),
      ],
      href: '/services#automation',
    },
    {
      icon: Brain,
      title: translations.services.ai.title,
      description: translations.services.ai.desc,
      tags: [
        t('Tövsiyə', 'Recommendation', 'Рекомендации'),
        t('Proqnoz', 'Forecast', 'Прогноз'),
        t('Təsnifat', 'Classification', 'Классификация'),
      ],
      href: '/services#ai-integration',
    },
    {
      icon: Globe,
      title: translations.services.web.title,
      description: translations.services.web.desc,
      tags: ['Responsive', 'PWA', 'E-commerce'],
      href: '/services#web-mobile',
    },
    {
      icon: Database,
      title: translations.services.data.title,
      description: translations.services.data.desc,
      tags: [
        t('Böyük Data', 'Big Data', 'Большие данные'),
        t('Vizuallaşdırma', 'Visualization', 'Визуализация'),
        t('Hesabatlar', 'Reports', 'Отчеты'),
      ],
      href: '/services#data',
    },
    {
      icon: TrendingUp,
      title: translations.services.ml.title,
      description: translations.services.ml.desc,
      tags: ['Predictive', 'NLP', 'Computer Vision'],
      href: '/services#ml',
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-carbon relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-stone-light mb-4">
            {t(translations.services.title.az, translations.services.title.en, translations.services.title.ru)}
          </h2>
          <p className="text-lg text-stone-DEFAULT max-w-3xl mx-auto">
            {t(translations.services.subtitle.az, translations.services.subtitle.en, translations.services.subtitle.ru)}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={t(service.title.az, service.title.en, service.title.ru)} variants={itemVariants}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                        <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
                      </div>
                      <CardTitle className="group-hover:text-gold transition-colors">
                        {t(service.title.az, service.title.en, service.title.ru)}
                      </CardTitle>
                      <CardDescription>
                        {t(service.description.az, service.description.en, service.description.ru)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
