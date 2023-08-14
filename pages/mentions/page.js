import Link from "next/link";

import Footer from "@/components/layout/Footer"
import CategorieTittle from "@/components/ui/CategorieTitle";

export default function Mentions() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="h-full px-6">
        <CategorieTittle text="Mentions légales" />
        <p>Obino énergies</p>
        <p>Jonathan Obino</p>
        <p>229 rue de Solférino</p>
        <p>59000 Lille</p>
        <p>06 00 00 00 00</p>
        <p>obinoenergies@gmail.com</p>
        <p>SIRET : 95086788700016</p>
        <p>SIREN : 950 867 887</p>
        <p>Code APE : 4322A</p>

      </div>
      <Link 
        className="w-48 mx-auto text-lg text-white font-semibold text-center bg-orange rounded-2xl p-3"
        href="/"
      >
          Revenir à l'accueil
      </Link>
      <Footer/>
    </div>
  );
}

