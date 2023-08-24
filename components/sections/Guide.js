import Image from "next/image";
import coverGuide from '../../public/images/changer-chauffage.webp'

export default function Guide() {
  return (    
    <>
      <p className="text-lg text-center font-bold mb-4 md:text-3xl">
        Changer son chauffage
      </p>
      <div className="w-4/6 mx-auto ">
        <Image
          src={coverGuide}
          alt="Première de couverture du guide changer de chauffage"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
      <p className="text-justify mt-2 md:text-xl">
        Ce guide réalisé par l'Agence de la transition écologique est consacré à l'amélioration et la rénovation du chauffage individuel et de la production d'eau chaude sanitaire. Il propose un panorama complet des équipements de chauffage et d'eau chaude sanitaire et des énergies disponibles pour les maisons individuelles. <a href="https://www.ademe.fr/" target="_blank">
            Source ADEME
        </a>
      </p>
      <p className="font-bold text-center cursor-pointer mt-6 text-orange hover:text-blue md:text-xl">
        <a href="https://librairie.ademe.fr/cadic/6566/guide-changer-son-chauffage-0423.pdf" target="_blank">Télécharger le guide</a>
      </p>
    
    </>
  );    
}

    