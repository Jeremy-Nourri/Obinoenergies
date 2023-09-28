import Image from 'next/image'
import { Link } from 'react-scroll';
import { getPrestations } from '@/data/dataServices';


export default function Services() {

  const services = getPrestations();
      
  return (

    <>
      <p className="text-justify mb-2 text-sm md:text-lg md:text-center lg:text-xl">
				Nous vous proposons des prestations de qualité pour répondre à vos besoins :
      </p>
      <ul className='flex flex-col items-center text-sm md:text-lg lg:text-xl'>
        <li className="mb-2 ">
          <span>🔸 </span><strong>Installation</strong><span> 🔸 </span>
        </li>
        <li className="mb-2">
          <span>🔸 </span><strong>Rénovation</strong><span> 🔸 </span>
        </li>
        <li className="mb-2">
          <span>🔸 </span><strong>Dépannage</strong><span> 🔸 </span>
        </li>
        <li className="mb-4">
          <span>🔸 </span><strong>Entretien</strong><span> 🔸 </span>
        </li>
      </ul>

      <p className="text-justify mb-2 text-sm md:text-lg lg:text-xl">
        Pour tous vos systèmes de chauffage, de climatisation et de production d'eau chaude sanitaire :
      </p>

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
              height={320}
              className="rounded-box opacity-80 w-full h-auto"
            />
            <h3 className="w-full bg-white text-blue font-bold text-center absolute bottom-0 z-10 rounded-b-lg py-1 md:py-4 md:text-2xl lg:py-2 lg:text-xl">
              {service.title}
            </h3>
          </div>
        ))}
        
      </div>

      <p className="text-center mt-6 mb-2 text-sm md:text-lg lg:text-xl">
        Nous nous déplaçons dans les Hauts-de-France !
      </p>
      <p className="text-center text-sm md:text-lg lg:text-xl">
        N'hésitez pas à nous contacter pour obtenir un devis gratuit. 📝
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

