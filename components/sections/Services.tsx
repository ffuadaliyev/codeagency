'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import * as Icons from 'lucide-react'

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

interface Service {
  id: string
  slug: string
  icon: string
  titleAz: string
  titleEn: string
  titleRu: string
  descAz: string
  descEn: string
  descRu: string
  featuresAz: string
  featuresEn: string
  featuresRu: string
}

export function Services() {
  const { language, t } = useLanguage()
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services')
      if (response.ok) {
        const data = await response.json()
        setServices(data.slice(0, 6)) // Yalnız ilk 6-nı göstər
      }
    } catch (error) {
      console.error('Error fetching services:', error)
    }
  }

  const getIconComponent = (iconName: string) => {
    const Icon = (Icons as any)[iconName]
    return Icon || Icons.Box
  }

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
            const Icon = getIconComponent(service.icon)
            const title = language === 'az' ? service.titleAz : language === 'ru' ? service.titleRu : service.titleEn
            const description = language === 'az' ? service.descAz : language === 'ru' ? service.descRu : service.descEn
            const features = language === 'az'
              ? JSON.parse(service.featuresAz)
              : language === 'ru'
              ? JSON.parse(service.featuresRu)
              : JSON.parse(service.featuresEn)

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={`/services#${service.slug}`} className="group block h-full">
                  <Card className="h-full hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                        <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
                      </div>
                      <CardTitle className="group-hover:text-gold transition-colors">
                        {title}
                      </CardTitle>
                      <CardDescription>
                        {description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {features.slice(0, 3).map((feature: string, index: number) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature.substring(0, 20)}...
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
