'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface TeamMemberFormProps {
  memberId?: string
}

export function TeamMemberForm({ memberId }: TeamMemberFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    nameAz: '',
    nameEn: '',
    nameRu: '',
    roleAz: '',
    roleEn: '',
    roleRu: '',
    bioAz: '',
    bioEn: '',
    bioRu: '',
    image: '',
    order: 0,
  })

  useEffect(() => {
    if (memberId) {
      fetchMember()
    }
  }, [memberId])

  const fetchMember = async () => {
    try {
      const response = await fetch(`/api/admin/team/${memberId}`)
      if (response.ok) {
        const data = await response.json()
        setFormData(data)
      }
    } catch (error) {
      console.error('Error fetching team member:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = memberId ? `/api/admin/team/${memberId}` : '/api/admin/team'

      const response = await fetch(url, {
        method: memberId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/fdadmin/dashboard/team')
        router.refresh()
      }
    } catch (error) {
      console.error('Error saving team member:', error)
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
            <Label>Şəkil URL</Label>
            <Input
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/photo.jpg"
            />
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
            <Label>Ad *</Label>
            <Input
              value={formData.nameAz}
              onChange={(e) => setFormData({ ...formData, nameAz: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Vəzifə *</Label>
            <Input
              value={formData.roleAz}
              onChange={(e) => setFormData({ ...formData, roleAz: e.target.value })}
              placeholder="Baş İdarəçi"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Bioqrafiya</Label>
            <Textarea
              value={formData.bioAz}
              onChange={(e) => setFormData({ ...formData, bioAz: e.target.value })}
              rows={4}
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
            <Label>Name *</Label>
            <Input
              value={formData.nameEn}
              onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Role *</Label>
            <Input
              value={formData.roleEn}
              onChange={(e) => setFormData({ ...formData, roleEn: e.target.value })}
              placeholder="Chief Executive Officer"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Biography</Label>
            <Textarea
              value={formData.bioEn}
              onChange={(e) => setFormData({ ...formData, bioEn: e.target.value })}
              rows={4}
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
            <Label>Имя *</Label>
            <Input
              value={formData.nameRu}
              onChange={(e) => setFormData({ ...formData, nameRu: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Должность *</Label>
            <Input
              value={formData.roleRu}
              onChange={(e) => setFormData({ ...formData, roleRu: e.target.value })}
              placeholder="Генеральный директор"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Биография</Label>
            <Textarea
              value={formData.bioRu}
              onChange={(e) => setFormData({ ...formData, bioRu: e.target.value })}
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Yadda saxlanılır...' : memberId ? 'Yenilə' : 'Yarat'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Ləğv et
        </Button>
      </div>
    </form>
  )
}
