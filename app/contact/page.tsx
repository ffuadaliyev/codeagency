import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Əlaqə',
  description: 'Code Agency ilə əlaqə saxlayın. Suallarınızı bizə göndərin.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              Əlaqə
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              Suallarınız var? Bizimlə əlaqə saxlayın, ən qısa zamanda cavab verəcəyik
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
                  <CardTitle>Mesaj göndərin</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ad Soyad *</Label>
                        <Input id="name" required placeholder="Adınız" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-poçt *</Label>
                        <Input id="email" type="email" required placeholder="email@example.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" type="tel" placeholder="+994 XX XXX XX XX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Şirkət</Label>
                        <Input id="company" placeholder="Şirkət adı" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Mövzu *</Label>
                      <Input id="subject" required placeholder="Mesajın mövzusu" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mesaj *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Mesajınızı yazın..."
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Göndər
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Əlaqə məlumatları</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-stone-DEFAULT mb-1">E-poçt</div>
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
                      <div className="text-sm text-stone-DEFAULT mb-1">Telefon</div>
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
                      <div className="text-sm text-stone-DEFAULT mb-1">Ünvan</div>
                      <p className="text-stone-light">Bakı, Azərbaycan</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-stone-DEFAULT mb-1">İş saatları</div>
                      <p className="text-stone-light">B.e - Cümə: 9:00 - 18:00</p>
                      <p className="text-sm text-stone-DEFAULT">Şənbə-Bazar: bağlı</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-stone-DEFAULT leading-relaxed">
                    Təcili məsələlər üçün birbaşa zəng edə və ya e-poçt göndərə bilərsiniz.
                    Adətən 24 saat ərzində cavab veririk.
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
