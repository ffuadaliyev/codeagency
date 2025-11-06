export default function FAQsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">FAQs</h1>
        <p className="text-stone-DEFAULT mt-1">
          Manage frequently asked questions
        </p>
      </div>
      <div className="text-stone-DEFAULT">
        <p>This section will allow you to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Add/edit FAQ items</li>
          <li>Reorder questions</li>
          <li>Multilingual support (AZ/EN/RU)</li>
        </ul>
      </div>
    </div>
  )
}
