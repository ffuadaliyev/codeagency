import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Layihələr',
  description: 'Code Agency tərəfindən hazırlanmış uğurlu layihələr və case studylər.',
}

const projects = [
  {
    id: 'ecommerce-ai',
    title: 'E-commerce AI Asistenti',
    category: 'AI & Chatbot',
    description:
      'Onlayn mağaza üçün 24/7 müştəri dəstəyi və məhsul tövsiyə sistemi. 40% sorğu azalması, 25% konversiya artımı.',
    tags: ['AI', 'NLP', 'E-commerce'],
    image: '/images/projects/placeholder-1.jpg',
    metrics: { roi: '+120%', time: '8 həftə', satisfaction: '92%' },
  },
  {
    id: 'crm-automation',
    title: 'CRM Avtomatlaşdırma',
    category: 'Avtomatlaşdırma',
    description:
      'Satış və müştəri məlumatlarının avtomatik emalı, e-poçt kampaniyaları və hesabatlama sistemi.',
    tags: ['Automation', 'CRM', 'Analytics'],
    image: '/images/projects/placeholder-2.jpg',
    metrics: { roi: '+85%', time: '6 həftə', satisfaction: '88%' },
  },
  {
    id: 'data-dashboard',
    title: 'Analitik Dashboard',
    category: 'Data Science',
    description:
      'Müxtəlif mənbələrdən real-vaxt məlumat toplama və vizuallaşdırma platforması.',
    tags: ['Dashboard', 'Big Data', 'Vizuallaşdırma'],
    image: '/images/projects/placeholder-3.jpg',
    metrics: { roi: '+95%', time: '10 həftə', satisfaction: '90%' },
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              Layihələrimiz
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              Uğurlu nəticələr və ölçülə bilən ROI ilə həyata keçirdiyimiz layihələr
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-carbon-light">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block"
              >
                <Card className="h-full hover:border-gold/50 hover:-translate-y-1 transition-all overflow-hidden">
                  <div className="aspect-video bg-carbon relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center text-stone-DEFAULT text-sm">
                      [Project Image]
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
                    </div>
                    <CardTitle className="group-hover:text-gold transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-carbon-border">
                      <div>
                        <div className="text-xs text-stone-DEFAULT mb-1">ROI</div>
                        <div className="font-serif text-gold">{project.metrics.roi}</div>
                      </div>
                      <div>
                        <div className="text-xs text-stone-DEFAULT mb-1">Müddət</div>
                        <div className="font-serif text-gold">{project.metrics.time}</div>
                      </div>
                      <div>
                        <div className="text-xs text-stone-DEFAULT mb-1">Məmnuniyyət</div>
                        <div className="font-serif text-gold">{project.metrics.satisfaction}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
