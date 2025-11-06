import { ProjectForm } from '@/components/admin/ProjectForm'

export default function EditProjectPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Layihəni Redaktə Et</h1>
        <p className="text-stone-DEFAULT mt-1">Layihə məlumatlarını yeniləyin</p>
      </div>

      <ProjectForm projectId={params.id} />
    </div>
  )
}
