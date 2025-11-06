'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { X } from 'lucide-react'

interface ProcessStepFormProps {
  stepId?: string
}

export function ProcessStepForm({ stepId }: ProcessStepFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    icon: '',
    titleAz: '',
    titleEn: '',
    titleRu: '',
    descAz: '',
    descEn: '',
    descRu: '',
    detailsAz: [] as string[],
    detailsEn: [] as string[],
    detailsRu: [] as string[],
    order: 0,
  })

  const [detailInputs, setDetailInputs] = useState({
    az: '',
    en: '',
    ru: '',
  })

  useEffect(() => {
    if (stepId) {
      fetchStep()
    }
  }, [stepId])

  const fetchStep = async () => {
    try {
      const response = await fetch(`/api/admin/process-steps/${stepId}`)
      if (response.ok) {
        const data = await response.json()
        setFormData({
          ...data,
          detailsAz: JSON.parse(data.detailsAz),
          detailsEn: JSON.parse(data.detailsEn),
          detailsRu: JSON.parse(data.detailsRu),
        })
      }
    } catch (error) {
      console.error('Error fetching process step:', error)
    }
  }

  const handleAddDetail = (lang: 'az' | 'en' | 'ru') => {
    const value = detailInputs[lang].trim()
    if (!value) return

    const detailField = lang === 'az' ? 'detailsAz' : lang === 'en' ? 'detailsEn' : 'detailsRu'
    setFormData({
      ...formData,
      [detailField]: [...formData[detailField], value],
    })
    setDetailInputs({ ...detailInputs, [lang]: '' })
  }

  const handleRemoveDetail = (lang: 'az' | 'en' | 'ru', index: number) => {
    const detailField = lang === 'az' ? 'detailsAz' : lang === 'en' ? 'detailsEn' : 'detailsRu'
    setFormData({
      ...formData,
      [detailField]: formData[detailField].filter((_, i) => i !== index),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const submitData = {
        ...formData,
        detailsAz: JSON.stringify(formData.detailsAz),
        detailsEn: JSON.stringify(formData.detailsEn),
        detailsRu: JSON.stringify(formData.detailsRu),
      }

      const url = stepId ? `/api/admin/process-steps/${stepId}` : '/api/admin/process-steps'

      const response = await fetch(url, {
        method: stepId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })

      if (response.ok) {
        router.push('/fdadmin/dashboard/process')
        router.refresh()
      }
    } catch (error) {
      console.error('Error saving process step:', error)
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
            <Label>İkon *</Label>
            <Input
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              placeholder="Search, FileText, CheckCircle, etc."
              required
            />
            <p className="text-xs text-stone-DEFAULT">
              Lucide React icon adını daxil edin
            </p>
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
            <Label>Təsvir *</Label>
            <Textarea
              value={formData.descAz}
              onChange={(e) => setFormData({ ...formData, descAz: e.target.value })}
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Detallar</Label>
            <div className="flex gap-2">
              <Input
                value={detailInputs.az}
                onChange={(e) => setDetailInputs({ ...detailInputs, az: e.target.value })}
                placeholder="Detal əlavə et"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddDetail('az'))}
              />
              <Button type="button" onClick={() => handleAddDetail('az')}>
                Əlavə et
              </Button>
            </div>
            <div className="space-y-2 mt-2">
              {formData.detailsAz.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-carbon-dark/50 rounded"
                >
                  <span className="flex-1 text-stone-DEFAULT text-sm">{detail}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveDetail('az', index)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
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
            <Label>Description *</Label>
            <Textarea
              value={formData.descEn}
              onChange={(e) => setFormData({ ...formData, descEn: e.target.value })}
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Details</Label>
            <div className="flex gap-2">
              <Input
                value={detailInputs.en}
                onChange={(e) => setDetailInputs({ ...detailInputs, en: e.target.value })}
                placeholder="Add detail"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddDetail('en'))}
              />
              <Button type="button" onClick={() => handleAddDetail('en')}>
                Add
              </Button>
            </div>
            <div className="space-y-2 mt-2">
              {formData.detailsEn.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-carbon-dark/50 rounded"
                >
                  <span className="flex-1 text-stone-DEFAULT text-sm">{detail}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveDetail('en', index)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
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
            <Label>Описание *</Label>
            <Textarea
              value={formData.descRu}
              onChange={(e) => setFormData({ ...formData, descRu: e.target.value })}
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Детали</Label>
            <div className="flex gap-2">
              <Input
                value={detailInputs.ru}
                onChange={(e) => setDetailInputs({ ...detailInputs, ru: e.target.value })}
                placeholder="Добавить деталь"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddDetail('ru'))}
              />
              <Button type="button" onClick={() => handleAddDetail('ru')}>
                Добавить
              </Button>
            </div>
            <div className="space-y-2 mt-2">
              {formData.detailsRu.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-carbon-dark/50 rounded"
                >
                  <span className="flex-1 text-stone-DEFAULT text-sm">{detail}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveDetail('ru', index)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Yadda saxlanılır...' : stepId ? 'Yenilə' : 'Yarat'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Ləğv et
        </Button>
      </div>
    </form>
  )
}
