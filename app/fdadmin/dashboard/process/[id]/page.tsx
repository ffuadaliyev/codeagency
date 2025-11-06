import { ProcessStepForm } from '@/components/admin/ProcessStepForm'

export default function EditProcessStepPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Proses Addımını Redaktə Et</h1>
        <p className="text-stone-DEFAULT mt-1">Addım məlumatlarını yeniləyin</p>
      </div>

      <ProcessStepForm stepId={params.id} />
    </div>
  )
}
