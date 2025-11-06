import { BlogPostForm } from '@/components/admin/BlogPostForm'

export default function NewBlogPostPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Yeni Bloq Yazısı</h1>
        <p className="text-stone-DEFAULT mt-1">Yeni məqalə əlavə edin</p>
      </div>

      <BlogPostForm />
    </div>
  )
}
