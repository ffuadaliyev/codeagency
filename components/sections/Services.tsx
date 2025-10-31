'use client'

import { Bot, Workflow, Brain, Globe, Database, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Bot,
    title: 'Chatbot & AI Köməkçilər',
    description:
      'Vebsayt, messencer və daxili sistemlər üçün çoxdilli, kontekst yaddaşlı AI köməkçiləri.',
    tags: ['24/7 Dəstək', 'Çoxdilli', 'İnteqrasiya'],
    href: '/services#chatbot',
  },
  {
    icon: Workflow,
    title: 'Avtomatlaşdırma Həlləri',
    description:
      'İş proseslərinin, e-poçt, satış və müştəri münasibətlərinin tam avtomatlaşdırılması.',
    tags: ['ROI Artımı', 'Sürət', 'Effektivlik'],
    href: '/services#automation',
  },
  {
    icon: Brain,
    title: 'AI İntegrasiyası',
    description:
      'Mövcud biznes sistemlərinə AI modellərinin qoşulması və özəl həllər.',
    tags: ['Tövsiyə', 'Proqnoz', 'Təsnifat'],
    href: '/services#ai-integration',
  },
  {
    icon: Globe,
    title: 'Veb sayt & Mobil tətbiqlər',
    description:
      'Yüksək performanslı, SEO-optimallaşdırılmış veb və mobil tətbiqlər.',
    tags: ['Responsive', 'PWA', 'E-commerce'],
    href: '/services#web-mobile',
  },
  {
    icon: Database,
    title: 'Scraping & Data Analizi',
    description:
      'Strukturlaşdırılmış məlumat toplanması, təmizlənməsi və analitik dashboardlar.',
    tags: ['Big Data', 'Vizuallaşdırma', 'Hesabatlar'],
    href: '/services#data',
  },
  {
    icon: TrendingUp,
    title: 'Data Science & ML',
    description:
      'Proqnozlaşdırma, optimallaşdırma, klasterləşdirmə və ML modelləri.',
    tags: ['Predictive', 'NLP', 'Computer Vision'],
    href: '/services#ml',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Services() {
  return (
    <section className="py-24 lg:py-32 bg-carbon relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-stone-light mb-4">
            Bizim Xidmətlər
          </h2>
          <p className="text-lg text-stone-DEFAULT max-w-3xl mx-auto">
            Sizin biznes ehtiyaclarınıza uyğun geniş spektrli texnoloji həllər
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                        <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
                      </div>
                      <CardTitle className="group-hover:text-gold transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
