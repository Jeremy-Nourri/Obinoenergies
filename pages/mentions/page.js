import Link from "next/link";
import LayoutSection from "@/components/layout-section/LayoutSection";

import Footer from "@/components/layout/Footer"


export default function Mentions() {
  return (
    <>

      <LayoutSection categoryName="Mentions légales">
        <div>
          <p className="text-center">Obino énergies</p>
          <p className="text-center">Jonathan Obino</p>
          <p className="text-center">229 rue de Solférino</p>
          <p className="text-center">59000 Lille</p>
          <p className="text-center">07 81 63 62 56</p>
          <p className="text-center">obinoenergies@gmail.com</p>
          <p className="text-center">SIRET: 950 867 887</p>
          <p className="text-center">Code APE : 4322A</p>

        </div>

        <div>
          <h2 className="text-center font-bold mt-3" >Crédits</h2>
          <p className="text-center">
          Image de le la page d'accueil <a target="_blank" href="https://fr.freepik.com/auteur/diana-grytsku"> par diana.grytsku </a> sur Freepik
          </p>
          <p className="text-center">
          Autres images d'illustration par <a target="_blank" href="https://www.atlantic.fr/"> Atlantic</a> et <a target="_blank" href="https://stock.adobe.com/fr/"> Adobe Stock</a>
          </p>
        </div>

        <div>
          <h2 className="text-center font-bold mt-3" >Données personnelles</h2>
          <p>
              Les informations recueillies sur le formulaire de contact sont enregistrées dans un fichier informatisé par Obino Energies pour la gestion de notre clientèle. Elles sont conservées pendant la durée de la relation commerciale et ne sont pas communiquées à des tiers.
          </p>
          <p>
              Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en nous contactant par mail à obinojonathan25@gmail.com
          </p>
          <p>
              Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
          </p>
        </div>

        <div>
          <h2 className="text-center font-bold mt-3" >Hébergement</h2>
          <p  className="text-center">
                Ce site est hébergé par <a target="_blank" href="https://www.ovh.com/fr/">OVH</a>
          </p>
          <p className="text-center">
                2 rue Kellermann - 59100 Roubaix - France
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <Link 
            className="w-48 mx-auto text-lg text-white text-center font-semibold bg-orange rounded-2xl p-3"
            href="/"
          >
                Revenir à l'accueil
          </Link>
        </div>
      </LayoutSection>
      <Footer/>
    </>
  );
}

