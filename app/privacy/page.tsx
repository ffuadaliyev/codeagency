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
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('1. Ümumi Məlumat', '1. General Information', '1. Общая информация')}
                </h2>
                <p className="leading-relaxed">
                  {t(
                    'Code Agency ("biz", "bizim") olaraq, müştərilərimizin məxfiliyinə hörmət edirik və şəxsi məlumatların qorunmasını prioritet hesab edirik. Bu siyasət, sizin şəxsi məlumatlarınızın necə toplandığını, istifadə edildiyini və qorunduğunu izah edir.',
                    'As Code Agency ("we", "our"), we respect our clients\' privacy and prioritize the protection of personal information. This policy explains how your personal information is collected, used, and protected.',
                    'Как Code Agency ("мы", "наш"), мы уважаем конфиденциальность наших клиентов и отдаем приоритет защите личной информации. Эта политика объясняет, как ваша личная информация собирается, используется и защищается.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('2. Topladığımız Məlumatlar', '2. Information We Collect', '2. Информация, которую мы собираем')}
                </h2>
                <p className="leading-relaxed mb-3">
                  {t(
                    'Xidmətlərimizi təqdim etmək üçün aşağıdakı məlumatları toplaya bilərik:',
                    'To provide our services, we may collect the following information:',
                    'Для предоставления наших услуг мы можем собирать следующую информацию:'
                  )}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('Ad, soyad və əlaqə məlumatları', 'Name, surname, and contact information', 'Имя, фамилия и контактная информация')}</li>
                  <li>{t('E-poçt ünvanı və telefon nömrəsi', 'Email address and phone number', 'Адрес электронной почты и номер телефона')}</li>
                  <li>{t('Şirkət məlumatları', 'Company information', 'Информация о компании')}</li>
                  <li>{t('Layihə tələbləri və biznes ehtiyacları', 'Project requirements and business needs', 'Требования к проекту и бизнес-потребности')}</li>
                  <li>{t('Texniki məlumatlar (IP ünvan, brauzer məlumatı)', 'Technical information (IP address, browser information)', 'Техническая информация (IP-адрес, информация о браузере)')}</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('3. Məlumatların İstifadəsi', '3. Use of Information', '3. Использование информации')}
                </h2>
                <p className="leading-relaxed mb-3">
                  {t(
                    'Topladığımız məlumatları aşağıdakı məqsədlərlə istifadə edirik:',
                    'We use the information we collect for the following purposes:',
                    'Мы используем собранную информацию для следующих целей:'
                  )}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('Xidmətlərimizi təqdim etmək', 'To provide our services', 'Предоставление наших услуг')}</li>
                  <li>{t('Müştəri dəstəyi göstərmək', 'To provide customer support', 'Предоставление поддержки клиентов')}</li>
                  <li>{t('Təkliflərin hazırlanması', 'To prepare proposals', 'Подготовка предложений')}</li>
                  <li>{t('Ünsiyyət və informasiya paylaşımı', 'Communication and information sharing', 'Коммуникация и обмен информацией')}</li>
                  <li>{t('Xidmətlərin təkmilləşdirilməsi', 'To improve services', 'Улучшение услуг')}</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('4. Məlumatların Qorunması', '4. Data Protection', '4. Защита данных')}
                </h2>
                <p className="leading-relaxed">
                  {t(
                    'Şəxsi məlumatlarınızın qorunması üçün texniki və təşkilati tədbirlər görürük. Məlumatlar şifrələnmiş saxlanır və yalnız səlahiyyətli işçilər tərəfindən əlçatandır.',
                    'We take technical and organizational measures to protect your personal information. Data is stored encrypted and accessible only by authorized personnel.',
                    'Мы принимаем технические и организационные меры для защиты вашей личной информации. Данные хранятся в зашифрованном виде и доступны только уполномоченному персоналу.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('5. Kukiler', '5. Cookies', '5. Файлы cookie')}
                </h2>
                <p className="leading-relaxed">
                  {t(
                    'Vebsaytımız yalnız zəruri kukilerden istifadə edir. Analitik və marketinq kukiləri istifadəçinin razılığı ilə aktivləşdirilir.',
                    'Our website uses only essential cookies. Analytics and marketing cookies are activated with user consent.',
                    'Наш веб-сайт использует только необходимые файлы cookie. Аналитические и маркетинговые файлы cookie активируются с согласия пользователя.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('6. Hüquqlarınız', '6. Your Rights', '6. Ваши права')}
                </h2>
                <p className="leading-relaxed mb-3">
                  {t('Siz aşağıdakı hüquqlara sahibsiniz:', 'You have the following rights:', 'Вы имеете следующие права:')}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('Şəxsi məlumatlarınıza əlçatan olmaq', 'Access to your personal information', 'Доступ к вашей личной информации')}</li>
                  <li>{t('Məlumatların düzəldilməsini tələb etmək', 'Request correction of information', 'Запросить исправление информации')}</li>
                  <li>{t('Məlumatların silinməsini tələb etmək', 'Request deletion of information', 'Запросить удаление информации')}</li>
                  <li>{t('Məlumat emalına etiraz etmək', 'Object to data processing', 'Возражать против обработки данных')}</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('7. Əlaqə', '7. Contact', '7. Контакты')}
                </h2>
                <p className="leading-relaxed">
                  {t(
                    'Məxfilik siyasəti ilə bağlı suallarınız üçün bizə müraciət edin:',
                    'For questions about the privacy policy, please contact us:',
                    'По вопросам, касающимся политики конфиденциальности, обращайтесь к нам:'
                  )}{' '}
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
