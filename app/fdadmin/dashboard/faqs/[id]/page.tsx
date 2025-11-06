import { FAQForm } from '@/components/admin/FAQForm'

export default function EditFAQPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">FAQ-ı Redaktə Et</h1>
        <p className="text-stone-DEFAULT mt-1">Sual-cavabı yeniləyin</p>
      </div>

      <FAQForm faqId={params.id} />
    </div>
  )
}
