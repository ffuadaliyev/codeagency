'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Briefcase,
  FolderKanban,
  GitBranch,
  Users,
  FileText,
  HelpCircle,
  FileCode,
  Mail,
  ShieldCheck,
  UserCircle,
  LogOut
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/fdadmin/dashboard' },
  { icon: Briefcase, label: 'Services', href: '/fdadmin/dashboard/services' },
  { icon: FolderKanban, label: 'Projects', href: '/fdadmin/dashboard/projects' },
  { icon: GitBranch, label: 'Process Steps', href: '/fdadmin/dashboard/process' },
  { icon: Users, label: 'Team', href: '/fdadmin/dashboard/team' },
  { icon: FileText, label: 'Blog Posts', href: '/fdadmin/dashboard/blog' },
  { icon: HelpCircle, label: 'FAQs', href: '/fdadmin/dashboard/faqs' },
  { icon: ShieldCheck, label: 'Values', href: '/fdadmin/dashboard/values' },
  { icon: Mail, label: 'Submissions', href: '/fdadmin/dashboard/submissions' },
  { icon: FileCode, label: 'Page Content', href: '/fdadmin/dashboard/pages' },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/fdadmin/login')
    router.refresh()
  }

  return (
    <aside className="w-64 bg-carbon-light border-r border-carbon-border min-h-[calc(100vh-73px)] flex flex-col">
      <nav className="p-4 space-y-1 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-gold text-carbon'
                  : 'text-stone-DEFAULT hover:bg-carbon hover:text-stone-light'
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 space-y-1 border-t border-carbon-border">
        <Link
          href="/fdadmin/dashboard/profile"
          className={cn(
            'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
            pathname === '/fdadmin/dashboard/profile'
              ? 'bg-gold text-carbon'
              : 'text-stone-DEFAULT hover:bg-carbon hover:text-stone-light'
          )}
        >
          <UserCircle className="w-5 h-5" />
          Profile
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-stone-DEFAULT hover:bg-carbon hover:text-stone-light"
        >
          <LogOut className="w-5 h-5" />
          Çıxış
        </button>
      </div>
    </aside>
  )
}
