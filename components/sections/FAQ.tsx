'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'

const getFaqs = (t: (az: string, en: string, ru?: string) => string) => [
  {
    question: t(
      'Layihə müddəti nə qədər çəkir?',
      'How long does a project take?',
      'Сколько времени занимает проект?'
    ),
    answer: t(
      'Layihənin mürəkkəbliyi və tələblərindən asılı olaraq müddət dəyişir. Sadə veb sayt 2-4 həftə, mürəkkəb AI həlləri 2-3 ay ala bilər. İlkin məsləhətdə dəqiq müddəti müəyyənləşdiririk.',
      'Duration varies depending on project complexity and requirements. A simple website takes 2-4 weeks, complex AI solutions can take 2-3 months. We determine the exact timeline in the initial consultation.',
      'Продолжительность варьируется в зависимости от сложности проекта и требований. Простой веб-сайт занимает 2-4 недели, сложные AI-решения могут занять 2-3 месяца. Мы определяем точные сроки на первичной консультации.'
    ),
  },
  {
    question: t(
      'Texniki dəstəyi necə təmin edirsiniz?',
      'How do you provide technical support?',
      'Как вы предоставляете техническую поддержку?'
    ),
    answer: t(
      'Bütün layihələr üçün istehsaldan sonra 3 aylıq pulsuz dəstək təqdim edirik. Bundan əlavə, 24/7 texniki dəstək və SLA müqavilələri mövcuddur. Kritik problemlərə 1 saat ərzində cavab veririk.',
      'We provide 3 months of free support after production for all projects. Additionally, 24/7 technical support and SLA agreements are available. We respond to critical issues within 1 hour.',
      'Мы предоставляем 3 месяца бесплатной поддержки после запуска для всех проектов. Дополнительно доступна круглосуточная техподдержка и SLA-соглашения. Мы отвечаем на критические проблемы в течение 1 часа.'
    ),
  },
  {
    question: t(
      'Mövcud sistemlərimlə inteqrasiya mümkündürmü?',
      'Is integration with existing systems possible?',
      'Возможна ли интеграция с существующими системами?'
    ),
    answer: t(
      'Bəli, API və ya digər inteqrasiya metodları ilə mövcud CRM, ERP, e-commerce və digər sistemlərinizlə inteqrasiya edirik. Təhlil mərhələsində texniki uyğunluğu yoxlayırıq.',
      'Yes, we integrate with your existing CRM, ERP, e-commerce and other systems via API or other integration methods. We verify technical compatibility during the analysis phase.',
      'Да, мы интегрируем ваши существующие CRM, ERP, e-commerce и другие системы через API или другие методы интеграции. Мы проверяем техническую совместимость на этапе анализа.'
    ),
  },
  {
    question: t(
      'Büdcə və ödəniş modeli necə qurulur?',
      'How is the budget and payment model structured?',
      'Как структурирован бюджет и модель оплаты?'
    ),
    answer: t(
      'Layihənin mərhələlərinə görə ödəniş planı təklif edirik: 30% başlanğıc, 40% inkişaf zamanı, 30% təslim zamanı. Sabit ödənişli və ya saat əsaslı modellər də mövcuddur.',
      'We offer a payment plan based on project milestones: 30% upfront, 40% during development, 30% on delivery. Fixed-price or hourly models are also available.',
      'Мы предлагаем план оплаты на основе этапов проекта: 30% аванс, 40% во время разработки, 30% при доставке. Также доступны модели с фиксированной ценой или почасовой оплатой.'
    ),
  },
  {
    question: t(
      'Məlumat təhlükəsizliyi necə təmin olunur?',
      'How is data security ensured?',
      'Как обеспечивается безопасность данных?'
    ),
    answer: t(
      'Məxfilik müqaviləsi imzalayırıq, məlumatlar şifrələnmiş saxlanır, GDPR və digər standartlara uyğunluq təmin olunur. Layihə bitdikdən sonra bütün məlumatlar sizə təhvil verilir.',
      'We sign a confidentiality agreement, data is stored encrypted, and compliance with GDPR and other standards is ensured. All data is transferred to you after project completion.',
      'Мы подписываем соглашение о конфиденциальности, данные хранятся в зашифрованном виде, обеспечивается соответствие GDPR и другим стандартам. Все данные передаются вам после завершения проекта.'
    ),
  },
  {
    question: t(
      'Layihə sahibliyi və kodlar kimə məxsusdur?',
      'Who owns the project and code?',
      'Кому принадлежит проект и код?'
    ),
    answer: t(
      'Tam ödəniş tamamlandıqdan sonra bütün kod və intellektual mülkiyyət sizə məxsusdur. Source code və sənədləşmə tam olaraq təhvil verilir.',
      'After full payment is completed, all code and intellectual property belongs to you. Source code and documentation are fully transferred.',
      'После полной оплаты весь код и интеллектуальная собственность принадлежат вам. Исходный код и документация передаются полностью.'
    ),
  },
  {
    question: t(
      'AI həllərini özəl data ilə təlim etdirirsinizmi?',
      'Do you train AI solutions with custom data?',
      'Вы обучаете AI-решения на пользовательских данных?'
    ),
    answer: t(
      'Bəli, sizin özəl məlumatlarınızla AI modellərini fine-tune edə və ya tam custom modellər hazırlaya bilərik. Məlumatlar yalnız sizin layihənizə aid olur və paylaşılmır.',
      'Yes, we can fine-tune AI models with your custom data or create fully custom models. Data belongs only to your project and is not shared.',
      'Да, мы можем тонко настроить AI-модели на ваших пользовательских данных или создать полностью кастомные модели. Данные принадлежат только вашему проекту и не передаются третьим лицам.'
    ),
  },
  {
    question: t(
      'Xaricdəki müştərilərlə işləyirsinizmi?',
      'Do you work with international clients?',
      'Вы работаете с иностранными клиентами?'
    ),
    answer: t(
      'Bəli, Azərbaycan, Türkiyə, Avropa və digər regionlardan müştərilərimiz var. Remote iş prosesimizdə Zoom, Slack və layihə idarəetmə alətlərindən istifadə edirik.',
      'Yes, we have clients from Azerbaijan, Turkey, Europe and other regions. In our remote work process, we use Zoom, Slack and project management tools.',
      'Да, у нас есть клиенты из Азербайджана, Турции, Европы и других регионов. В нашем удаленном рабочем процессе мы используем Zoom, Slack и инструменты управления проектами.'
    ),
  },
]

export function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqs = getFaqs(t)

  return (
    <section className="py-24 lg:py-32 bg-carbon-light">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-stone-light mb-4">
            {t('Tez-tez verilən suallar', 'Frequently Asked Questions', 'Часто задаваемые вопросы')}
          </h2>
          <p className="text-lg text-stone-DEFAULT max-w-3xl mx-auto">
            {t('Sizin suallarınıza cavablar', 'Answers to your questions', 'Ответы на ваши вопросы')}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-carbon border border-carbon-border rounded-xl p-6 hover:border-gold/50 transition-all focus-ring"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-lg text-stone-light pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-gold flex-shrink-0 transition-transform',
                      openIndex === index && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-stone-DEFAULT mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
