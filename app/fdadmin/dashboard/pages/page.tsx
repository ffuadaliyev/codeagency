'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type PageType = 'privacy' | 'terms'

interface PageContent {
  id: string
  page: string
  contentAz: string
  contentEn: string
  contentRu: string
}

export default function PagesPage() {
  const [currentPage, setCurrentPage] = useState<PageType>('privacy')
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    contentAz: '',
    contentEn: '',
    contentRu: '',
  })

  useEffect(() => {
    fetchPageContent(currentPage)
  }, [currentPage])

  const fetchPageContent = async (page: PageType) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/admin/pages/${page}`)
      if (response.ok) {
        const data: PageContent = await response.json()
        setFormData({
          contentAz: data.contentAz || '',
          contentEn: data.contentEn || '',
          contentRu: data.contentRu || '',
        })
      } else if (response.status === 404) {
        // Səhifə hələ yaradılmayıb, boş form
        setFormData({
          contentAz: '',
          contentEn: '',
          contentRu: '',
        })
      }
    } catch (error) {
      console.error('Error fetching page content:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await fetch(`/api/admin/pages/${currentPage}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Məzmun uğurla yeniləndi!')
      } else {
        alert('Xəta baş verdi!')
      }
    } catch (error) {
      console.error('Error saving page content:', error)
      alert('Xəta baş verdi!')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Səhifə Məzmunu</h1>
        <p className="text-stone-DEFAULT mt-1">
          Privacy Policy və Terms of Service səhifələrini idarə edin
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          variant={currentPage === 'privacy' ? 'default' : 'outline'}
          onClick={() => setCurrentPage('privacy')}
        >
          Privacy Policy
        </Button>
        <Button
          variant={currentPage === 'terms' ? 'default' : 'outline'}
          onClick={() => setCurrentPage('terms')}
        >
          Terms of Service
        </Button>
      </div>

      {loading ? (
        <div className="text-stone-DEFAULT">Yüklənir...</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Azərbaycanca (AZ)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label>Məzmun (HTML)</Label>
                <Textarea
                  value={formData.contentAz}
                  onChange={(e) =>
                    setFormData({ ...formData, contentAz: e.target.value })
                  }
                  rows={15}
                  className="font-mono text-sm"
                  placeholder="<h1>Başlıq</h1><p>Məzmun...</p>"
                />
                <p className="text-xs text-stone-DEFAULT">
                  HTML formatında məzmun daxil edin
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>English (EN)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label>Content (HTML)</Label>
                <Textarea
                  value={formData.contentEn}
                  onChange={(e) =>
                    setFormData({ ...formData, contentEn: e.target.value })
                  }
                  rows={15}
                  className="font-mono text-sm"
                  placeholder="<h1>Heading</h1><p>Content...</p>"
                />
                <p className="text-xs text-stone-DEFAULT">
                  Enter content in HTML format
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Русский (RU)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label>Содержание (HTML)</Label>
                <Textarea
                  value={formData.contentRu}
                  onChange={(e) =>
                    setFormData({ ...formData, contentRu: e.target.value })
                  }
                  rows={15}
                  className="font-mono text-sm"
                  placeholder="<h1>Заголовок</h1><p>Содержание...</p>"
                />
                <p className="text-xs text-stone-DEFAULT">
                  Введите содержание в формате HTML
                </p>
              </div>
            </CardContent>
          </Card>

          <Button type="submit" disabled={saving}>
            {saving ? 'Yadda saxlanılır...' : 'Yadda saxla'}
          </Button>
        </form>
      )}
    </div>
  )
}
