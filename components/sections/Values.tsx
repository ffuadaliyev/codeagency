'use client'

import { Zap, Shield, TrendingUp, Scale } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export function Values() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Zap,
      title: translations.values.speed.title,
      description: translations.values.speed.desc,
    },
    {
      icon: Scale,
      title: translations.values.scale.title,
      description: translations.values.scale.desc,
    },
    {
      icon: TrendingUp,
      title: translations.values.transparency.title,
      description: translations.values.transparency.desc,
    },
    {
      icon: Shield,
      title: translations.values.security.title,
      description: translations.values.security.desc,
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-carbon-light relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(198,161,91,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(198,161,91,0.02)_1px,transparent_1px)] bg-[size:96px_96px]" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-stone-light mb-4">
            {t(translations.values.title.az, translations.values.title.en, translations.values.title.ru)}
          </h2>
          <p className="text-lg text-stone-DEFAULT max-w-3xl mx-auto">
            {t(translations.values.subtitle.az, translations.values.subtitle.en, translations.values.subtitle.ru)}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value) => {
            const Icon = value.icon
            return (
              <motion.div
                key={t(value.title.az, value.title.en, value.title.ru)}
                variants={itemVariants}
                className="group relative"
              >
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-gold" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-stone-light mb-3 group-hover:text-gold transition-colors">
                    {t(value.title.az, value.title.en, value.title.ru)}
                  </h3>
                  <p className="text-sm text-stone-DEFAULT leading-relaxed">
                    {t(value.description.az, value.description.en, value.description.ru)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
