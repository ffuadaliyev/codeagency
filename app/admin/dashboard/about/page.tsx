export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">About & Team</h1>
        <p className="text-stone-DEFAULT mt-1">
          Manage about page content and team members
        </p>
      </div>
      <div className="text-stone-DEFAULT">
        <p>This section will allow you to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Edit about page sections</li>
          <li>Manage team members</li>
          <li>Add team member photos</li>
          <li>Multilingual support (AZ/EN/RU)</li>
        </ul>
      </div>
    </div>
  )
}
