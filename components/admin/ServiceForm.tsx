'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceFormProps {
  serviceId?: string
}

export function ServiceForm({ serviceId }: ServiceFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    slug: '',
    icon: 'Bot',
    titleAz: '',
    titleEn: '',
    titleRu: '',
    descAz: '',
    descEn: '',
    descRu: '',
    featuresAz: [''],
    featuresEn: [''],
    featuresRu: [''],
    deliveryAz: '',
    deliveryEn: '',
    deliveryRu: '',
    priceRange: '',
    order: 0,
  })

  useEffect(() => {
    if (serviceId) {
      fetchService()
    }
  }, [serviceId])

  const fetchService = async () => {
    try {
      const response = await fetch(`/api/admin/services/${serviceId}`)
      if (response.ok) {
        const data = await response.json()
        setFormData({
          ...data,
          featuresAz: JSON.parse(data.featuresAz || '[]'),
          featuresEn: JSON.parse(data.featuresEn || '[]'),
          featuresRu: JSON.parse(data.featuresRu || '[]'),
        })
      }
    } catch (error) {
      console.error('Error fetching service:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = serviceId
        ? `/api/admin/services/${serviceId}`
        : '/api/admin/services'

      const response = await fetch(url, {
        method: serviceId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/admin/dashboard/services')
        router.refresh()
      }
    } catch (error) {
      console.error('Error saving service:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFeatureChange = (
    lang: 'Az' | 'En' | 'Ru',
    index: number,
    value: string
  ) => {
    const key = `features${lang}` as keyof typeof formData
    const newFeatures = [...(formData[key] as string[])]
    newFeatures[index] = value
    setFormData({ ...formData, [key]: newFeatures })
  }

  const addFeature = (lang: 'Az' | 'En' | 'Ru') => {
    const key = `features${lang}` as keyof typeof formData
    setFormData({
      ...formData,
      [key]: [...(formData[key] as string[]), ''],
    })
  }

  const removeFeature = (lang: 'Az' | 'En' | 'Ru', index: number) => {
    const key = `features${lang}` as keyof typeof formData
    const newFeatures = (formData[key] as string[]).filter((_, i) => i !== index)
    setFormData({ ...formData, [key]: newFeatures })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Slug *</Label>
              <Input
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
                placeholder="chatbot"
              />
            </div>
            <div className="space-y-2">
              <Label>Icon Name *</Label>
              <Input
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                required
                placeholder="Bot"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Price Range</Label>
              <Input
                value={formData.priceRange}
                onChange={(e) =>
                  setFormData({ ...formData, priceRange: e.target.value })
                }
                placeholder="$1000-$5000"
              />
            </div>
            <div className="space-y-2">
              <Label>Order</Label>
              <Input
                type="number"
                value={formData.order}
                onChange={(e) =>
                  setFormData({ ...formData, order: Number(e.target.value) })
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Azerbaijani (AZ)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Title *</Label>
            <Input
              value={formData.titleAz}
              onChange={(e) => setFormData({ ...formData, titleAz: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Description *</Label>
            <Textarea
              value={formData.descAz}
              onChange={(e) => setFormData({ ...formData, descAz: e.target.value })}
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Delivery Time</Label>
            <Input
              value={formData.deliveryAz}
              onChange={(e) =>
                setFormData({ ...formData, deliveryAz: e.target.value })
              }
              placeholder="3-6 həftə"
            />
          </div>
          <div className="space-y-2">
            <Label>Features</Label>
            {formData.featuresAz.map((feature, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={feature}
                  onChange={(e) => handleFeatureChange('Az', index, e.target.value)}
                  placeholder="Xüsusiyyət"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeFeature('Az', index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={() => addFeature('Az')}>
              Add Feature
            </Button>
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
            <Label>Delivery Time</Label>
            <Input
              value={formData.deliveryEn}
              onChange={(e) =>
                setFormData({ ...formData, deliveryEn: e.target.value })
              }
              placeholder="3-6 weeks"
            />
          </div>
          <div className="space-y-2">
            <Label>Features</Label>
            {formData.featuresEn.map((feature, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={feature}
                  onChange={(e) => handleFeatureChange('En', index, e.target.value)}
                  placeholder="Feature"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeFeature('En', index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={() => addFeature('En')}>
              Add Feature
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Russian (RU)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Title *</Label>
            <Input
              value={formData.titleRu}
              onChange={(e) => setFormData({ ...formData, titleRu: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Description *</Label>
            <Textarea
              value={formData.descRu}
              onChange={(e) => setFormData({ ...formData, descRu: e.target.value })}
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Delivery Time</Label>
            <Input
              value={formData.deliveryRu}
              onChange={(e) =>
                setFormData({ ...formData, deliveryRu: e.target.value })
              }
              placeholder="3-6 недель"
            />
          </div>
          <div className="space-y-2">
            <Label>Features</Label>
            {formData.featuresRu.map((feature, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={feature}
                  onChange={(e) => handleFeatureChange('Ru', index, e.target.value)}
                  placeholder="Функция"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeFeature('Ru', index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={() => addFeature('Ru')}>
              Add Feature
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : serviceId ? 'Update Service' : 'Create Service'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
