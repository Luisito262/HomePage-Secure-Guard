import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Features from '@/components/Features'
import Showcase from '@/components/Showcase'
import Monitoring from '@/components/Monitoring'
import Integrations from '@/components/Integrations'
import CtaFinal from '@/components/CtaFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Showcase />
        <Monitoring />
        <Integrations />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
