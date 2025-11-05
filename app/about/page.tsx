'use client'

import { Target, Users, Award, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              {t(translations.about.title.az, translations.about.title.en, translations.about.title.ru)}
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              {t(translations.about.subtitle.az, translations.about.subtitle.en, translations.about.subtitle.ru)}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-carbon-light">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-stone-DEFAULT leading-relaxed mb-6">
                {t(
                  'Code Agency AI və avtomatlaşdırma həlləri üzrə ixtisaslaşmış texnologiya şirkətidir. Biz sadəcə kod yazmırıq - biznesinizin böyüməsi üçün ölçülə bilən həllər təqdim edirik.',
                  'Code Agency is a technology company specializing in AI and automation solutions. We don\'t just write code - we deliver measurable solutions for your business growth.',
                  'Code Agency - технологическая компания, специализирующаяся на решениях ИИ и автоматизации. Мы не просто пишем код - мы предоставляем измеримые решения для роста вашего бизнеса.'
                )}
              </p>
              <p className="text-lg text-stone-DEFAULT leading-relaxed">
                {t(
                  'Müasir texnologiyaları və best practice-ləri istifadə edərək, müştərilərimizə rəqabət üstünlüyü qazandıran həllər təqdim edirik. Hər layihəyə unikal yanaşırıq və sizin biznes məqsədlərinizə fokuslanırıq.',
                  'Using modern technologies and best practices, we deliver solutions that give our clients a competitive advantage. We approach each project uniquely and focus on your business goals.',
                  'Используя современные технологии и лучшие практики, мы предоставляем решения, которые дают нашим клиентам конкурентное преимущество. Мы подходим к каждому проекту уникально и фокусируемся на ваших бизнес-целях.'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-carbon rounded-2xl p-8 border border-carbon-border">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-stone-light mb-3">
                  {t(translations.about.mission.title.az, translations.about.mission.title.en, translations.about.mission.title.ru)}
                </h3>
                <p className="text-stone-DEFAULT">
                  {t(translations.about.mission.desc.az, translations.about.mission.desc.en, translations.about.mission.desc.ru)}
                </p>
              </div>

              <div className="bg-carbon rounded-2xl p-8 border border-carbon-border">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-stone-light mb-3">
                  {t(translations.about.values.title.az, translations.about.values.title.en, translations.about.values.title.ru)}
                </h3>
                <p className="text-stone-DEFAULT">
                  {t(translations.about.values.desc.az, translations.about.values.desc.en, translations.about.values.desc.ru)}
                </p>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-8 border border-gold/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-stone-light">
                  {t('Xidmətlərimiz', 'Our Services', 'Наши услуги')}
                </h3>
              </div>
              <p className="text-stone-DEFAULT mb-6">
                {t(
                  'Biz müştərilərimizə geniş spektrli texnoloji xidmətlər təqdim edirik:',
                  'We offer our clients a wide range of technology services:',
                  'Мы предлагаем нашим клиентам широкий спектр технологических услуг:'
                )}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-stone-DEFAULT space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>{t('AI və Machine Learning həlləri', 'AI and Machine Learning solutions', 'Решения ИИ и машинного обучения')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>{t('Biznes proseslərin avtomatlaşdırılması', 'Business process automation', 'Автоматизация бизнес-процессов')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>{t('Veb və mobil tətbiq inkişafı', 'Web and mobile app development', 'Разработка веб и мобильных приложений')}</span>
                  </li>
                </ul>
                <ul className="text-stone-DEFAULT space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>{t('Data analitika və vizuallaşdırma', 'Data analytics and visualization', 'Аналитика данных и визуализация')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>{t('Cloud infrastruktur həlləri', 'Cloud infrastructure solutions', 'Облачные инфраструктурные решения')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>{t('Texniki məsləhət və konsultasiya', 'Technical advice and consulting', 'Технические консультации')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="font-serif text-3xl text-stone-light mb-4">
                {t('Komandamıza qoşulun', 'Join our team', 'Присоединяйтесь к нашей команде')}
              </h3>
              <p className="text-stone-DEFAULT mb-8 max-w-2xl mx-auto">
                {t(
                  'İstedadlı və motivasiyalı mütəxəssislər axtarırıq. Əgər texnologiya və innovasiya sizin üçün maraqlıdırsa, bizimlə əlaqə saxlayın.',
                  'We are looking for talented and motivated professionals. If technology and innovation interest you, contact us.',
                  'Мы ищем талантливых и мотивированных специалистов. Если вас интересуют технологии и инновации, свяжитесь с нами.'
                )}
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  {t('Vakansiyalar', 'Careers', 'Вакансии')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}