import Link from "next/link";

import Footer from "@/components/layout/Footer"


export default function Mentions() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <h1 className="text-xl font-bold text-center text-white bg-blue p-6 mb-6" >Mentions légales</h1>
      <div className="h-full px-6">
        <p>Obino énergies</p>
        <p>Jonathan Obino</p>
        <p>229 rue de Solférino</p>
        <p>59000 Lille</p>
        <p>07 81 63 62 56</p>
        <p>obinoenergies@gmail.com</p>
        <p>SIRET : 95086788700016</p>
        <p>SIREN : 950 867 887</p>
        <p>Code APE : 4322A</p>

      </div>
      <div className="h-full px-6">
        <h2 className="text-center font-bold mt-6 mb-4" >Crédits</h2>
        <p>
          Image de le la page d'accueil <a target="_blank" href="https://fr.freepik.com/auteur/diana-grytsku"> par diana.grytsku </a> sur Freepik
        </p>
        <p className="mt-4">
          Autres images d'illustration par <a target="_blank" href="https://www.atlantic.fr/"> Atlantic</a> et <a target="_blank" href="https://stock.adobe.com/fr/"> Adobe Stock</a>
        </p>
      </div>
      <Link 
        className="w-48 mx-auto text-lg text-white font-semibold text-center bg-orange rounded-2xl p-3 my-10"
        href="/"
      >
          Revenir à l'accueil
      </Link>
      <Footer/>
    </div>
  );
}

