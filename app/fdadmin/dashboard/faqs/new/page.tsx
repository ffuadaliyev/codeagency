import { FAQForm } from '@/components/admin/FAQForm'

export default function NewFAQPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Yeni FAQ</h1>
        <p className="text-stone-DEFAULT mt-1">Yeni sual-cavab əlavə edin</p>
      </div>

      <FAQForm />
    </div>
  )
}
