'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, Phone, Building2, Calendar, Filter } from 'lucide-react'

interface Submission {
  id: string
  type: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  isRead: boolean
  createdAt: string
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'quote' | 'contact'>('all')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions')
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data)
      }
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleRead = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isRead: !currentStatus }),
      })

      if (response.ok) {
        fetchSubmissions()
      }
    } catch (error) {
      console.error('Error updating submission:', error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('az-AZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const filteredSubmissions = submissions.filter((sub) => {
    if (filter === 'all') return true
    return sub.type === filter
  })

  const unreadCount = submissions.filter((s) => !s.isRead).length

  if (loading) {
    return <div className="text-stone-DEFAULT">Yüklənir...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-stone-light">Müraciətlər</h1>
          <p className="text-stone-DEFAULT mt-1">
            Forma vasitəsilə göndərilən müraciətləri idarə edin
            {unreadCount > 0 && (
              <span className="ml-2 text-gold font-semibold">
                ({unreadCount} oxunmamış)
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
          className="gap-2"
        >
          <Filter className="w-4 h-4" />
          Hamısı ({submissions.length})
        </Button>
        <Button
          variant={filter === 'quote' ? 'default' : 'outline'}
          onClick={() => setFilter('quote')}
        >
          Qiymət Təklifi ({submissions.filter((s) => s.type === 'quote').length})
        </Button>
        <Button
          variant={filter === 'contact' ? 'default' : 'outline'}
          onClick={() => setFilter('contact')}
        >
          Əlaqə ({submissions.filter((s) => s.type === 'contact').length})
        </Button>
      </div>

      <div className="grid gap-4">
        {filteredSubmissions.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-stone-DEFAULT">
              {filter === 'all'
                ? 'Hələ heç bir müraciət yoxdur.'
                : `Heç bir ${filter === 'quote' ? 'qiymət təklifi' : 'əlaqə'} müraciəti yoxdur.`}
            </p>
          </Card>
        ) : (
          filteredSubmissions.map((submission) => (
            <Card
              key={submission.id}
              className={`p-6 ${!submission.isRead ? 'border-l-4 border-l-gold' : ''}`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-stone-light text-lg">
                        {submission.name}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded ${
                          submission.type === 'quote'
                            ? 'bg-gold/20 text-gold'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {submission.type === 'quote' ? 'Qiymət Təklifi' : 'Əlaqə'}
                      </span>
                      {!submission.isRead && (
                        <span className="px-2 py-1 text-xs rounded bg-gold/30 text-gold">
                          Oxunmadı
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-stone-DEFAULT mb-3">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${submission.email}`} className="hover:text-gold">
                          {submission.email}
                        </a>
                      </div>
                      {submission.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${submission.phone}`} className="hover:text-gold">
                            {submission.phone}
                          </a>
                        </div>
                      )}
                      {submission.company && (
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{submission.company}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(submission.createdAt)}</span>
                      </div>
                    </div>

                    <div className="bg-carbon-dark/50 p-4 rounded-lg">
                      <p className="text-stone-DEFAULT whitespace-pre-wrap">
                        {submission.message}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleRead(submission.id, submission.isRead)}
                  >
                    {submission.isRead ? 'Oxunmadı olaraq işarələ' : 'Oxundu olaraq işarələ'}
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
