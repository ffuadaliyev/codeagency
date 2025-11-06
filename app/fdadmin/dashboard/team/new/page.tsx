import { TeamMemberForm } from '@/components/admin/TeamMemberForm'

export default function NewTeamMemberPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Yeni Komanda Üzvü</h1>
        <p className="text-stone-DEFAULT mt-1">Yeni komanda üzvü əlavə edin</p>
      </div>

      <TeamMemberForm />
    </div>
  )
}
