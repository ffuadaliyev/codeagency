import { ValueForm } from '@/components/admin/ValueForm'

export default function NewValuePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Yeni Dəyər</h1>
        <p className="text-stone-DEFAULT mt-1">Yeni şirkət dəyəri əlavə edin</p>
      </div>

      <ValueForm />
    </div>
  )
}
