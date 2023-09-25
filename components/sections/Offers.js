import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from 'react-scroll';

export default function Offers() {
  return (    
    <>
      <p className="mx-auto mb-4 text-center text-sm md:w-[80%] md:text-lg lg:text-xl ">
        Obino énergies vous propose des offres pour l'entretien de votre systéme de chauffage, de climatisation et de production d'eau chaude.
      </p>
      <p className="mx-auto text-center mb-2 text-sm font-bold md:w-[75%] md:text-lg  lg:text-xl">
        Un entretien régulier de vos appareils c'est :
      </p>
      <ul className=' text-sm ml-4 md:text-lg md:ml-[33%] lg:text-xl'>
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

      <div className="mx-auto my-4 p-6 rounded-lg text-white bg-blue md:w-5/6 md:my-8 md:p-8">
        <p className='mb-4 py-1 rounded bg-white text-blue text-lg text-center font-bold md:py-2 md:text-2xl'>
          Chaudière
        </p>

        <div className="flex justify-between">

          <p className='w-[70%] text-sm md:w-[75%] md:text-lg'>
          L'entretien annuel est obligatoire et doit être réalisé par un professionnel qualifié. 
          </p>

          <div className='w-16 h-16 flex items-center justify-center border-2 rounded-full bg-orange md:w-24 md:h-24 md:border-4'>
            <p className='text-center font-bold text-xl md:text-3xl'>
            99 €
            </p>
          </div>

        </div>

      </div>

      <div className="relative mx-auto my-4 p-6 rounded-lg text-white bg-blue-light md:w-5/6 md:mb-8 md:p-8">

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

      <div className="relative mx-auto my-4 p-6 rounded-lg text-white bg-blue md:w-5/6 md:mb-8 md:p-8">

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

      <div className="relative mx-auto my-4 p-6 rounded-lg text-white bg-blue-light md:w-5/6 md:mb-8 md:p-8">

        <p className='mb-4 py-2 rounded bg-white text-blue text-[1rem] text-center font-bold md:py-2  md:text-2xl'>
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

      <div className="relative mx-auto my-4 p-6 rounded-lg text-white bg-blue md:w-5/6 md:mb-12 md:p-8">

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

      <p className="mb-2 text-center text-sm md:text-lg lg:text-xl">
          Prenez soin de vos appareils de chauffage, de climatisation et de production d'eau chaude.
      </p>    
      <p className="text-center text-sm md:text-lg lg:text-xl">
          Confiez-nous l'entretien de votre installation !
      </p>
      
      <Link className="block w-36 mx-auto mt-3 text-sm text-white font-semibold text-center bg-blue hover:bg-opacity-90 rounded-2xl p-3 cursor-pointer md:p-4 md:text-xl md:w-44 md:mt-5"
        to="Contact"
        spy={true}
        smooth={true}
        duration={1000}
      >
        Contactez-nous
      </Link>
    </>
  );    
}

    