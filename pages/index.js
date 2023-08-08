import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import FinancialHelp from '@/components/sections/FinancialHelp'
import Guide from '@/components/sections/Guide'
import Contact from '@/components/sections/Contact'

export default function Page() {
  return (
    <>
      <Head>
        <title>Obino Energies</title>
      </Head>
      <Layout>
        <Hero />
        <Services />
        <FinancialHelp />
        <Guide />
        <Contact />
      </Layout>
    </>    
  )
}
