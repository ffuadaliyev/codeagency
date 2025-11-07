'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import * as Icons from 'lucide-react'

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
  deliveryAz: string
  deliveryEn: string
  deliveryRu: string
  priceRange: string
  order: number
}

export default function ServicesPage() {
  const { language, t } = useLanguage()
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services')
      if (response.ok) {
        const data = await response.json()
        setServices(data)
      }
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  const getIconComponent = (iconName: string) => {
    const Icon = (Icons as any)[iconName]
    return Icon || Icons.Box
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-stone-DEFAULT">Yüklənir...</div>
      </div>
    )
  }

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
          {services.length === 0 ? (
            <div className="text-center text-stone-DEFAULT py-12">
              {t('Hələ xidmət əlavə edilməyib.', 'No services added yet.', 'Услуги еще не добавлены.')}
            </div>
          ) : (
            <div className="space-y-12">
              {services.map((service) => {
                const Icon = getIconComponent(service.icon)
                const features = language === 'az'
                  ? JSON.parse(service.featuresAz)
                  : language === 'ru'
                  ? JSON.parse(service.featuresRu)
                  : JSON.parse(service.featuresEn)

                const title = language === 'az' ? service.titleAz : language === 'ru' ? service.titleRu : service.titleEn
                const desc = language === 'az' ? service.descAz : language === 'ru' ? service.descRu : service.descEn
                const delivery = language === 'az' ? service.deliveryAz : language === 'ru' ? service.deliveryRu : service.deliveryEn

                return (
                  <div key={service.id} id={service.slug} className="scroll-mt-24">
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
                                  {title}
                                </CardTitle>
                                <CardDescription className="text-base">
                                  {desc}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="p-0">
                            <h3 className="text-sm font-semibold text-stone-light mb-3">
                              {t('Əsas xüsusiyyətlər:', 'Key features:', 'Основные функции:')}
                            </h3>
                            <ul className="space-y-2 mb-6">
                              {features.map((feature: string, index: number) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-stone-DEFAULT">
                                  <span className="text-gold mt-1">✓</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </div>
                        <div className="bg-carbon border-l border-carbon-border p-8 flex flex-col justify-between">
                          <div>
                            <div className="text-sm text-stone-DEFAULT mb-2">
                              {t('Çatdırılma müddəti', 'Delivery time', 'Срок поставки')}
                            </div>
                            <div className="text-2xl font-serif text-gold mb-6">
                              {delivery}
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
          )}
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
