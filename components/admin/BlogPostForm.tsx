'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

interface BlogPostFormProps {
  postId?: string
}

export function BlogPostForm({ postId }: BlogPostFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    slug: '',
    titleAz: '',
    titleEn: '',
    titleRu: '',
    excerptAz: '',
    excerptEn: '',
    excerptRu: '',
    contentAz: '',
    contentEn: '',
    contentRu: '',
    categoryAz: '',
    categoryEn: '',
    categoryRu: '',
    image: '',
    author: '',
    published: false,
  })

  useEffect(() => {
    if (postId) {
      fetchPost()
    }
  }, [postId])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/admin/blog/${postId}`)
      if (response.ok) {
        const data = await response.json()
        setFormData(data)
      }
    } catch (error) {
      console.error('Error fetching blog post:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = postId ? `/api/admin/blog/${postId}` : '/api/admin/blog'

      const response = await fetch(url, {
        method: postId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/fdadmin/dashboard/blog')
        router.refresh()
      }
    } catch (error) {
      console.error('Error saving blog post:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ümumi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Slug (URL) *</Label>
            <Input
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="new-blog-post"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Şəkil URL</Label>
            <Input
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="space-y-2">
            <Label>Müəllif *</Label>
            <Input
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              placeholder="Müəllif adı"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, published: checked as boolean })
              }
            />
            <Label htmlFor="published" className="cursor-pointer">
              Dərc edilsin
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Azərbaycanca (AZ)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Başlıq *</Label>
            <Input
              value={formData.titleAz}
              onChange={(e) => setFormData({ ...formData, titleAz: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Kateqoriya *</Label>
            <Input
              value={formData.categoryAz}
              onChange={(e) => setFormData({ ...formData, categoryAz: e.target.value })}
              placeholder="Texnologiya"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Qısa məzmun *</Label>
            <Textarea
              value={formData.excerptAz}
              onChange={(e) => setFormData({ ...formData, excerptAz: e.target.value })}
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Məzmun (HTML) *</Label>
            <Textarea
              value={formData.contentAz}
              onChange={(e) => setFormData({ ...formData, contentAz: e.target.value })}
              rows={12}
              className="font-mono text-sm"
              placeholder="<p>Məzmun HTML formatında...</p>"
              required
            />
            <p className="text-xs text-stone-DEFAULT">
              HTML formatında məzmun daxil edin. Gələcəkdə rich text editor əlavə ediləcək.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>English (EN)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Title *</Label>
            <Input
              value={formData.titleEn}
              onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Category *</Label>
            <Input
              value={formData.categoryEn}
              onChange={(e) => setFormData({ ...formData, categoryEn: e.target.value })}
              placeholder="Technology"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Excerpt *</Label>
            <Textarea
              value={formData.excerptEn}
              onChange={(e) => setFormData({ ...formData, excerptEn: e.target.value })}
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Content (HTML) *</Label>
            <Textarea
              value={formData.contentEn}
              onChange={(e) => setFormData({ ...formData, contentEn: e.target.value })}
              rows={12}
              className="font-mono text-sm"
              placeholder="<p>Content in HTML format...</p>"
              required
            />
            <p className="text-xs text-stone-DEFAULT">
              Enter content in HTML format. Rich text editor will be added in the future.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Русский (RU)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Название *</Label>
            <Input
              value={formData.titleRu}
              onChange={(e) => setFormData({ ...formData, titleRu: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Категория *</Label>
            <Input
              value={formData.categoryRu}
              onChange={(e) => setFormData({ ...formData, categoryRu: e.target.value })}
              placeholder="Технология"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Краткое содержание *</Label>
            <Textarea
              value={formData.excerptRu}
              onChange={(e) => setFormData({ ...formData, excerptRu: e.target.value })}
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Содержание (HTML) *</Label>
            <Textarea
              value={formData.contentRu}
              onChange={(e) => setFormData({ ...formData, contentRu: e.target.value })}
              rows={12}
              className="font-mono text-sm"
              placeholder="<p>Содержание в формате HTML...</p>"
              required
            />
            <p className="text-xs text-stone-DEFAULT">
              Введите содержание в формате HTML. Редактор rich text будет добавлен в будущем.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Yadda saxlanılır...' : postId ? 'Yenilə' : 'Yarat'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Ləğv et
        </Button>
      </div>
    </form>
  )
}
