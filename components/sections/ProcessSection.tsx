'use client'

import { Search, Lightbulb, Code, TestTube, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const steps = [
  {
    icon: Search,
    title: 'Audit & Təhlil',
    description: 'Biznes ehtiyaclarınızın dərin təhlili və texniki audit',
    details: ['Cari vəziyyətin qiymətləndirilməsi', 'Ehtiyacların müəyyənləşdirilməsi', 'Həll yollarının araşdırılması'],
  },
  {
    icon: Lightbulb,
    title: 'Dizayn & Planlaşdırma',
    description: 'Həll konsepsiyasının hazırlanması və arxitektura dizaynı',
    details: ['UI/UX dizayn', 'Texniki arxitektura', 'Yol xəritəsi və büdcə'],
  },
  {
    icon: Code,
    title: 'İnkişaf',
    description: 'Çevik metodologiya ilə addım-addım kodlaşdırma',
    details: ['Sprint əsaslı inkişaf', 'Kod rəyi və keyfiyyət', 'Davamlı inteqrasiya'],
  },
  {
    icon: TestTube,
    title: 'Test & Optimallaşdırma',
    description: 'Hərtərəfli test və performans yaxşılaşdırılması',
    details: ['Avtomatik və manual test', 'Performans optimallaşdırması', 'Təhlükəsizlik yoxlanışı'],
  },
  {
    icon: Rocket,
    title: 'Buraxılış & Dəstək',
    description: 'İstehsala çıxarış və davamlı texniki dəstək',
    details: ['Deployment və monitoring', 'İstifadəçi təlimi', '24/7 texniki dəstək'],
  },
]

export function ProcessSection() {
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
            Bizim Proses
          </h2>
          <p className="text-lg text-stone-DEFAULT max-w-3xl mx-auto">
            Uğurlu layihələr üçün sistemli yanaşma
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
