import Layout from '../components/Layout'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'

export default function Page() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Contact />
    </Layout>    
  )
}
