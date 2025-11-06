import { ValueForm } from '@/components/admin/ValueForm'

export default function EditValuePage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Dəyəri Redaktə Et</h1>
        <p className="text-stone-DEFAULT mt-1">Şirkət dəyərini yeniləyin</p>
      </div>

      <ValueForm valueId={params.id} />
    </div>
  )
}
