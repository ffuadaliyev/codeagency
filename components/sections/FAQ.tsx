'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Layihə müddəti nə qədər çəkir?',
    answer:
      'Layihənin mürəkkəbliyi və tələblərindən asılı olaraq müddət dəyişir. Sadə veb sayt 2-4 həftə, mürəkkəb AI həlləri 2-3 ay ala bilər. İlkin məsləhətdə dəqiq müddəti müəyyənləşdiririk.',
  },
  {
    question: 'Texniki dəstəyi necə təmin edirsiniz?',
    answer:
      'Bütün layihələr üçün istehsaldan sonra 3 aylıq pulsuz dəstək təqdim edirik. Bundan əlavə, 24/7 texniki dəstək və SLA müqavilələri mövcuddur. Kritik problemlərə 1 saat ərzində cavab veririk.',
  },
  {
    question: 'Mövcud sistemlərimlə inteqrasiya mümkündürmü?',
    answer:
      'Bəli, API və ya digər inteqrasiya metodları ilə mövcud CRM, ERP, e-commerce və digər sistemlərinizlə inteqrasiya edirik. Təhlil mərhələsində texniki uyğunluğu yoxlayırıq.',
  },
  {
    question: 'Büdcə və ödəniş modeli necə qurulur?',
    answer:
      'Layihənin mərhələlərinə görə ödəniş planı təklif edirik: 30% başlanğıc, 40% inkişaf zamanı, 30% təslim zamanı. Sabit ödənişli və ya saat əsaslı modellər də mövcuddur.',
  },
  {
    question: 'Məlumat təhlükəsizliyi necə təmin olunur?',
    answer:
      'Məxfilik müqaviləsi imzalayırıq, məlumatlar şifrələnmiş saxlanır, GDPR və digər standartlara uyğunluq təmin olunur. Layihə bitdikdən sonra bütün məlumatlar sizə təhvil verilir.',
  },
  {
    question: 'Layihə sahibliyi və kodlar kimə məxsusdur?',
    answer:
      'Tam ödəniş tamamlandıqdan sonra bütün kod və intellektual mülkiyyət sizə məxsusdur. Source code və sənədləşmə tam olaraq təhvil verilir.',
  },
  {
    question: 'AI həllərini özəl data ilə təlim etdirirsinizmi?',
    answer:
      'Bəli, sizin özəl məlumatlarınızla AI modellərini fine-tune edə və ya tam custom modellər hazırlaya bilərik. Məlumatlar yalnız sizin layihənizə aid olur və paylaşılmır.',
  },
  {
    question: 'Xaricdəki müştərilərlə işləyirsinizmi?',
    answer:
      'Bəli, Azərbaycan, Türkiyə, Avropa və digər regionlardan müştərilərimiz var. Remote iş prosesimizdə Zoom, Slack və layihə idarəetmə alətlərindən istifadə edirik.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Tez-tez verilən suallar
          </h2>
          <p className="text-lg text-stone-DEFAULT max-w-3xl mx-auto">
            Sizin suallarınıza cavablar
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
