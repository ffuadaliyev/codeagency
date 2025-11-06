import { TeamMemberForm } from '@/components/admin/TeamMemberForm'

export default function EditTeamMemberPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Komanda Üzvünü Redaktə Et</h1>
        <p className="text-stone-DEFAULT mt-1">Üzv məlumatlarını yeniləyin</p>
      </div>

      <TeamMemberForm memberId={params.id} />
    </div>
  )
}
