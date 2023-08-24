import Image from 'next/image'
import { getPrestations } from '@/data/dataServices';
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Services() {

  const services = getPrestations();
      
  return (

    <>

      <h2 className="text-justify mb-6 md:mb-1 text-sm0 md:text-xl">
				Nous vous proposons des prestations de qualité pour l'installation, le dépannage et l'entretien de votre système de chauffage et de climatisation.
      </h2>
      <div className="w-3/4 mx-auto lg:flex lg:flex-wrap lg:justify-around lg:w-full lg:bg-white lg:py-8 lg:rounded-xl">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="shadow-lg my-5 mx-auto rounded-box relative lg:w-2/5"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={500}
              className="rounded-box opacity-80 w-full h-auto"
            />
            <h3 className="w-full bg-white text-blue font-bold text-center absolute bottom-0 z-10 rounded-b-lg py-1 md:py-4 md:text-2xl lg:py-2 lg:text-xl">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="relative mx-auto my-4 p-6 rounded-lg text-white bg-blue md:w-5/6 md:my-12 md:p-10">
        <h4 className='mb-4 p-1 rounded bg-white text-blue text-lg text-center font-bold md:text-3xl'>
          Entretien de votre chaudière
        </h4>
        <div className='absolute bottom-4 right-4 w-16 h-16 flex justify-center flex-wrap content-center mx-auto rounded-full border-2 text-center bg-orange md:w-36 md:h-36 md:border-4 md:bottom-8 md:right-8'>
          <p className='text-center font-bold text-2xl md:text-5xl'>
            90 €
          </p>
        </div>
        <p className='mb-2 text-sm md:text-xl'>
          L'entretien annuel est obligatoire et doit être réalisé par un professionnel qualifié. 
        </p>
        <p className='mb-1 text-sm md:text-xl font-bold'>
          Une chaudière bien entretenue c'est :
        </p>
        <ul className='mb-1 text-sm md:text-lg'>
          <li >
            <AiOutlineCheckCircle className="inline-block mr-2 text-2xl  text-green-500 md:text-4xl" />
            Une durée de vie prolongée
          </li>
          <li >
            <AiOutlineCheckCircle className="inline-block mr-2 text-2xl text-green-500 md:text-4xl" />
            Un meilleur rendement
          </li>
          <li >
            <AiOutlineCheckCircle className="inline-block mr-2 text-2xl text-green-500 md:text-4xl" />
            Moins de risque de panne
          </li>
          <li>
            <AiOutlineCheckCircle className="inline-block mr-2 text-2xl text-green-500 md:text-4xl" />
            Plus de sécurité
          </li>
        </ul>

      </div>

    </>
		
  );
}

