'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface FAQ {
  id: string
  questionAz: string
  questionEn: string
  questionRu: string
  order: number
}

export default function FAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFAQs()
  }, [])

  const fetchFAQs = async () => {
    try {
      const response = await fetch('/api/admin/faqs')
      if (response.ok) {
        const data = await response.json()
        setFaqs(data)
      }
    } catch (error) {
      console.error('Error fetching FAQs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Bu FAQ-ı silmək istədiyinizə əminsiniz?')) return

    try {
      const response = await fetch(`/api/admin/faqs/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchFAQs()
      }
    } catch (error) {
      console.error('Error deleting FAQ:', error)
    }
  }

  if (loading) {
    return <div className="text-stone-DEFAULT">Yüklənir...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-stone-light">FAQs</h1>
          <p className="text-stone-DEFAULT mt-1">
            Tez-tez verilən sualları idarə edin
          </p>
        </div>
        <Link href="/fdadmin/dashboard/faqs/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Yeni FAQ
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {faqs.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-stone-DEFAULT">Hələ heç bir FAQ yoxdur. İlkini yaradın!</p>
          </Card>
        ) : (
          faqs.map((faq) => (
            <Card key={faq.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-stone-light text-lg mb-2">
                    {faq.questionEn}
                  </h3>
                  <div className="flex gap-4 text-sm text-stone-DEFAULT">
                    <span>AZ: {faq.questionAz.substring(0, 50)}...</span>
                    <span>RU: {faq.questionRu.substring(0, 50)}...</span>
                  </div>
                  <div className="mt-2 text-xs text-stone-DEFAULT">
                    Sıra: {faq.order}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/fdadmin/dashboard/faqs/${faq.id}`}>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Düzəlt
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(faq.id)}
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
