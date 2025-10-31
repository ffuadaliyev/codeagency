'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Xidmətlər', href: '/services' },
  { name: 'Layihələr', href: '/projects' },
  { name: 'Proses', href: '/process' },
  { name: 'Haqqımızda', href: '/about' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<'az' | 'en'>('az')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-carbon/80 backdrop-blur-md border-b border-carbon-border shadow-lg py-3'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between" aria-label="Global">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 focus-ring rounded-lg"
            aria-label="Ana səhifə"
          >
            <div className="relative">
              <div className="text-2xl font-serif font-semibold text-stone-light">
                Code <span className="text-gold">Agency</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-stone-DEFAULT hover:text-gold transition-colors link-hover focus-ring rounded px-2 py-1"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-carbon-light rounded-lg p-1 border border-carbon-border">
              <button
                onClick={() => setCurrentLang('az')}
                className={cn(
                  'px-3 py-1.5 text-xs font-medium rounded transition-colors focus-ring',
                  currentLang === 'az'
                    ? 'bg-gold text-carbon'
                    : 'text-stone-DEFAULT hover:text-gold'
                )}
                aria-label="Azərbaycan dili"
              >
                AZ
              </button>
              <button
                onClick={() => setCurrentLang('en')}
                className={cn(
                  'px-3 py-1.5 text-xs font-medium rounded transition-colors focus-ring',
                  currentLang === 'en'
                    ? 'bg-gold text-carbon'
                    : 'text-stone-DEFAULT hover:text-gold'
                )}
                aria-label="English"
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <Button asChild className="hidden sm:inline-flex" size="default">
              <Link href="/quote">Təklif al</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-stone-light hover:text-gold transition-colors focus-ring rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Menyu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-carbon-border">
            <div className="flex flex-col gap-2 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-stone-DEFAULT hover:text-gold transition-colors px-4 py-3 rounded-lg hover:bg-carbon-light focus-ring"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full" size="lg">
                  <Link href="/quote">Təklif al</Link>
                </Button>
              </div>
              <div className="flex sm:hidden items-center gap-2 px-4 pt-2">
                <button
                  onClick={() => {
                    setCurrentLang('az')
                    setIsMobileMenuOpen(false)
                  }}
                  className={cn(
                    'flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors focus-ring',
                    currentLang === 'az'
                      ? 'bg-gold text-carbon'
                      : 'bg-carbon-light text-stone-DEFAULT hover:text-gold'
                  )}
                >
                  AZ
                </button>
                <button
                  onClick={() => {
                    setCurrentLang('en')
                    setIsMobileMenuOpen(false)
                  }}
                  className={cn(
                    'flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors focus-ring',
                    currentLang === 'en'
                      ? 'bg-gold text-carbon'
                      : 'bg-carbon-light text-stone-DEFAULT hover:text-gold'
                  )}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
