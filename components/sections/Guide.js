import Link from "next/link";
import Image from "next/image";

export default function Guide() {
  return (    
    <>
      <Image
        src="/images/changer-de-chauffage.jpg"
        alt="Première de couverture du guide changer de chauffage"
        width={500}
        height={500}
      />
      <p className="text-lg text-center font-bold mb-4">
        Changer son chauffage
      </p>
      <p className="text-justify mb-2">
        Ce guide réalisé par l'Agence de la transition écologique est consacré à l'amélioration et la rénovation du chauffage individuel et de la production d'eau chaude sanitaire. Ce guide propose un panorama complet des équipements de chauffage et d'eau chaude sanitaire et des énergies disponibles pour les maisons individuelles.
      </p>
      <p className="text-justify mb-2">
        <a href="https://www.ademe.fr/" target="_blank">
            Source ADEME
        </a>
      </p>

      <p className="text-orange font-bold text-center cursor-pointer mt-6 mb-32">
        <a href="https://librairie.ademe.fr/cadic/6566/guide-changer-son-chauffage-0423.pdf" target="_blank">Télécharger le guide</a>
      </p>
    
    </>
  );    
}

    