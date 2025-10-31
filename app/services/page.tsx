import { Metadata } from 'next'
import { Bot, Workflow, Brain, Globe, Database, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Xidmətlər',
  description:
    'Code Agency xidmətləri: AI həlləri, avtomatlaşdırma, veb və mobil inkişaf, data science və daha çox.',
}

const services = [
  {
    id: 'chatbot',
    icon: Bot,
    title: 'Chatbot & AI Köməkçilər',
    description:
      'Vebsayt, messencer və daxili sistemlər üçün dillə idarə olunan köməkçilər.',
    features: [
      'Məlumat bazası ilə inteqrasiya',
      'Çoxdilli cavablar və kontekst yaddaşı',
      'Sorğu yönləndirmə və avtomatik cavablandırma',
      'Bilik bazası və hesabatlama',
      '24/7 müştəri dəstəyi',
    ],
    technologies: ['NLP', 'Machine Learning', 'API Integration'],
    deliveryTime: '3-6 həftə',
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Avtomatlaşdırma Həlləri',
    description:
      'E-poçt, satış və müştəri münasibətləri proseslərinin avtomatlaşdırılması.',
    features: [
      'İş axını orkestri',
      'Mütəmadi məlumat toplama və transformasiya',
      'Bildiriş və eskalasiya sistemləri',
      'Status izləmə və arxivləşdirmə',
      'ROI ölçülməsi',
    ],
    technologies: ['Workflow Automation', 'API Integration', 'Cloud Services'],
    deliveryTime: '4-8 həftə',
  },
  {
    id: 'ai-integration',
    icon: Brain,
    title: 'AI İntegrasiyası',
    description:
      'Mövcud biznes sistemlərinə AI modellərinin qoşulması.',
    features: [
      'Mətn, şəkil, səs və strukturlaşdırılmış data ilə iş',
      'Tövsiyə və təsnifat sistemləri',
      'Anomaliya aşkarlanması və proqnozlaşdırma',
      'Özəl verilənlərlə incə-tənzimləmə',
      'Giriş nəzarəti və təhlükəsizlik',
    ],
    technologies: ['Deep Learning', 'Computer Vision', 'NLP'],
    deliveryTime: '6-12 həftə',
  },
  {
    id: 'web-mobile',
    icon: Globe,
    title: 'Veb sayt & Mobil tətbiqlər',
    description:
      'Yüksək performanslı veb və mobil tətbiqlər, CMS inteqrasiyası.',
    features: [
      'Responsive və mobil-öncə dizayn',
      'E-commerce və ödəniş inteqrasiyası',
      'Rezervasiya və şəxsi kabinet',
      'Çoxdillilik və SEO optimallaşdırma',
      'Test və monitorinq',
    ],
    technologies: ['React', 'Next.js', 'React Native', 'TypeScript'],
    deliveryTime: '4-12 həftə',
  },
  {
    id: 'data',
    icon: Database,
    title: 'Scraping, Data Toplanması & Analiz',
    description:
      'Müxtəlif mənbələrdən dayanıqlı məlumat toplanması və analizi.',
    features: [
      'Strukturlaşdırma və keyfiyyət yoxlaması',
      'Uzunmüddətli saxlanma və versiyalaşdırma',
      'İnteraktiv dashboardlar',
      'Axtarış və filter sistemləri',
      'Periodik hesabatlar',
    ],
    technologies: ['Data Engineering', 'ETL', 'Analytics'],
    deliveryTime: '3-8 həftə',
  },
  {
    id: 'ml',
    icon: TrendingUp,
    title: 'Data Science & ML',
    description:
      'Proqnozlaşdırma, optimallaşdırma, klasterləşdirmə və NLP həlləri.',
    features: [
      'Eksperiment dizaynı və A/B test',
      'Xüsusiyyət mühəndisliyi',
      'Model izləmə və versiyalaşdırma',
      'Ədalətlilik və izah edilə bilənlik',
      'Production deployment',
    ],
    technologies: ['Python', 'ML Frameworks', 'MLOps'],
    deliveryTime: '8-16 həftə',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              Bizim Xidmətlər
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              Sizin biznes ehtiyaclarınıza uyğun geniş spektrli texnoloji həllər.
              Hər xidmət üçün özəl yanaşma və keyfiyyət təminatı.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-carbon-light">
        <div className="container px-4">
          <div className="space-y-12">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <Card className="overflow-hidden hover:border-gold/50 transition-all">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 p-8">
                        <CardHeader className="p-0 mb-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-7 h-7 text-gold" aria-hidden="true" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                              <CardDescription className="text-base">
                                {service.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <h3 className="text-sm font-semibold text-stone-light mb-3">
                            Əsas xüsusiyyətlər:
                          </h3>
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-sm text-stone-DEFAULT">
                                <span className="text-gold mt-1">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                      <div className="bg-carbon border-l border-carbon-border p-8 flex flex-col justify-between">
                        <div>
                          <div className="text-sm text-stone-DEFAULT mb-2">Çatdırılma müddəti</div>
                          <div className="text-2xl font-serif text-gold mb-6">
                            {service.deliveryTime}
                          </div>
                          <div className="text-sm text-stone-DEFAULT mb-4">
                            * Layihənin mürəkkəbliyindən asılı olaraq dəyişə bilər
                          </div>
                        </div>
                        <Button asChild size="lg" className="w-full">
                          <Link href="/quote">Təklif al</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-carbon">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-stone-light mb-4">
              Özəl həll lazımdır?
            </h2>
            <p className="text-stone-DEFAULT mb-8">
              Yuxarıdakı xidmətlər siyahısında axtardığınızı tapa bilmirsiniz? Gəlin sizin
              spesifik ehtiyaclarınız üçün custom həll hazırlayaq.
            </p>
            <Button asChild size="xl">
              <Link href="/contact">Bizimlə əlaqə saxlayın</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
