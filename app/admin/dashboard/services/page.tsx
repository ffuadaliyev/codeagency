'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface Service {
  id: string
  slug: string
  icon: string
  titleAz: string
  titleEn: string
  titleRu: string
  order: number
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/admin/services')
      if (response.ok) {
        const data = await response.json()
        setServices(data)
      }
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return

    try {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchServices()
      }
    } catch (error) {
      console.error('Error deleting service:', error)
    }
  }

  if (loading) {
    return <div className="text-stone-DEFAULT">Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-stone-light">Services</h1>
          <p className="text-stone-DEFAULT mt-1">
            Manage your service offerings
          </p>
        </div>
        <Link href="/admin/dashboard/services/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Service
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {services.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-stone-DEFAULT">No services yet. Create your first one!</p>
          </Card>
        ) : (
          services.map((service) => (
            <Card key={service.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-stone-light text-lg">
                    {service.titleEn}
                  </h3>
                  <div className="flex gap-4 mt-2 text-sm text-stone-DEFAULT">
                    <span>AZ: {service.titleAz}</span>
                    <span>RU: {service.titleRu}</span>
                  </div>
                  <div className="flex gap-2 mt-2 text-xs text-stone-DEFAULT">
                    <span>Slug: {service.slug}</span>
                    <span>Order: {service.order}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/admin/dashboard/services/${service.id}`}>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(service.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
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
