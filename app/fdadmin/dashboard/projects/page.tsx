export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Projects</h1>
        <p className="text-stone-DEFAULT mt-1">
          Project management interface coming soon
        </p>
      </div>
      <div className="text-stone-DEFAULT">
        <p>This section will allow you to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Add new projects with portfolio details</li>
          <li>Edit existing projects</li>
          <li>Manage project images and metrics</li>
          <li>Reorder projects</li>
          <li>Multilingual support (AZ/EN/RU)</li>
        </ul>
      </div>
    </div>
  )
}
