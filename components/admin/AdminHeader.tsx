'use client'

import { AdminUser } from '@/lib/auth'

interface AdminHeaderProps {
  user: AdminUser
}

export function AdminHeader({ user }: AdminHeaderProps) {
  return (
    <header className="bg-carbon-light border-b border-carbon-border">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-serif text-stone-light whitespace-nowrap">
          Code<span className="text-gold">Agency</span>
        </h1>

        <div className="text-sm text-stone-DEFAULT">
          Admin Panel
        </div>
      </div>
    </header>
  )
}
