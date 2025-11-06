import { ServiceForm } from '@/components/admin/ServiceForm'

export default function NewServicePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Create New Service</h1>
        <p className="text-stone-DEFAULT mt-1">
          Add a new service to your website
        </p>
      </div>

      <ServiceForm />
    </div>
  )
}
