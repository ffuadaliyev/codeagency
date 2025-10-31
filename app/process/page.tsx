import { Metadata } from 'next'
import { ProcessSection } from '@/components/sections/ProcessSection'

export const metadata: Metadata = {
  title: 'Proses',
  description: 'Code Agency iş prosesi və metodologiya. Layihələrin necə həyata keçirildiyini öyrənin.',
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              Bizim Proses
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              Uğurlu layihələr üçün sınaqdan keçmiş sistemli yanaşma
            </p>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="py-16 bg-carbon">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-stone-light mb-8 text-center">
              Keyfiyyət Təminatı
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-carbon-light rounded-xl p-6 border border-carbon-border">
                <h3 className="font-serif text-xl text-gold mb-3">Çevik Metodologiya</h3>
                <p className="text-stone-DEFAULT text-sm">
                  Sprint əsaslı inkişaf, tez-tez rəy toplama və dəyişikliklərə uyğunlaşma
                </p>
              </div>
              <div className="bg-carbon-light rounded-xl p-6 border border-carbon-border">
                <h3 className="font-serif text-xl text-gold mb-3">Kod Keyfiyyəti</h3>
                <p className="text-stone-DEFAULT text-sm">
                  Kod rəyi, avtomatik test, CI/CD və best practices
                </p>
              </div>
              <div className="bg-carbon-light rounded-xl p-6 border border-carbon-border">
                <h3 className="font-serif text-xl text-gold mb-3">Şəffaflıq</h3>
                <p className="text-stone-DEFAULT text-sm">
                  Real vaxt progress izləmə, həftəlik hesabatlar və açıq ünsiyyət
                </p>
              </div>
              <div className="bg-carbon-light rounded-xl p-6 border border-carbon-border">
                <h3 className="font-serif text-xl text-gold mb-3">Dəstək</h3>
                <p className="text-stone-DEFAULT text-sm">
                  3 aylıq pulsuz dəstək, sənədləşdirmə və təlim
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
