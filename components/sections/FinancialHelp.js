import Link from "next/link";
import CategorieTittle from "../ui/CategorieTitle";

export default function FinancialHelp() {
  return (
    <div id="Aides" className="container mx-auto mt-20 px-6 text-justify">
      <CategorieTittle text="Aides financières" />
      <h4 className="text-lg text-center font-bold my-4">
        Coup de pouce "Chauffage"
      </h4>
      <p>
        Le ministère de la transition écologique et solidaire a fait le choix de massifier ce dispositif et d’aider désormais tous les particuliers à sortir des énergies fossiles et à diminuer significativement leurs factures de chauffage.
      </p>
      <p className="mt-3 mb-2 font-bold">
        Qui peut bénéficier de l'offre « Coup de pouce » ?
      </p>
      <p>
        Tous les ménages peuvent bénéficier de cette offre. Les montants de primes attribués seront cependant différenciés en fonction de leurs niveaux de ressources. Les ménages les plus modestes bénéficieront de primes plus importantes.
      </p>
      <Link href="https://www.ecologie.gouv.fr/coup-pouce-chauffage" target="_blank">
        <p className="text-orange font-bold cursor-pointer mt-2 text-center">
          Voir le montant des primes
        </p>
      </Link>

    </div>
  );
}

