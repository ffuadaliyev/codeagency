'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Briefcase,
  FolderKanban,
  GitBranch,
  Users,
  FileText,
  MessageSquare,
  HelpCircle,
  FileCode,
  Mail,
  ShieldCheck
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: Briefcase, label: 'Services', href: '/admin/dashboard/services' },
  { icon: FolderKanban, label: 'Projects', href: '/admin/dashboard/projects' },
  { icon: GitBranch, label: 'Process Steps', href: '/admin/dashboard/process' },
  { icon: Users, label: 'About / Team', href: '/admin/dashboard/about' },
  { icon: FileText, label: 'Blog Posts', href: '/admin/dashboard/blog' },
  { icon: HelpCircle, label: 'FAQs', href: '/admin/dashboard/faqs' },
  { icon: ShieldCheck, label: 'Values', href: '/admin/dashboard/values' },
  { icon: Mail, label: 'Submissions', href: '/admin/dashboard/submissions' },
  { icon: FileCode, label: 'Page Content', href: '/admin/dashboard/pages' },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-carbon-light border-r border-carbon-border min-h-[calc(100vh-73px)]">
      <nav className="p-4 space-y-1">
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
    </aside>
  )
}
