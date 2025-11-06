export default function SubmissionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Form Submissions</h1>
        <p className="text-stone-DEFAULT mt-1">
          View contact and quote form submissions
        </p>
      </div>
      <div className="text-stone-DEFAULT">
        <p>This section will allow you to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>View all form submissions</li>
          <li>Filter by type (contact/quote)</li>
          <li>Mark as read/unread</li>
          <li>View submission details</li>
        </ul>
      </div>
    </div>
  )
}
