'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const getServices = (t: (az: string, en: string, ru?: string) => string) => [
  t('Chatbot & AI Köməkçilər', 'Chatbot & AI Assistants', 'Чатбот и AI-ассистенты'),
  t('Avtomatlaşdırma Həlləri', 'Automation Solutions', 'Решения автоматизации'),
  t('AI İntegrasiyası', 'AI Integration', 'Интеграция ИИ'),
  t('Veb sayt & Mobil', 'Web & Mobile', 'Веб и мобильные'),
  t('Data Analizi', 'Data Analysis', 'Анализ данных'),
  t('Data Science & ML', 'Data Science & ML', 'Data Science и ML'),
  t('Digər', 'Other', 'Другое'),
]

const getBudgetRanges = (t: (az: string, en: string, ru?: string) => string) => [
  '< 5.000 AZN',
  '5.000 - 10.000 AZN',
  '10.000 - 25.000 AZN',
  '25.000 - 50.000 AZN',
  '> 50.000 AZN',
  t('Müzakirə ediləcək', 'To be discussed', 'Обсуждается'),
]

const getTimelines = (t: (az: string, en: string, ru?: string) => string) => [
  t('1-2 həftə', '1-2 weeks', '1-2 недели'),
  t('1 ay', '1 month', '1 месяц'),
  t('2-3 ay', '2-3 months', '2-3 месяца'),
  t('3-6 ay', '3-6 months', '3-6 месяцев'),
  t('6+ ay', '6+ months', '6+ месяцев'),
  t('Çevik', 'Flexible', 'Гибкий'),
]

export default function QuotePage() {
  const { t } = useLanguage()
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState<string>('')
  const [selectedTimeline, setSelectedTimeline] = useState<string>('')

  const services = getServices(t)
  const budgetRanges = getBudgetRanges(t)
  const timelines = getTimelines(t)

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              {t(translations.quote.title.az, translations.quote.title.en, translations.quote.title.ru)}
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              {t(translations.quote.subtitle.az, translations.quote.subtitle.en, translations.quote.subtitle.ru)}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>
                  {t('Layihə Məlumatları', 'Project Details', 'Детали проекта')}
                </CardTitle>
                <CardDescription>
                  {t(
                    'Bütün məlumatlar məxfidir və yalnız təklif hazırlanması üçün istifadə olunur',
                    'All information is confidential and used only for proposal preparation',
                    'Вся информация конфиденциальна и используется только для подготовки предложения'
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-8">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-lg text-stone-light">
                      {t('Əlaqə məlumatları', 'Contact information', 'Контактная информация')}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {t('Ad Soyad *', 'Full Name *', 'Полное имя *')}
                        </Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {t('E-poçt *', 'Email *', 'Эл. почта *')}
                        </Label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          {t('Telefon *', 'Phone *', 'Телефон *')}
                        </Label>
                        <Input id="phone" type="tel" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">
                          {t('Şirkət', 'Company', 'Компания')}
                        </Label>
                        <Input id="company" />
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-lg text-stone-light">
                      {t(
                        'Hansı xidmətlər maraqlandırır? *',
                        'Which services are you interested in? *',
                        'Какие услуги вас интересуют? *'
                      )}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus-ring ${
                            selectedServices.includes(service)
                              ? 'bg-gold text-carbon'
                              : 'bg-carbon border border-carbon-border text-stone-DEFAULT hover:border-gold'
                          }`}
                        >
                          {service}
                          {selectedServices.includes(service) && (
                            <CheckCircle2 className="inline-block ml-2 w-4 h-4" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-lg text-stone-light">
                      {t('Büdcə aralığı *', 'Budget range *', 'Диапазон бюджета *')}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setSelectedBudget(range)}
                          className={`px-4 py-3 rounded-lg text-sm font-medium transition-all focus-ring text-left ${
                            selectedBudget === range
                              ? 'bg-gold text-carbon'
                              : 'bg-carbon border border-carbon-border text-stone-DEFAULT hover:border-gold'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-lg text-stone-light">
                      {t('İstənilən müddət *', 'Desired timeline *', 'Желаемые сроки *')}
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-2">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline}
                          type="button"
                          onClick={() => setSelectedTimeline(timeline)}
                          className={`px-4 py-3 rounded-lg text-sm font-medium transition-all focus-ring ${
                            selectedTimeline === timeline
                              ? 'bg-gold text-carbon'
                              : 'bg-carbon border border-carbon-border text-stone-DEFAULT hover:border-gold'
                          }`}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">
                      {t('Layihə təsviri *', 'Project description *', 'Описание проекта *')}
                    </Label>
                    <Textarea
                      id="description"
                      required
                      placeholder={t(
                        'Layihənizin təsvirini, məqsədlərini və gözləntilərini qeyd edin...',
                        'Describe your project, goals and expectations...',
                        'Опишите ваш проект, цели и ожидания...'
                      )}
                      className="min-h-[150px]"
                    />
                    <p className="text-xs text-stone-DEFAULT">
                      {t(
                        'Nə qədər çox məlumat versəniz, bir o qədər dəqiq təklif hazırlaya bilərik',
                        'The more information you provide, the more accurate proposal we can prepare',
                        'Чем больше информации вы предоставите, тем более точное предложение мы сможем подготовить'
                      )}
                    </p>
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-4 pt-4">
                    <Button type="submit" size="lg" className="flex-1 sm:flex-none">
                      {t('Təklif sorğusu göndər', 'Send quote request', 'Отправить запрос предложения')}
                    </Button>
                    <p className="text-xs text-stone-DEFAULT">
                      {t(
                        '24-48 saat ərzində cavab verəcəyik',
                        'We will respond within 24-48 hours',
                        'Мы ответим в течение 24-48 часов'
                      )}
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
