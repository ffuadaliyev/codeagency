import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="font-serif text-9xl text-gold mb-4">404</h1>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-light mb-4">
            Səhifə tapılmadı
          </h2>
          <p className="text-lg text-stone-DEFAULT">
            Axtardığınız səhifə mövcud deyil və ya köçürülüb.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/" className="gap-2">
              <Home className="w-5 h-5" />
              Ana səhifə
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="javascript:history.back()" className="gap-2">
              <ArrowLeft className="w-5 h-5" />
              Geri qayıt
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
