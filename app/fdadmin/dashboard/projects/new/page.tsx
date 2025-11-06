import { ProjectForm } from '@/components/admin/ProjectForm'

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Yeni Layihə</h1>
        <p className="text-stone-DEFAULT mt-1">Yeni portfolio layihəsi əlavə edin</p>
      </div>

      <ProjectForm />
    </div>
  )
}
