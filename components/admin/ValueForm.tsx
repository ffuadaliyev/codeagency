'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ValueFormProps {
  valueId?: string
}

export function ValueForm({ valueId }: ValueFormProps) {
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
    order: 0,
  })

  useEffect(() => {
    if (valueId) {
      fetchValue()
    }
  }, [valueId])

  const fetchValue = async () => {
    try {
      const response = await fetch(`/api/admin/values/${valueId}`)
      if (response.ok) {
        const data = await response.json()
        setFormData(data)
      }
    } catch (error) {
      console.error('Error fetching value:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = valueId ? `/api/admin/values/${valueId}` : '/api/admin/values'

      const response = await fetch(url, {
        method: valueId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/fdadmin/dashboard/values')
        router.refresh()
      }
    } catch (error) {
      console.error('Error saving value:', error)
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
            <Label>İkon adı (Lucide React) *</Label>
            <Input
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              required
              placeholder="Zap, Shield, Target, etc."
            />
            <p className="text-xs text-stone-DEFAULT">Məsələn: Zap, Shield, Target, Rocket</p>
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Русский (RU)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Заголовок *</Label>
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
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Yadda saxlanılır...' : valueId ? 'Yenilə' : 'Yarat'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Ləğv et
        </Button>
      </div>
    </form>
  )
}
