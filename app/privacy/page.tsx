'use client'

import { useLanguage } from '@/lib/language-context'

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-stone-light mb-6">
              {t('Məxfilik Siyasəti', 'Privacy Policy', 'Политика конфиденциальности')}
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
                <h2 className="font-serif text-2xl text-stone-light mb-4">1. Ümumi Məlumat</h2>
                <p className="leading-relaxed">
                  Code Agency ("biz", "bizim") olaraq, müştərilərimizin məxfiliyinə hörmət edirik
                  və şəxsi məlumatların qorunmasını prioritet hesab edirik. Bu siyasət, sizin
                  şəxsi məlumatlarınızın necə toplandığını, istifadə edildiyini və qorunduğunu
                  izah edir.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  2. Topladığımız Məlumatlar
                </h2>
                <p className="leading-relaxed mb-3">
                  Xidmətlərimizi təqdim etmək üçün aşağıdakı məlumatları toplaya bilərik:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ad, soyad və əlaqə məlumatları</li>
                  <li>E-poçt ünvanı və telefon nömrəsi</li>
                  <li>Şirkət məlumatları</li>
                  <li>Layihə tələbləri və biznes ehtiyacları</li>
                  <li>Texniki məlumatlar (IP ünvan, brauzer məlumatı)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  3. Məlumatların İstifadəsi
                </h2>
                <p className="leading-relaxed mb-3">Topladığımız məlumatları aşağıdakı məqsədlərlə istifadə edirik:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Xidmətlərimizi təqdim etmək</li>
                  <li>Müştəri dəstəyi göstərmək</li>
                  <li>Təkliflərin hazırlanması</li>
                  <li>Ünsiyyət və informasiya paylaşımı</li>
                  <li>Xidmətlərin təkmilləşdirilməsi</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  4. Məlumatların Qorunması
                </h2>
                <p className="leading-relaxed">
                  Şəxsi məlumatlarınızın qorunması üçün texniki və təşkilati tədbirlər görürük.
                  Məlumatlar şifrələnmiş saxlanır və yalnız səlahiyyətli işçilər tərəfindən
                  əlçatandır.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">5. Kukiler</h2>
                <p className="leading-relaxed">
                  Vebsaytımız yalnız zəruri kukilerden istifadə edir. Analitik və marketinq
                  kukiləri istifadəçinin razılığı ilə aktivləşdirilir.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">6. Hüquqlarınız</h2>
                <p className="leading-relaxed mb-3">Siz aşağıdakı hüquqlara sahibsiniz:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Şəxsi məlumatlarınıza əlçatan olmaq</li>
                  <li>Məlumatların düzəldilməsini tələb etmək</li>
                  <li>Məlumatların silinməsini tələb etmək</li>
                  <li>Məlumat emalına etiraz etmək</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">7. Əlaqə</h2>
                <p className="leading-relaxed">
                  Məxfilik siyasəti ilə bağlı suallarınız üçün bizə müraciət edin:{' '}
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
