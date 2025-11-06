'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Github } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: '#', icon: Github },
]

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: t('Haqqımızda', 'About', 'О нас'), href: '/about' },
      { name: t('Xidmətlər', 'Services', 'Услуги'), href: '/services' },
      { name: t('Layihələr', 'Projects', 'Проекты'), href: '/projects' },
      { name: t('Proses', 'Process', 'Процесс'), href: '/process' },
    ],
    resources: [
      { name: t('Blog', 'Blog', 'Блог'), href: '/blog' },
      { name: t('Təklif al', 'Get Quote', 'Получить предложение'), href: '/quote' },
      { name: t('Əlaqə', 'Contact', 'Контакты'), href: '/contact' },
    ],
    legal: [
      { name: t('Məxfilik Siyasəti', 'Privacy Policy', 'Политика конфиденциальности'), href: '/privacy' },
      { name: t('İstifadə Şərtləri', 'Terms of Service', 'Условия использования'), href: '/terms' },
    ],
  }

  return (
    <footer className="bg-carbon-light border-t border-carbon-border mt-24">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block focus-ring rounded-lg">
              <div className="text-2xl font-serif font-semibold text-stone-light mb-4">
                Code <span className="text-gold">Agency</span>
              </div>
            </Link>
            <p className="text-stone-DEFAULT text-sm leading-relaxed mb-6">
              {t(
                'AI və avtomatlaşdırma ilə biznesinizi daha sürətli böyüdün. Data yönümlü həllər, ölçülə bilən nəticələr və premium UI/UX.',
                'Grow your business faster with AI and automation. Data-driven solutions, measurable results, and premium UI/UX.',
                'Развивайте свой бизнес быстрее с помощью ИИ и автоматизации. Решения на основе данных, измеримые результаты и премиум UI/UX.'
              )}
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@codeagency.az"
                className="flex items-center gap-2 text-sm text-stone-DEFAULT hover:text-gold transition-colors focus-ring rounded"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>info@codeagency.az</span>
              </a>
              <a
                href="tel:+994501234567"
                className="flex items-center gap-2 text-sm text-stone-DEFAULT hover:text-gold transition-colors focus-ring rounded"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+994 (50) 123-45-67</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-stone-DEFAULT">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{t('Bakı, Azərbaycan', 'Baku, Azerbaijan', 'Баку, Азербайджан')}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-base font-semibold text-stone-light mb-4">
              {t(translations.footer.company.az, translations.footer.company.en, translations.footer.company.ru)}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-DEFAULT hover:text-gold transition-colors link-hover focus-ring rounded inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-base font-semibold text-stone-light mb-4">
              {t(translations.footer.resources.az, translations.footer.resources.en, translations.footer.resources.ru)}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-DEFAULT hover:text-gold transition-colors link-hover focus-ring rounded inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-base font-semibold text-stone-light mb-4">
              {t(translations.footer.legal.az, translations.footer.legal.en, translations.footer.legal.ru)}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-DEFAULT hover:text-gold transition-colors link-hover focus-ring rounded inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-base font-semibold text-stone-light mb-4">
              {t(translations.footer.social.az, translations.footer.social.en, translations.footer.social.ru)}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-carbon border border-carbon-border hover:border-gold hover:bg-gold/10 transition-all focus-ring"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-stone-DEFAULT hover:text-gold transition-colors" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-carbon-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-DEFAULT text-center sm:text-left">
              © {currentYear} Code Agency. {t(translations.footer.rights.az, translations.footer.rights.en, translations.footer.rights.ru)}
            </p>
            <p className="text-xs text-stone-DEFAULT/70 text-center sm:text-right">
              {t(
                'Premium həllər və innovasiya ilə hazırlanmışdır.',
                'Built with premium solutions and innovation.',
                'Создано с премиальными решениями и инновациями.'
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
