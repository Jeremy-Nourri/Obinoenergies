import Image from 'next/image'
import { Link } from 'react-scroll';
import { getPrestations } from '@/data/dataServices';


export default function Services() {

  const services = getPrestations();
      
  return (

    <>

      <h2 className="text-justify mb-2 text-sm md:text-lg">
				Nous vous proposons des prestations de qualité pour l'installation, le dépannage et l'entretien de votre système de chauffage et de climatisation.
      </h2>
      <p className="text-justify mb-2 text-sm md:text-lg">
          Déplacements possible dans tous les Hauts de France et facturée selon le kilométrage. 
      </p>
      <Link className="block max-w-fit mx-auto mb-2 text-sm text-center text-blue font-bold hover:text-opacity-80 cursor-pointer md:text-lg" to="Contact" spy={true} smooth={true} duration={1000}>
        Contactez-nous pour un devis gratuit.
      </Link>

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

    </>
		
  );
}

