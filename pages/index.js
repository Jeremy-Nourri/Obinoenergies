import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import FinancialHelp from '@/components/sections/FinancialHelp'
import Guide from '@/components/sections/Guide'
import Contact from '@/components/sections/Contact'
import LayoutSection from '@/components/layout-section/LayoutSection'

export default function Page() {
  return (
    <>
      <Head>
        <title>Obino Energies</title>
      </Head>
      <Layout>
        <Hero />
        <LayoutSection categoryName="Nos prestations">
          <Services />
        </LayoutSection>
        <LayoutSection categoryName="Aides financières">
          <FinancialHelp />
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
