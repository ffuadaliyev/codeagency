import { ProcessStepForm } from '@/components/admin/ProcessStepForm'

export default function NewProcessStepPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Yeni Proses Addımı</h1>
        <p className="text-stone-DEFAULT mt-1">Yeni iş prosesi addımı əlavə edin</p>
      </div>

      <ProcessStepForm />
    </div>
  )
}
