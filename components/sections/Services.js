import Image from 'next/image'

export default function Services() {

  const services = [
    {
      title: 'Chaudière',
      image: '/images/chaudiere.jpg',
    },
    {
      title: 'Pompe à chaleur',
      image: '/images/pompe-chaleur-small.jpg',
    },
    {
      title: 'Climatiseur',
      image: '/images/climatisation.jpg',
    },
    {
      title: 'Chauffe-eau',
      image: '/images/chauffe-eau-small.jpg',
    },
  ]

  return (
    <div id="Services" className="px-6 ">
        <h2 className="text-xl text-center text-white font-bold bg-orange rounded-md mt-6 mb-2 py-2">
          Nos prestations
        </h2>
        <p className="text-sm text-justify px-2">
          Nous vous proposons des prestations de qualité pour l'installation, le dépannage et l'entretien de votre système de chauffage et de climatisation.
        </p>
        <div className="w-3/4 mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative shadow-xl my-5 rounded-box"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                className="rounded-box opacity-80"
              />
              <h2 className="w-full bg-white text-blue-light font-bold text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 z-10 rounded-b-lg py-1">
                {service.title}
              </h2>
            </div>
          ))}
        </div>

    </div>
    
  );
}

