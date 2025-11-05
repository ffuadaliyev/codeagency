'use client'

import { Search, Lightbulb, Code, TestTube, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'

const getSteps = (t: (az: string, en: string, ru?: string) => string) => [
  {
    icon: Search,
    title: t('Audit & Təhlil', 'Audit & Analysis', 'Аудит и анализ'),
    description: t(
      'Biznes ehtiyaclarınızın dərin təhlili və texniki audit',
      'In-depth analysis of business needs and technical audit',
      'Глубокий анализ бизнес-потребностей и технический аудит'
    ),
    details: [
      t('Cari vəziyyətin qiymətləndirilməsi', 'Current state assessment', 'Оценка текущего состояния'),
      t('Ehtiyacların müəyyənləşdirilməsi', 'Requirements identification', 'Определение требований'),
      t('Həll yollarının araşdırılması', 'Solution exploration', 'Исследование решений'),
    ],
  },
  {
    icon: Lightbulb,
    title: t('Dizayn & Planlaşdırma', 'Design & Planning', 'Дизайн и планирование'),
    description: t(
      'Həll konsepsiyasının hazırlanması və arxitektura dizaynı',
      'Solution concept development and architecture design',
      'Разработка концепции решения и архитектурный дизайн'
    ),
    details: [
      t('UI/UX dizayn', 'UI/UX design', 'UI/UX дизайн'),
      t('Texniki arxitektura', 'Technical architecture', 'Техническая архитектура'),
      t('Yol xəritəsi və büdcə', 'Roadmap and budget', 'Дорожная карта и бюджет'),
    ],
  },
  {
    icon: Code,
    title: t('İnkişaf', 'Development', 'Разработка'),
    description: t(
      'Çevik metodologiya ilə addım-addım kodlaşdırma',
      'Step-by-step coding with agile methodology',
      'Пошаговое программирование с гибкой методологией'
    ),
    details: [
      t('Sprint əsaslı inkişaf', 'Sprint-based development', 'Разработка на основе спринтов'),
      t('Kod rəyi və keyfiyyət', 'Code review and quality', 'Ревью кода и качество'),
      t('Davamlı inteqrasiya', 'Continuous integration', 'Непрерывная интеграция'),
    ],
  },
  {
    icon: TestTube,
    title: t('Test & Optimallaşdırma', 'Testing & Optimization', 'Тестирование и оптимизация'),
    description: t(
      'Hərtərəfli test və performans yaxşılaşdırılması',
      'Comprehensive testing and performance improvement',
      'Комплексное тестирование и улучшение производительности'
    ),
    details: [
      t('Avtomatik və manual test', 'Automated and manual testing', 'Автоматическое и ручное тестирование'),
      t('Performans optimallaşdırması', 'Performance optimization', 'Оптимизация производительности'),
      t('Təhlükəsizlik yoxlanışı', 'Security audit', 'Проверка безопасности'),
    ],
  },
  {
    icon: Rocket,
    title: t('Buraxılış & Dəstək', 'Launch & Support', 'Запуск и поддержка'),
    description: t(
      'İstehsala çıxarış və davamlı texniki dəstək',
      'Production launch and ongoing technical support',
      'Запуск в продакшн и постоянная техническая поддержка'
    ),
    details: [
      t('Deployment və monitoring', 'Deployment and monitoring', 'Развертывание и мониторинг'),
      t('İstifadəçi təlimi', 'User training', 'Обучение пользователей'),
      t('24/7 texniki dəstək', '24/7 technical support', 'Круглосуточная техподдержка'),
    ],
  },
]

export function ProcessSection() {
  const { t } = useLanguage()
  const steps = getSteps(t)

  return (
    <section className="py-24 lg:py-32 bg-carbon relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-stone-light mb-4">
            {t('Bizim Proses', 'Our Process', 'Наш процесс')}
          </h2>
          <p className="text-lg text-stone-DEFAULT max-w-3xl mx-auto">
            {t(
              'Uğurlu layihələr üçün sistemli yanaşma',
              'Systematic approach for successful projects',
              'Системный подход для успешных проектов'
            )}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-carbon-border -translate-y-1/2" />
            <div className="grid grid-cols-5 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4 group">
                        <div className="absolute inset-0 bg-gold/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                        <div className="relative w-16 h-16 rounded-full bg-carbon-light border-2 border-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-gold" aria-hidden="true" />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold text-carbon text-xs font-bold flex items-center justify-center border-4 border-carbon">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="font-serif text-lg text-stone-light mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-stone-DEFAULT mb-4">{step.description}</p>
                      <ul className="text-xs text-stone-DEFAULT/80 space-y-1 text-left">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-1">
                            <span className="text-gold mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-carbon-light border-2 border-gold flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gold text-carbon text-xs font-bold flex items-center justify-center border-2 border-carbon">
                        {index + 1}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="ml-6 mt-2 w-0.5 h-16 bg-carbon-border" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-serif text-xl text-stone-light mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-stone-DEFAULT mb-3">{step.description}</p>
                    <ul className="text-xs text-stone-DEFAULT/80 space-y-1">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span className="text-gold mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
