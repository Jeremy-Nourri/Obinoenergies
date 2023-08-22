import Image from 'next/image'
import { getPrestations } from '@/data/dataServices';

export default function Services() {

  const services = getPrestations();
      
  return (

    <>

      <h3 className="text-justify mb-6 md:mb-10 md:text-xl">
				Nous vous proposons des prestations de qualité pour l'installation, le dépannage et l'entretien de votre système de chauffage et de climatisation.
      </h3>
      <div className="w-3/4 mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className=" shadow-lg my-5 rounded-box relative"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={500}
              className="rounded-box opacity-80"
            />
            <h2 className="w-full bg-white text-blue font-bold text-center absolute bottom-0 z-10 rounded-b-lg py-1 md:py-4 md:text-2xl">
              {service.title}
            </h2>
          </div>
        ))}
      </div>

    </>
		
  );
}

