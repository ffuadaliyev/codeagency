'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface BlogPost {
  id: string
  titleAz: string
  titleEn: string
  titleRu: string
  categoryEn: string
  author: string
  published: boolean
  createdAt: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/admin/blog')
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Bu bloq yazısını silmək istədiyinizə əminsiniz?')) return

    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchPosts()
      }
    } catch (error) {
      console.error('Error deleting blog post:', error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('az-AZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (loading) {
    return <div className="text-stone-DEFAULT">Yüklənir...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-stone-light">Bloq Yazıları</h1>
          <p className="text-stone-DEFAULT mt-1">
            Bloq məqalələrini idarə edin
          </p>
        </div>
        <Link href="/fdadmin/dashboard/blog/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Yeni Yazı
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {posts.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-stone-DEFAULT">Hələ heç bir bloq yazısı yoxdur. İlkini yaradın!</p>
          </Card>
        ) : (
          posts.map((post) => (
            <Card key={post.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-stone-light text-lg">
                      {post.titleEn}
                    </h3>
                    <Badge variant={post.published ? "default" : "outline"}>
                      {post.published ? 'Dərc edilib' : 'Qaralama'}
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-sm text-stone-DEFAULT mb-2">
                    <span>AZ: {post.titleAz.substring(0, 40)}...</span>
                    <span>RU: {post.titleRu.substring(0, 40)}...</span>
                  </div>
                  <div className="flex gap-4 text-sm text-stone-DEFAULT">
                    <span className="text-gold">{post.categoryEn}</span>
                    <span>Müəllif: {post.author}</span>
                    <span>{formatDate(post.createdAt)}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/fdadmin/dashboard/blog/${post.id}`}>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Düzəlt
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(post.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                    Sil
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
