import { BlogPostForm } from '@/components/admin/BlogPostForm'

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-stone-light">Bloq Yazısını Redaktə Et</h1>
        <p className="text-stone-DEFAULT mt-1">Məqalə məlumatlarını yeniləyin</p>
      </div>

      <BlogPostForm postId={params.id} />
    </div>
  )
}
