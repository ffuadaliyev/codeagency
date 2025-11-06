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
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('1. Xidmət Şərtləri', '1. Terms of Service', '1. Условия обслуживания')}
                </h2>
                <p className="leading-relaxed">
                  {t(
                    'Code Agency-nin xidmətlərindən istifadə etməklə, bu şərtləri qəbul etmiş sayılırsınız. Xahiş edirik diqqətlə oxuyasınız.',
                    'By using Code Agency services, you are deemed to have accepted these terms. Please read carefully.',
                    'Используя услуги Code Agency, вы считаетесь принявшим эти условия. Пожалуйста, внимательно прочитайте.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('2. Xidmət Təsviri', '2. Service Description', '2. Описание услуг')}
                </h2>
                <p className="leading-relaxed">
                  {t(
                    'Biz AI həlləri, avtomatlaşdırma, veb və mobil inkişaf, data science və digər texnoloji xidmətlər təqdim edirik. Hər layihə üçün ayrıca müqavilə imzalanır.',
                    'We provide AI solutions, automation, web and mobile development, data science, and other technology services. A separate contract is signed for each project.',
                    'Мы предоставляем решения на основе ИИ, автоматизацию, веб- и мобильную разработку, data science и другие технологические услуги. Для каждого проекта подписывается отдельный договор.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('3. Ödəniş Şərtləri', '3. Payment Terms', '3. Условия оплаты')}
                </h2>
                <p className="leading-relaxed mb-3">
                  {t(
                    'Ödəniş planı layihə müqaviləsində müəyyən edilir. Ümumi struktur:',
                    'The payment plan is specified in the project contract. General structure:',
                    'План оплаты указывается в контракте проекта. Общая структура:'
                  )}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('30% - Layihə başlanğıcında', '30% - At project start', '30% - В начале проекта')}</li>
                  <li>{t('40% - İnkişaf mərhələsində', '40% - During development phase', '40% - Во время фазы разработки')}</li>
                  <li>{t('30% - Təslim zamanı', '30% - Upon delivery', '30% - При доставке')}</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('4. İntellektual Mülkiyyət', '4. Intellectual Property', '4. Интеллектуальная собственность')}
                </h2>
                <p className="leading-relaxed">
                  {t(
                    'Tam ödəniş tamamlandıqdan sonra bütün kod və layihə materialları müştəriyə aid olur. Biz portfolio məqsədləri üçün layihələri göstərə bilərik (müştərinin razılığı ilə).',
                    'After full payment is completed, all code and project materials belong to the client. We may display projects for portfolio purposes (with client consent).',
                    'После полной оплаты весь код и материалы проекта принадлежат клиенту. Мы можем показывать проекты в портфолио (с согласия клиента).'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('5. Məxfilik', '5. Confidentiality', '5. Конфиденциальность')}
                </h2>
                <p className="leading-relaxed">
                  {t(
                    'Bütün layihə məlumatları məxfi saxlanır. NDA (Non-Disclosure Agreement) tələb olunduqda imzalanır.',
                    'All project information is kept confidential. NDA (Non-Disclosure Agreement) is signed when required.',
                    'Вся информация о проекте хранится конфиденциально. NDA (Соглашение о неразглашении) подписывается при необходимости.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('6. Zəmanət və Dəstək', '6. Warranty and Support', '6. Гарантия и поддержка')}
                </h2>
                <p className="leading-relaxed mb-3">
                  {t(
                    'Layihə təslim edildikdən sonra:',
                    'After project delivery:',
                    'После доставки проекта:'
                  )}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('3 aylıq pulsuz texniki dəstək', '3 months free technical support', '3 месяца бесплатной технической поддержки')}</li>
                  <li>{t('Kritik bugların pulsuz həlli', 'Free resolution of critical bugs', 'Бесплатное устранение критических ошибок')}</li>
                  <li>{t('Əlavə dəstək paketləri mövcuddur', 'Additional support packages available', 'Доступны дополнительные пакеты поддержки')}</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('7. Məsuliyyət Məhdudiyyəti', '7. Limitation of Liability', '7. Ограничение ответственности')}
                </h2>
                <p className="leading-relaxed">
                  {t(
                    'Code Agency öz xidmətlərinin keyfiyyətinə zəmanət verir, lakin dolayı zərərlərə görə məsuliyyət daşımır. Ətraflı məsuliyyət şərtləri müqavilədə göstərilir.',
                    'Code Agency guarantees the quality of its services but is not liable for indirect damages. Detailed liability terms are specified in the contract.',
                    'Code Agency гарантирует качество своих услуг, но не несет ответственности за косвенный ущерб. Подробные условия ответственности указаны в контракте.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('8. Dəyişikliklər', '8. Changes', '8. Изменения')}
                </h2>
                <p className="leading-relaxed">
                  {t(
                    'Bu şərtləri istənilən vaxt dəyişdirmək hüququnu özümüzdə saxlayırıq. Dəyişikliklər saytda dərc ediləcək.',
                    'We reserve the right to change these terms at any time. Changes will be posted on the site.',
                    'Мы оставляем за собой право изменять эти условия в любое время. Изменения будут опубликованы на сайте.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-stone-light mb-4">
                  {t('9. Əlaqə', '9. Contact', '9. Контакты')}
                </h2>
                <p className="leading-relaxed">
                  {t(
                    'Şərtlərlə bağlı suallar üçün:',
                    'For questions about the terms:',
                    'По вопросам об условиях:'
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
