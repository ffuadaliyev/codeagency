export default function BlogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Blog Posts</h1>
        <p className="text-stone-DEFAULT mt-1">
          Manage blog articles and publications
        </p>
      </div>
      <div className="text-stone-DEFAULT">
        <p>This section will allow you to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Create and edit blog posts</li>
          <li>Rich text editor for content</li>
          <li>Manage featured images</li>
          <li>Publish/unpublish posts</li>
          <li>Multilingual support (AZ/EN/RU)</li>
        </ul>
      </div>
    </div>
  )
}
