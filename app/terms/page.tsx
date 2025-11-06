'use client'

import { useLanguage } from '@/lib/language-context'

export default function TermsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-stone-light mb-6">
              {t('İstifadə Şərtləri', 'Terms of Service', 'Условия использования')}
            </h1>
            <p className="text-sm text-stone-DEFAULT">
              {t('Son yenilənmə: Yanvar 2024', 'Last updated: January 2024', 'Последнее обновление: январь 2024')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto prose prose-invert max-w-none">
            <div className="space-y-8 text-stone-DEFAULT">
              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">1. Xidmət Şərtləri</h2>
                <p className="leading-relaxed">
                  Code Agency-nin xidmətlərindən istifadə etməklə, bu şərtləri qəbul etmiş
                  sayılırsınız. Xahiş edirik diqqətlə oxuyasınız.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  2. Xidmət Təsviri
                </h2>
                <p className="leading-relaxed">
                  Biz AI həlləri, avtomatlaşdırma, veb və mobil inkişaf, data science və digər
                  texnoloji xidmətlər təqdim edirik. Hər layihə üçün ayrıca müqavilə imzalanır.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">3. Ödəniş Şərtləri</h2>
                <p className="leading-relaxed mb-3">
                  Ödəniş planı layihə müqaviləsində müəyyən edilir. Ümumi struktur:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>30% - Layihə başlanğıcında</li>
                  <li>40% - İnkişaf mərhələsində</li>
                  <li>30% - Təslim zamanı</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  4. İntellektual Mülkiyyət
                </h2>
                <p className="leading-relaxed">
                  Tam ödəniş tamamlandıqdan sonra bütün kod və layihə materialları müştəriyə aid
                  olur. Biz portfolio məqsədləri üçün layihələri göstərə bilərik (müştərinin
                  razılığı ilə).
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">5. Məxfilik</h2>
                <p className="leading-relaxed">
                  Bütün layihə məlumatları məxfi saxlanır. NDA (Non-Disclosure Agreement)
                  tələb olunduqda imzalanır.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  6. Zəmanət və Dəstək
                </h2>
                <p className="leading-relaxed mb-3">
                  Layihə təslim edildikdən sonra:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>3 aylıq pulsuz texniki dəstək</li>
                  <li>Kritik bugların pulsuz həlli</li>
                  <li>Əlavə dəstək paketləri mövcuddur</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  7. Məsuliyyət Məhdudiyyəti
                </h2>
                <p className="leading-relaxed">
                  Code Agency öz xidmətlərinin keyfiyyətinə zəmanət verir, lakin dolayı
                  zərərlərə görə məsuliyyət daşımır. Ətraflı məsuliyyət şərtləri müqavilədə
                  göstərilir.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">8. Dəyişikliklər</h2>
                <p className="leading-relaxed">
                  Bu şərtləri istənilən vaxt dəyişdirmək hüququnu özümüzdə saxlayırıq.
                  Dəyişikliklər saytda dərc ediləcək.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">9. Əlaqə</h2>
                <p className="leading-relaxed">
                  Şərtlərlə bağlı suallar üçün:{' '}
                  <a href="mailto:info@codeagency.az" className="text-gold hover:underline">
                    info@codeagency.az
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
