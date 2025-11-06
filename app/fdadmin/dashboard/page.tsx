import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Briefcase,
  FolderKanban,
  FileText,
  Mail,
  GitBranch,
  HelpCircle,
} from 'lucide-react'

export default async function AdminDashboardPage() {
  // Get counts from database
  const [
    servicesCount,
    projectsCount,
    blogPostsCount,
    submissionsCount,
    processStepsCount,
    faqsCount,
  ] = await Promise.all([
    prisma.service.count(),
    prisma.project.count(),
    prisma.blogPost.count(),
    prisma.submission.count(),
    prisma.processStep.count(),
    prisma.fAQ.count(),
  ])

  const stats = [
    {
      title: 'Services',
      value: servicesCount,
      icon: Briefcase,
      href: '/admin/dashboard/services',
    },
    {
      title: 'Projects',
      value: projectsCount,
      icon: FolderKanban,
      href: '/admin/dashboard/projects',
    },
    {
      title: 'Blog Posts',
      value: blogPostsCount,
      icon: FileText,
      href: '/admin/dashboard/blog',
    },
    {
      title: 'Process Steps',
      value: processStepsCount,
      icon: GitBranch,
      href: '/admin/dashboard/process',
    },
    {
      title: 'FAQs',
      value: faqsCount,
      icon: HelpCircle,
      href: '/admin/dashboard/faqs',
    },
    {
      title: 'Submissions',
      value: submissionsCount,
      icon: Mail,
      href: '/admin/dashboard/submissions',
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-stone-light mb-2">
          Dashboard
        </h1>
        <p className="text-stone-DEFAULT">
          Welcome to the admin panel. Manage your website content here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="hover:border-gold/50 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-stone-DEFAULT">
                  {stat.title}
                </CardTitle>
                <Icon className="w-4 h-4 text-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-serif text-stone-light">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-stone-DEFAULT space-y-2">
            <p>• Add new content using the sidebar navigation</p>
            <p>• All changes support Azerbaijani, English, and Russian</p>
            <p>• Changes are immediately reflected on the live website</p>
            <p>• Use drag & drop to reorder items (where applicable)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
