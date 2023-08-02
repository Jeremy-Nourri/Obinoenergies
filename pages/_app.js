import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Obino Energies est une entreprise spécialisée dans l'installation, la réparation et l'entretien de systèmes de chauffage et de climatisation." />
        <meta name="keywords" content="Obino Energies, chauffagiste, chauffage, chaudière, pompe à chaleur, climatisation, dépannage, installation, réparation, entretien, énergie" />
        <meta name="author" content="Obino Energies" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Component {...pageProps} />
    </>
  )
  
}
