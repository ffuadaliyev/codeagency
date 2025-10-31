import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'Haqqımızda', href: '/about' },
    { name: 'Xidmətlər', href: '/services' },
    { name: 'Layihələr', href: '/projects' },
    { name: 'Proses', href: '/process' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Təklif al', href: '/quote' },
    { name: 'Əlaqə', href: '/contact' },
  ],
  legal: [
    { name: 'Məxfilik Siyasəti', href: '/privacy' },
    { name: 'İstifadə Şərtləri', href: '/terms' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: '#', icon: Github },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

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
              AI və avtomatlaşdırma ilə biznesinizi daha sürətli böyüdün. Data yönümlü həllər,
              ölçülə bilən nəticələr və premium UI/UX.
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
                <span>Bakı, Azərbaycan</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-base font-semibold text-stone-light mb-4">Şirkət</h3>
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
            <h3 className="font-serif text-base font-semibold text-stone-light mb-4">Resurslar</h3>
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
            <h3 className="font-serif text-base font-semibold text-stone-light mb-4">Hüquqi</h3>
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
            <h3 className="font-serif text-base font-semibold text-stone-light mb-4">Sosial</h3>
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
              © {currentYear} Code Agency. Bütün hüquqlar qorunur.
            </p>
            <p className="text-xs text-stone-DEFAULT/70 text-center sm:text-right">
              Premium həllər və innovasiya ilə hazırlanmışdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
