'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'

const services = [
  'Chatbot & AI Köməkçilər',
  'Avtomatlaşdırma Həlləri',
  'AI İntegrasiyası',
  'Veb sayt & Mobil',
  'Data Analizi',
  'Data Science & ML',
  'Digər',
]

const budgetRanges = [
  '< 5.000 AZN',
  '5.000 - 10.000 AZN',
  '10.000 - 25.000 AZN',
  '25.000 - 50.000 AZN',
  '> 50.000 AZN',
  'Müzakirə ediləcək',
]

const timelines = [
  '1-2 həftə',
  '1 ay',
  '2-3 ay',
  '3-6 ay',
  '6+ ay',
  'Çevik',
]

export default function QuotePage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState<string>('')
  const [selectedTimeline, setSelectedTimeline] = useState<string>('')

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
              Təklif al
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              Layihəniz üçün pulsuz qiymətləndirmə və təklif alın
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Layihə Məlumatları</CardTitle>
                <CardDescription>
                  Bütün məlumatlar məxfidir və yalnız təklif hazırlanması üçün istifadə olunur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-8">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-lg text-stone-light">Əlaqə məlumatları</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ad Soyad *</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-poçt *</Label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Şirkət</Label>
                        <Input id="company" />
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-lg text-stone-light">
                      Hansı xidmətlər maraqlandırır? *
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
                    <h3 className="font-serif text-lg text-stone-light">Büdcə aralığı *</h3>
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
                    <h3 className="font-serif text-lg text-stone-light">İstənilən müddət *</h3>
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
                    <Label htmlFor="description">Layihə təsviri *</Label>
                    <Textarea
                      id="description"
                      required
                      placeholder="Layihənizin təsvirini, məqsədlərini və gözləntilərini qeyd edin..."
                      className="min-h-[150px]"
                    />
                    <p className="text-xs text-stone-DEFAULT">
                      Nə qədər çox məlumat versəniz, bir o qədər dəqiq təklif hazırlaya bilərik
                    </p>
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-4 pt-4">
                    <Button type="submit" size="lg" className="flex-1 sm:flex-none">
                      Təklif sorğusu göndər
                    </Button>
                    <p className="text-xs text-stone-DEFAULT">
                      24-48 saat ərzində cavab verəcəyik
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
