import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { organizationSchema, websiteSchema } from '@/lib/schema'
import { LanguageProvider } from '@/lib/language-context'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://codeagency.az'),
  title: {
    default: 'Code Agency - AI və Avtomatlaşdırma Həlləri',
    template: '%s | Code Agency',
  },
  description:
    'AI və avtomatlaşdırma ilə biznesinizi daha sürətli böyüdün. Data yönümlü həllər, ölçülə bilən nəticələr və premium UI/UX.',
  keywords: [
    'AI həlləri',
    'avtomatlaşdırma',
    'veb inkişaf',
    'mobil tətbiqlər',
    'chatbot',
    'data science',
    'machine learning',
    'scraping',
    'Azərbaycan',
  ],
  authors: [{ name: 'Code Agency' }],
  creator: 'Code Agency',
  publisher: 'Code Agency',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'az_AZ',
    alternateLocale: 'en_US',
    url: 'https://codeagency.az',
    siteName: 'Code Agency',
    title: 'Code Agency - AI və Avtomatlaşdırma Həlləri',
    description:
      'AI və avtomatlaşdırma ilə biznesinizi daha sürətli böyüdün. Data yönümlü həllər, ölçülə bilən nəticələr və premium UI/UX.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Agency - AI və Avtomatlaşdırma Həlləri',
    description:
      'AI və avtomatlaşdırma ilə biznesinizi daha sürətli böyüdün. Data yönümlü həllər, ölçülə bilən nəticələr və premium UI/UX.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az" className={`${inter.variable} ${playfair.variable} smooth-scroll`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
