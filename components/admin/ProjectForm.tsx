'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { X } from 'lucide-react'

interface ProjectFormProps {
  projectId?: string
}

export function ProjectForm({ projectId }: ProjectFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    slug: '',
    titleAz: '',
    titleEn: '',
    titleRu: '',
    categoryAz: '',
    categoryEn: '',
    categoryRu: '',
    descriptionAz: '',
    descriptionEn: '',
    descriptionRu: '',
    image: '',
    tagsAz: [] as string[],
    tagsEn: [] as string[],
    tagsRu: [] as string[],
    roi: '',
    durationAz: '',
    durationEn: '',
    durationRu: '',
    satisfaction: '',
    order: 0,
  })

  const [tagInputs, setTagInputs] = useState({
    az: '',
    en: '',
    ru: '',
  })

  useEffect(() => {
    if (projectId) {
      fetchProject()
    }
  }, [projectId])

  const fetchProject = async () => {
    try {
      const response = await fetch(`/api/admin/projects/${projectId}`)
      if (response.ok) {
        const data = await response.json()
        setFormData({
          ...data,
          tagsAz: JSON.parse(data.tagsAz),
          tagsEn: JSON.parse(data.tagsEn),
          tagsRu: JSON.parse(data.tagsRu),
        })
      }
    } catch (error) {
      console.error('Error fetching project:', error)
    }
  }

  const handleAddTag = (lang: 'az' | 'en' | 'ru') => {
    const value = tagInputs[lang].trim()
    if (!value) return

    const tagField = lang === 'az' ? 'tagsAz' : lang === 'en' ? 'tagsEn' : 'tagsRu'
    setFormData({
      ...formData,
      [tagField]: [...formData[tagField], value],
    })
    setTagInputs({ ...tagInputs, [lang]: '' })
  }

  const handleRemoveTag = (lang: 'az' | 'en' | 'ru', index: number) => {
    const tagField = lang === 'az' ? 'tagsAz' : lang === 'en' ? 'tagsEn' : 'tagsRu'
    setFormData({
      ...formData,
      [tagField]: formData[tagField].filter((_, i) => i !== index),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const submitData = {
        ...formData,
        tagsAz: JSON.stringify(formData.tagsAz),
        tagsEn: JSON.stringify(formData.tagsEn),
        tagsRu: JSON.stringify(formData.tagsRu),
      }

      const url = projectId ? `/api/admin/projects/${projectId}` : '/api/admin/projects'

      const response = await fetch(url, {
        method: projectId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })

      if (response.ok) {
        router.push('/fdadmin/dashboard/projects')
        router.refresh()
      }
    } catch (error) {
      console.error('Error saving project:', error)
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
              placeholder="web-development-project"
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>ROI *</Label>
              <Input
                value={formData.roi}
                onChange={(e) => setFormData({ ...formData, roi: e.target.value })}
                placeholder="250%"
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Məmnuniyyət *</Label>
              <Input
                value={formData.satisfaction}
                onChange={(e) => setFormData({ ...formData, satisfaction: e.target.value })}
                placeholder="98%"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Sıra</Label>
            <Input
              type="number"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
            />
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
              placeholder="Veb İnkişaf"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Təsvir *</Label>
            <Textarea
              value={formData.descriptionAz}
              onChange={(e) => setFormData({ ...formData, descriptionAz: e.target.value })}
              rows={4}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Müddət *</Label>
            <Input
              value={formData.durationAz}
              onChange={(e) => setFormData({ ...formData, durationAz: e.target.value })}
              placeholder="3 ay"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Etiketlər</Label>
            <div className="flex gap-2">
              <Input
                value={tagInputs.az}
                onChange={(e) => setTagInputs({ ...tagInputs, az: e.target.value })}
                placeholder="Etiket əlavə et"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag('az'))}
              />
              <Button type="button" onClick={() => handleAddTag('az')}>
                Əlavə et
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.tagsAz.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag('az', index)}
                    className="hover:text-gold-light"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
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
              placeholder="Web Development"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Description *</Label>
            <Textarea
              value={formData.descriptionEn}
              onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
              rows={4}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Duration *</Label>
            <Input
              value={formData.durationEn}
              onChange={(e) => setFormData({ ...formData, durationEn: e.target.value })}
              placeholder="3 months"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex gap-2">
              <Input
                value={tagInputs.en}
                onChange={(e) => setTagInputs({ ...tagInputs, en: e.target.value })}
                placeholder="Add tag"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag('en'))}
              />
              <Button type="button" onClick={() => handleAddTag('en')}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.tagsEn.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag('en', index)}
                    className="hover:text-gold-light"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
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
              placeholder="Веб-разработка"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Описание *</Label>
            <Textarea
              value={formData.descriptionRu}
              onChange={(e) => setFormData({ ...formData, descriptionRu: e.target.value })}
              rows={4}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Длительность *</Label>
            <Input
              value={formData.durationRu}
              onChange={(e) => setFormData({ ...formData, durationRu: e.target.value })}
              placeholder="3 месяца"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Теги</Label>
            <div className="flex gap-2">
              <Input
                value={tagInputs.ru}
                onChange={(e) => setTagInputs({ ...tagInputs, ru: e.target.value })}
                placeholder="Добавить тег"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag('ru'))}
              />
              <Button type="button" onClick={() => handleAddTag('ru')}>
                Добавить
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.tagsRu.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag('ru', index)}
                    className="hover:text-gold-light"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Yadda saxlanılır...' : projectId ? 'Yenilə' : 'Yarat'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Ləğv et
        </Button>
      </div>
    </form>
  )
}
