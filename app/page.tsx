import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Values } from '@/components/sections/Values'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Values />
      <ProcessSection />
      <FAQ />
      <CTA />
    </>
  )
}
