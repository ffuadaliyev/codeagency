'use client'

import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-carbon via-carbon-light to-carbon relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(198,161,91,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(198,161,91,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-stone-light mb-6">
            Layihənizi həyata keçirməyə hazırsınız?
          </h2>
          <p className="text-lg md:text-xl text-stone-DEFAULT mb-10 max-w-2xl mx-auto">
            Gəlin bir araya gəlib sizin biznes məqsədlərinizə uyğun texnoloji həll hazırlayaq.
            İlkin məsləhət pulsuzdur.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <Link href="/contact" className="gap-2">
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                Əlaqə saxlayın
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 pt-12 border-t border-carbon-border"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-serif text-gold mb-1">24/7</div>
                <div className="text-sm text-stone-DEFAULT">Dəstək</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif text-gold mb-1">95%</div>
                <div className="text-sm text-stone-DEFAULT">Məmnuniyyət</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif text-gold mb-1">100%</div>
                <div className="text-sm text-stone-DEFAULT">Məxfilik</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif text-gold mb-1">3 ay</div>
                <div className="text-sm text-stone-DEFAULT">Pulsuz Dəstək</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
