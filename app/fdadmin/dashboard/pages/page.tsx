export default function PagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Page Content</h1>
        <p className="text-stone-DEFAULT mt-1">
          Edit Privacy Policy and Terms of Service content
        </p>
      </div>
      <div className="text-stone-DEFAULT">
        <p>This section will allow you to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Edit Privacy Policy content</li>
          <li>Edit Terms of Service content</li>
          <li>Rich text editor for formatting</li>
          <li>Multilingual support (AZ/EN/RU)</li>
        </ul>
      </div>
    </div>
  )
}
