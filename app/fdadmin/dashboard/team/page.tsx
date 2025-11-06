'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface TeamMember {
  id: string
  nameAz: string
  nameEn: string
  nameRu: string
  roleEn: string
  order: number
}

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      const response = await fetch('/api/admin/team')
      if (response.ok) {
        const data = await response.json()
        setMembers(data)
      }
    } catch (error) {
      console.error('Error fetching team members:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Bu komanda üzvünü silmək istədiyinizə əminsiniz?')) return

    try {
      const response = await fetch(`/api/admin/team/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchMembers()
      }
    } catch (error) {
      console.error('Error deleting team member:', error)
    }
  }

  if (loading) {
    return <div className="text-stone-DEFAULT">Yüklənir...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-stone-light">Komanda Üzvləri</h1>
          <p className="text-stone-DEFAULT mt-1">
            Komanda üzvlərini idarə edin
          </p>
        </div>
        <Link href="/fdadmin/dashboard/team/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Yeni Üzv
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {members.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-stone-DEFAULT">Hələ heç bir komanda üzvü yoxdur. İlkini əlavə edin!</p>
          </Card>
        ) : (
          members.map((member) => (
            <Card key={member.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-stone-light text-lg mb-2">
                    {member.nameEn}
                  </h3>
                  <div className="flex gap-4 text-sm text-stone-DEFAULT mb-2">
                    <span>AZ: {member.nameAz}</span>
                    <span>RU: {member.nameRu}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-stone-DEFAULT">
                    <span className="text-gold">{member.roleEn}</span>
                    <span>Sıra: {member.order}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/fdadmin/dashboard/team/${member.id}`}>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Düzəlt
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(member.id)}
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
