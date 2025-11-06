'use client'

import { ProcessSection } from '@/components/sections/ProcessSection'
import { useLanguage } from '@/lib/language-context'

export default function ProcessPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              {t('Bizim Proses', 'Our Process', 'Наш процесс')}
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              {t(
                'Uğurlu layihələr üçün sınaqdan keçmiş sistemli yanaşma',
                'Proven systematic approach for successful projects',
                'Проверенный системный подход для успешных проектов'
              )}
            </p>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="py-16 bg-carbon">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-stone-light mb-8 text-center">
              {t('Keyfiyyət Təminatı', 'Quality Assurance', 'Обеспечение качества')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-carbon-light rounded-xl p-6 border border-carbon-border">
                <h3 className="font-serif text-xl text-gold mb-3">
                  {t('Çevik Metodologiya', 'Agile Methodology', 'Agile-методология')}
                </h3>
                <p className="text-stone-DEFAULT text-sm">
                  {t(
                    'Sprint əsaslı inkişaf, tez-tez rəy toplama və dəyişikliklərə uyğunlaşma',
                    'Sprint-based development, frequent feedback and adaptation to changes',
                    'Разработка на основе спринтов, частая обратная связь и адаптация к изменениям'
                  )}
                </p>
              </div>
              <div className="bg-carbon-light rounded-xl p-6 border border-carbon-border">
                <h3 className="font-serif text-xl text-gold mb-3">
                  {t('Kod Keyfiyyəti', 'Code Quality', 'Качество кода')}
                </h3>
                <p className="text-stone-DEFAULT text-sm">
                  {t(
                    'Kod rəyi, avtomatik test, CI/CD və best practices',
                    'Code review, automated testing, CI/CD and best practices',
                    'Ревью кода, автоматическое тестирование, CI/CD и лучшие практики'
                  )}
                </p>
              </div>
              <div className="bg-carbon-light rounded-xl p-6 border border-carbon-border">
                <h3 className="font-serif text-xl text-gold mb-3">
                  {t('Şəffaflıq', 'Transparency', 'Прозрачность')}
                </h3>
                <p className="text-stone-DEFAULT text-sm">
                  {t(
                    'Real vaxt progress izləmə, həftəlik hesabatlar və açıq ünsiyyət',
                    'Real-time progress tracking, weekly reports and open communication',
                    'Отслеживание прогресса в реальном времени, еженедельные отчеты и открытое общение'
                  )}
                </p>
              </div>
              <div className="bg-carbon-light rounded-xl p-6 border border-carbon-border">
                <h3 className="font-serif text-xl text-gold mb-3">
                  {t('Dəstək', 'Support', 'Поддержка')}
                </h3>
                <p className="text-stone-DEFAULT text-sm">
                  {t(
                    '3 aylıq pulsuz dəstək, sənədləşdirmə və təlim',
                    '3 months free support, documentation and training',
                    '3 месяца бесплатной поддержки, документация и обучение'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
