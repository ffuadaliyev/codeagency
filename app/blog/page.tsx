import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Code Agency blogu - AI, avtomatlaşdırma və texnologiya haqqında məqalələr.',
}

const posts = [
  {
    id: 'ai-business-2024',
    title: 'AI-nın 2024-də biznesə təsiri',
    excerpt: 'Süni intellekt texnologiyalarının müasir biznesə necə dəyər qatdığını araşdırırıq.',
    category: 'AI & ML',
    date: '2024-01-15',
    readTime: '5 dəqiqə',
    author: 'Code Agency Team',
  },
  {
    id: 'automation-roi',
    title: 'Avtomatlaşdırmada ROI hesablanması',
    excerpt: 'Avtomatlaşdırma layihələrinin gəlirliliyini necə ölçmək olar.',
    category: 'Avtomatlaşdırma',
    date: '2024-01-10',
    readTime: '7 dəqiqə',
    author: 'Code Agency Team',
  },
  {
    id: 'web-performance',
    title: 'Veb performansının əhəmiyyəti',
    excerpt: 'Sürətli veb saytların konversiyaya və SEO-ya təsiri.',
    category: 'Web Development',
    date: '2024-01-05',
    readTime: '6 dəqiqə',
    author: 'Code Agency Team',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-gradient-to-b from-carbon to-carbon-light">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-light mb-6">Blog</h1>
            <p className="text-lg text-stone-DEFAULT">
              AI, avtomatlaşdırma və texnologiya haqqında yazılar
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
                    <p className="text-sm text-stone-DEFAULT">Müəllif: {post.author}</p>
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
