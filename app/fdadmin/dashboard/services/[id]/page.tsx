import { ServiceForm } from '@/components/admin/ServiceForm'

export default function EditServicePage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Edit Service</h1>
        <p className="text-stone-DEFAULT mt-1">
          Update service information
        </p>
      </div>

      <ServiceForm serviceId={params.id} />
    </div>
  )
}
