import Link from "next/link";

export default function FinancialHelp() {
  return (
    <>
      <p className="text-lg text-center font-bold mb-4 md:text-2xl">
        Coup de pouce "Chauffage"
      </p>
      <p className="text-justify md:text-xl">
        Le ministère de la transition écologique et solidaire a fait le choix de massifier ce dispositif et d’aider désormais tous les particuliers à sortir des énergies fossiles et à diminuer significativement leurs factures de chauffage.
      </p>
      <p className="my-2 font-bold md:text-xl">
        Qui peut bénéficier de l'offre « Coup de pouce » ?
      </p>
      <p className="text-justify md:text-xl">
        Tous les ménages peuvent bénéficier de cette offre. Les montants de primes attribués seront cependant différenciés en fonction de leurs niveaux de ressources. Les ménages les plus modestes bénéficieront de primes plus importantes.
      </p>

      <p className="font-bold cursor-pointer mt-6 text-center text-orange hover:text-blue md:text-xl">
        <Link href="https://www.ecologie.gouv.fr/coup-pouce-chauffage" target="_blank">
          Voir le montant des primes
        </Link>
      </p>

    </>
  );
}

