'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface Value {
  id: string
  icon: string
  titleAz: string
  titleEn: string
  titleRu: string
  order: number
}

export default function ValuesPage() {
  const [values, setValues] = useState<Value[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchValues()
  }, [])

  const fetchValues = async () => {
    try {
      const response = await fetch('/api/admin/values')
      if (response.ok) {
        const data = await response.json()
        setValues(data)
      }
    } catch (error) {
      console.error('Error fetching values:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Bu dəyəri silmək istədiyinizə əminsiniz?')) return

    try {
      const response = await fetch(`/api/admin/values/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchValues()
      }
    } catch (error) {
      console.error('Error deleting value:', error)
    }
  }

  if (loading) {
    return <div className="text-stone-DEFAULT">Yüklənir...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-stone-light">Dəyərlər</h1>
          <p className="text-stone-DEFAULT mt-1">
            Şirkət dəyərlərini idarə edin
          </p>
        </div>
        <Link href="/fdadmin/dashboard/values/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Yeni Dəyər
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {values.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-stone-DEFAULT">Hələ heç bir dəyər yoxdur. İlkini yaradın!</p>
          </Card>
        ) : (
          values.map((value) => (
            <Card key={value.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-gold text-xl">{value.icon}</div>
                    <h3 className="font-semibold text-stone-light text-lg">
                      {value.titleEn}
                    </h3>
                  </div>
                  <div className="flex gap-4 text-sm text-stone-DEFAULT">
                    <span>AZ: {value.titleAz}</span>
                    <span>RU: {value.titleRu}</span>
                  </div>
                  <div className="mt-2 text-xs text-stone-DEFAULT">
                    Sıra: {value.order}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/fdadmin/dashboard/values/${value.id}`}>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Düzəlt
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(value.id)}
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
