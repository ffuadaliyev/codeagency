export default function ValuesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Company Values</h1>
        <p className="text-stone-DEFAULT mt-1">
          Manage core company values
        </p>
      </div>
      <div className="text-stone-DEFAULT">
        <p>This section will allow you to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Add/edit company values</li>
          <li>Manage value icons and descriptions</li>
          <li>Reorder values</li>
          <li>Multilingual support (AZ/EN/RU)</li>
        </ul>
      </div>
    </div>
  )
}
