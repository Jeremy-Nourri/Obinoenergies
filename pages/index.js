import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Offers from '@/components/sections/Offers'
import Guide from '@/components/sections/Guide'
import Contact from '@/components/sections/Contact/Contact'
import LayoutSection from '@/components/layout-section/LayoutSection'
import ArrowToScroll from '@/components/ui/ArrowToScroll'


export default function Page() {
  return (
    <>
      <Head>
        <title>Obino Energies - Chauffagiste à Béthune, Lens, Lille...</title>
      </Head>
      <Layout>
        <ArrowToScroll />
        <Hero />
        <LayoutSection categoryName="Nos prestations">
          <Services />
        </LayoutSection>
        <LayoutSection categoryName="Nos offres entretien">
          <Offers />
        </LayoutSection>
        <LayoutSection categoryName="Guide">
          <Guide />
        </LayoutSection>
        <LayoutSection categoryName="Contact">
          <Contact />
        </LayoutSection>  
      </Layout>
    </>    
  )
}
