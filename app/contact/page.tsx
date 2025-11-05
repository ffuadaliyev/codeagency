'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              {t(translations.contact.title.az, translations.contact.title.en, translations.contact.title.ru)}
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              {t(translations.contact.subtitle.az, translations.contact.subtitle.en, translations.contact.subtitle.ru)}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-carbon-light">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {t('Mesaj göndərin', 'Send a message', 'Отправить сообщение')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {t('Ad Soyad *', 'Full Name *', 'Полное имя *')}
                        </Label>
                        <Input
                          id="name"
                          required
                          placeholder={t('Adınız', 'Your name', 'Ваше имя')}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {t('E-poçt *', 'Email *', 'Эл. почта *')}
                        </Label>
                        <Input id="email" type="email" required placeholder="email@example.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          {t('Telefon', 'Phone', 'Телефон')}
                        </Label>
                        <Input id="phone" type="tel" placeholder="+994 XX XXX XX XX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">
                          {t('Şirkət', 'Company', 'Компания')}
                        </Label>
                        <Input
                          id="company"
                          placeholder={t('Şirkət adı', 'Company name', 'Название компании')}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        {t('Mövzu *', 'Subject *', 'Тема *')}
                      </Label>
                      <Input
                        id="subject"
                        required
                        placeholder={t('Mesajın mövzusu', 'Message subject', 'Тема сообщения')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {t('Mesaj *', 'Message *', 'Сообщение *')}
                      </Label>
                      <Textarea
                        id="message"
                        required
                        placeholder={t('Mesajınızı yazın...', 'Write your message...', 'Напишите ваше сообщение...')}
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      {t('Göndər', 'Send', 'Отправить')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {t('Əlaqə məlumatları', 'Contact information', 'Контактная информация')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-stone-DEFAULT mb-1">
                        {t('E-poçt', 'Email', 'Эл. почта')}
                      </div>
                      <a
                        href="mailto:info@codeagency.az"
                        className="text-stone-light hover:text-gold transition-colors"
                      >
                        info@codeagency.az
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-stone-DEFAULT mb-1">
                        {t('Telefon', 'Phone', 'Телефон')}
                      </div>
                      <a
                        href="tel:+994501234567"
                        className="text-stone-light hover:text-gold transition-colors"
                      >
                        +994 (50) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-stone-DEFAULT mb-1">
                        {t('Ünvan', 'Address', 'Адрес')}
                      </div>
                      <p className="text-stone-light">
                        {t('Bakı, Azərbaycan', 'Baku, Azerbaijan', 'Баку, Азербайджан')}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-stone-DEFAULT mb-1">
                        {t('İş saatları', 'Working hours', 'Рабочие часы')}
                      </div>
                      <p className="text-stone-light">
                        {t('B.e - Cümə: 9:00 - 18:00', 'Mon - Fri: 9:00 - 18:00', 'Пн - Пт: 9:00 - 18:00')}
                      </p>
                      <p className="text-sm text-stone-DEFAULT">
                        {t('Şənbə-Bazar: bağlı', 'Sat-Sun: closed', 'Сб-Вс: выходной')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-stone-DEFAULT leading-relaxed">
                    {t(
                      'Təcili məsələlər üçün birbaşa zəng edə və ya e-poçt göndərə bilərsiniz. Adətən 24 saat ərzində cavab veririk.',
                      'For urgent matters, you can call or email us directly. We usually respond within 24 hours.',
                      'По срочным вопросам вы можете позвонить или написать нам напрямую. Обычно мы отвечаем в течение 24 часов.'
                    )}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
