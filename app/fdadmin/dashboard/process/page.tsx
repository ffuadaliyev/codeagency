'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface ProcessStep {
  id: string
  icon: string
  titleAz: string
  titleEn: string
  titleRu: string
  order: number
}

export default function ProcessPage() {
  const [steps, setSteps] = useState<ProcessStep[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSteps()
  }, [])

  const fetchSteps = async () => {
    try {
      const response = await fetch('/api/admin/process-steps')
      if (response.ok) {
        const data = await response.json()
        setSteps(data)
      }
    } catch (error) {
      console.error('Error fetching process steps:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Bu addımı silmək istədiyinizə əminsiniz?')) return

    try {
      const response = await fetch(`/api/admin/process-steps/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchSteps()
      }
    } catch (error) {
      console.error('Error deleting process step:', error)
    }
  }

  if (loading) {
    return <div className="text-stone-DEFAULT">Yüklənir...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-stone-light">Proses Addımları</h1>
          <p className="text-stone-DEFAULT mt-1">
            İş prosesi addımlarını idarə edin
          </p>
        </div>
        <Link href="/fdadmin/dashboard/process/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Yeni Addım
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {steps.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-stone-DEFAULT">Hələ heç bir addım yoxdur. İlkini yaradın!</p>
          </Card>
        ) : (
          steps.map((step) => (
            <Card key={step.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gold text-sm font-mono bg-gold/20 px-2 py-1 rounded">
                      {step.icon}
                    </span>
                    <h3 className="font-semibold text-stone-light text-lg">
                      {step.titleEn}
                    </h3>
                  </div>
                  <div className="flex gap-4 text-sm text-stone-DEFAULT">
                    <span>AZ: {step.titleAz}</span>
                    <span>RU: {step.titleRu}</span>
                  </div>
                  <div className="mt-2 text-xs text-stone-DEFAULT">
                    Sıra: {step.order}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/fdadmin/dashboard/process/${step.id}`}>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Düzəlt
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(step.id)}
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
