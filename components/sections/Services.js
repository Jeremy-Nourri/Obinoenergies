import Image from 'next/image'
import { getPrestations } from '@/data/dataServices';

export default function Services() {

  const services = getPrestations();

  return (
    <div id="Prestations" className="mt-14 px-6 ">
      <h2 className="text-xl text-center text-white font-bold bg-blue rounded-md mt-6 mb-2 py-4">
					Nos prestations
      </h2>
      <p className="text-justify px-2">
				Nous vous proposons des prestations de qualité pour l'installation, le dépannage et l'entretien de votre système de chauffage et de climatisation.
      </p>
      <div className="w-3/4 mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="relative shadow-lg my-5 rounded-box"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={500}
              className="rounded-box opacity-80"
            />
            <h2 className="w-full bg-white text-blue font-bold text-center absolute bottom-0 z-10 rounded-b-lg py-1">
              {service.title}
            </h2>
          </div>
        ))}
      </div>

    </div>
		
  );
}

