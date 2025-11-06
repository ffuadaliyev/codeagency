'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function BlogPage() {
  const { t } = useLanguage()

  const posts = [
    {
      id: 'ai-business-2024',
      title: t('AI-nın 2024-də biznesə təsiri', 'AI Impact on Business in 2024', 'Влияние ИИ на бизнес в 2024 году'),
      excerpt: t(
        'Süni intellekt texnologiyalarının müasir biznesə necə dəyər qatdığını araşdırırıq.',
        'Exploring how artificial intelligence technologies add value to modern business.',
        'Исследуем, как технологии искусственного интеллекта добавляют ценность современному бизнесу.'
      ),
      category: 'AI & ML',
      date: '2024-01-15',
      readTime: t('5 dəqiqə', '5 min read', '5 мин'),
      author: 'Code Agency Team',
    },
    {
      id: 'automation-roi',
      title: t('Avtomatlaşdırmada ROI hesablanması', 'ROI Calculation in Automation', 'Расчет ROI в автоматизации'),
      excerpt: t(
        'Avtomatlaşdırma layihələrinin gəlirliliyini necə ölçmək olar.',
        'How to measure the profitability of automation projects.',
        'Как измерить прибыльность проектов автоматизации.'
      ),
      category: t('Avtomatlaşdırma', 'Automation', 'Автоматизация'),
      date: '2024-01-10',
      readTime: t('7 dəqiqə', '7 min read', '7 мин'),
      author: 'Code Agency Team',
    },
    {
      id: 'web-performance',
      title: t('Veb performansının əhəmiyyəti', 'Web Performance Importance', 'Важность производительности веб-сайтов'),
      excerpt: t(
        'Sürətli veb saytların konversiyaya və SEO-ya təsiri.',
        'Impact of fast websites on conversion and SEO.',
        'Влияние быстрых веб-сайтов на конверсию и SEO.'
      ),
      category: t('Veb İnkişaf', 'Web Development', 'Веб-разработка'),
      date: '2024-01-05',
      readTime: t('6 dəqiqə', '6 min read', '6 мин'),
      author: 'Code Agency Team',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">
              {t('Blog', 'Blog', 'Блог')}
            </h1>
            <p className="text-lg text-stone-DEFAULT">
              {t(
                'AI, avtomatlaşdırma və texnologiya haqqında yazılar',
                'Articles about AI, automation and technology',
                'Статьи об ИИ, автоматизации и технологиях'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-carbon-light">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                <Card className="hover:border-gold/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-xs text-stone-DEFAULT flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('az-AZ')}
                      </span>
                      <span className="text-xs text-stone-DEFAULT flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-gold transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-stone-DEFAULT">
                      {t('Müəllif', 'Author', 'Автор')}: {post.author}
                    </p>
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
