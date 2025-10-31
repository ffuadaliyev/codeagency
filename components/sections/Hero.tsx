'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon to-carbon-light" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(198,161,91,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(198,161,91,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>AI və Avtomatlaşdırma Həlləri</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-stone-light mb-6 leading-tight"
          >
            AI və Avtomatlaşdırma ilə{' '}
            <span className="text-gradient">biznesinizi</span> daha sürətli böyüdün
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-stone-DEFAULT max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Code Agency – data yönümlü həllər, ölçülə bilən nəticələr və premium UI/UX
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="xl" className="group">
              <Link href="/quote" className="gap-2">
                Təklif al
                <ArrowRight
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/projects">Layihələrimizi gör</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-carbon-border"
          >
            {[
              { label: 'Uğurlu Layihə', value: '50+' },
              { label: 'Məmnun Müştəri', value: '40+' },
              { label: 'İllik Təcrübə', value: '5+' },
              { label: 'Komanda Üzvü', value: '15+' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-semibold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-DEFAULT">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-stone-DEFAULT text-xs">
          <span>Daha çox</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-DEFAULT to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
