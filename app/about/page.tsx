import { Metadata } from 'next'
import { Target, Users, Award, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Haqqımızda',
  description: 'Code Agency - AI və avtomatlaşdırma sahəsində ekspert komanda. Missiya, dəyərlər və komanda.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              Haqqımızda
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              Texnologiya və biznes nəticələrini birləşdirən ekspert komanda
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-carbon-light">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-stone-DEFAULT leading-relaxed mb-6">
                Code Agency AI və avtomatlaşdırma həlləri üzrə ixtisaslaşmış texnologiya
                şirkətidir. Biz sadəcə kod yazmırıq - biznesinizin böyüməsi üçün ölçülə bilən
                həllər təqdim edirik.
              </p>
              <p className="text-lg text-stone-DEFAULT leading-relaxed">
                Müasir texnologiyaları və best practice-ləri istifadə edərək, müştərilərimizə
                rəqabət üstünlüyü qazandıran həllər təqdim edirik. Hər layihəyə unikal yanaşırıq
                və sizin biznes məqsədlərinizə fokuslanırıq.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-carbon rounded-2xl p-8 border border-carbon-border">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-stone-light mb-3">Missiyamız</h3>
                <p className="text-stone-DEFAULT">
                  Azərbaycan bizneslərinə dünya səviyyəli AI və avtomatlaşdırma həlləri
                  təqdim etmək, rəqəmsal transformasiyaya töhfə vermək.
                </p>
              </div>

              <div className="bg-carbon rounded-2xl p-8 border border-carbon-border">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-stone-light mb-3">Dəyərlərimiz</h3>
                <p className="text-stone-DEFAULT">
                  Keyfiyyət, şəffaflıq, müştəri məmnuniyyəti və innovasiya - bizim əsas
                  prinsiplərimizdir. Hər layihəyə məsuliyyətlə yanaşırıq.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-8 border border-gold/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-stone-light">Xidmətlərimiz</h3>
              </div>
              <p className="text-stone-DEFAULT mb-6">
                Biz müştərilərimizə geniş spektrli texnoloji xidmətlər təqdim edirik:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-stone-DEFAULT space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>AI və Machine Learning həlləri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Biznes proseslərin avtomatlaşdırılması</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Veb və mobil tətbiq inkişafı</span>
                  </li>
                </ul>
                <ul className="text-stone-DEFAULT space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Data analitika və vizuallaşdırma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Cloud infrastruktur həlləri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Texniki məsləhət və konsultasiya</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="font-serif text-3xl text-stone-light mb-4">
                Komandamıza qoşulun
              </h3>
              <p className="text-stone-DEFAULT mb-8 max-w-2xl mx-auto">
                İstedadlı və motivasiyalı mütəxəssislər axtarırıq. Əgər texnologiya və
                innovasiya sizin üçün maraqlıdırsa, bizimlə əlaqə saxlayın.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Vakansiyalar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
