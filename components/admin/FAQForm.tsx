'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface FAQFormProps {
  faqId?: string
}

export function FAQForm({ faqId }: FAQFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    questionAz: '',
    questionEn: '',
    questionRu: '',
    answerAz: '',
    answerEn: '',
    answerRu: '',
    order: 0,
  })

  useEffect(() => {
    if (faqId) {
      fetchFAQ()
    }
  }, [faqId])

  const fetchFAQ = async () => {
    try {
      const response = await fetch(`/api/admin/faqs/${faqId}`)
      if (response.ok) {
        const data = await response.json()
        setFormData(data)
      }
    } catch (error) {
      console.error('Error fetching FAQ:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = faqId ? `/api/admin/faqs/${faqId}` : '/api/admin/faqs'

      const response = await fetch(url, {
        method: faqId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/fdadmin/dashboard/faqs')
        router.refresh()
      }
    } catch (error) {
      console.error('Error saving FAQ:', error)
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
            <Label>Sual *</Label>
            <Input
              value={formData.questionAz}
              onChange={(e) => setFormData({ ...formData, questionAz: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Cavab *</Label>
            <Textarea
              value={formData.answerAz}
              onChange={(e) => setFormData({ ...formData, answerAz: e.target.value })}
              rows={4}
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
            <Label>Question *</Label>
            <Input
              value={formData.questionEn}
              onChange={(e) => setFormData({ ...formData, questionEn: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Answer *</Label>
            <Textarea
              value={formData.answerEn}
              onChange={(e) => setFormData({ ...formData, answerEn: e.target.value })}
              rows={4}
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
            <Label>Вопрос *</Label>
            <Input
              value={formData.questionRu}
              onChange={(e) => setFormData({ ...formData, questionRu: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Ответ *</Label>
            <Textarea
              value={formData.answerRu}
              onChange={(e) => setFormData({ ...formData, answerRu: e.target.value })}
              rows={4}
              required
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Yadda saxlanılır...' : faqId ? 'Yenilə' : 'Yarat'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Ləğv et
        </Button>
      </div>
    </form>
  )
}
