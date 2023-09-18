import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Offers() {
  return (    
    <>
      <p className="mx-auto text-left text-sm md:w-[75%] md:text-lg ">
        Obino énergies vous propose des offres pour l'entretien de votre systéme de chauffage, de climatisation et de production d'eau chaude.
      </p>
      <p className="mx-auto text-left my-2 text-sm font-bold md:w-[75%] md:text-lg">
        Un entretien régulier de vos appareils c'est :
      </p>
      <ul className='mx-auto text-left mb-1 text-sm md:w-[75%] md:text-lg'>
        <li className='flex items-center mb-1'>
          <AiOutlineCheckCircle className="inline-block mr-2 text-green-500 text-2xl md:text-3xl" />
            Une durée de vie prolongée
        </li>
        <li className='flex items-center mb-1'>
          <AiOutlineCheckCircle className="inline-block mr-2 text-green-500 text-2xl md:text-3xl" />
            Un meilleur rendement
        </li>
        <li className='flex items-center mb-1'>
          <AiOutlineCheckCircle className="inline-block mr-2 text-green-500 text-2xl md:text-3xl" />
            Moins de risque de panne 
        </li>
        <li className='flex items-center mb-1'>
          <AiOutlineCheckCircle className="inline-block mr-2 text-green-500 text-2xl md:text-3xl" />
            Plus de sécurité
        </li>
      </ul>

      <div className="mx-auto my-4 p-6 rounded-lg text-white bg-blue md:w-5/6 md:my-12 md:p-8">
        <p className='mb-4 py-1 rounded bg-white text-blue text-lg text-center font-bold md:py-2 md:text-2xl'>
          Chaudière
        </p>

        <div className="flex justify-between">

          <p className='w-[70%] text-sm md:w-[75%] md:text-lg'>
          L'entretien annuel est obligatoire et doit être réalisé par un professionnel qualifié. 
          </p>

          <div className='w-16 h-16 flex items-center justify-center border-2 rounded-full bg-orange md:w-24 md:h-24 md:border-4'>
            <p className='text-center font-bold text-xl md:text-3xl'>
            90 €
            </p>
          </div>

        </div>

      </div>

      <div className="relative mx-auto my-4 p-6 rounded-lg text-white bg-blue-light md:w-5/6 md:my-12 md:p-8">

        <p className='mb-4 py-1 rounded bg-white text-blue text-lg text-center font-bold md:py-2 md:text-2xl'>
          Pompe à chaleur
        </p>

        <div className="flex justify-between">

          <p className='w-[70%] mb-2 text-sm md:w-[75%] md:text-lg'>
          L'entretien doit être réalisé tous les deux ans par un professionnel qualifié (puissance entre 4 et 70 kW). 
          </p>
          <div className='w-16 h-16 flex items-center justify-center border-2 rounded-full bg-orange md:w-24 md:h-24 md:border-4'>
            <p className='text-center font-bold text-xl md:text-3xl'>
            129 €
            </p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          + 25€ pour chaque unité supplémentaire
        </p>
      </div>

      <div className="relative mx-auto my-4 p-6 rounded-lg text-white bg-blue md:w-5/6 md:my-12 md:p-8">

        <p className='mb-4 py-1 rounded bg-white text-blue text-lg text-center font-bold md:py-2  md:text-2xl'>
          Climatiseur
        </p>

        <div className="flex justify-between">

          <p className='w-[70%] mb-2 text-sm text-justify md:w-[75%] md:text-lg'>
            S'il contient plus de 2 kg de fluide frigorigène et/ou que sa puissance est supérieure à 12 kWh l'entretien annuel est obligatoire.
          </p>
          <div className='w-16 h-16 flex items-center justify-center border-2 rounded-full bg-orange md:w-24 md:h-24 md:border-4'>
            <p className='text-center font-bold text-xl md:text-3xl'>
              129 €
            </p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          + 25€ pour chaque unité supplémentaire
        </p>
      </div>

      <div className="relative mx-auto my-4 p-6 rounded-lg text-white bg-blue-light md:w-5/6 md:my-12 md:p-8">

        <p className='mb-4 py-1 rounded bg-white text-blue text-lg text-center font-bold md:py-2  md:text-2xl'>
          Chauffe eau thermodynamique
        </p>

        <div className="flex justify-between">

          <p className='w-[70%] mb-2 text-sm text-justify md:w-[75%] md:text-lg'>
            Un détartrage tous les deux ans de la cuve couplé à un contrôle de routine de la pompe à chaleur intégrée est conseillé.
          </p>
          <div className='w-16 h-16 flex items-center justify-center border-2 rounded-full bg-orange md:w-24 md:h-24 md:border-4'>
            <p className='text-center font-bold text-xl md:text-3xl'>
              99 €
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto my-4 p-6 rounded-lg text-white bg-blue md:w-5/6 md:my-12 md:p-8">

        <p className='mb-4 py-1 rounded bg-white text-blue text-lg text-center font-bold md:py-2 md:text-2xl'>
          Chauffe eau électrique
        </p>

        <div className="flex justify-between">

          <p className='w-[70%] mb-2 text-sm text-justify md:w-[75%] md:text-lg'>
            Un détartrage tous les deux ans de la cuve couplé à un contrôle du groupe de sécurité est conseillé.
          </p>
          <div className='w-16 h-16 flex items-center justify-center border-2 rounded-full bg-orange md:w-24 md:h-24 md:border-4'>
            <p className='text-center font-bold text-xl md:text-3xl'>
              99 €
            </p>
          </div>
        </div>
      </div>

    
    </>
  );    
}

    