import { Element, Link } from 'react-scroll'
import Image from 'next/image'
import banner from '../../public/images/banner-color.webp'
import imageIntro from '../../public/images/image-intro2.webp'

export default function Hero() {
  return (
    <Element name="Accueil">
      <div className="relative mb-12">
        <Image
          src={imageIntro}
          alt="Obino Energies"
          priority={true}
          sizes="100vw"
          className="w-full h-auto opacity-70 bg-gray-light" />
        <Image
          src={banner}
          alt="Obino Energies"
          priority={true}
          sizes='100vw'
          className="w-full h-auto lg:absolute lg:-bottom-3" />

        <div className="w-full absolute top-[15%] py-2 px-4 bg-slate-200 bg-opacity-70 text-center text-black md:top-[25%] md:px-12 md:py-6 lg:top-[20%]" >
          <h1 className="mt-1 mx-auto font-medium text-sm sm:text-base md:text-xl lg:text-2xl lg:w-2/3 ">
            Obino Energies est à votre service dans les Hauts-de-France, pour répondre à tous vos besoins de chauffage et de climatisation.
          </h1>
          <p className='mt-2 text-lg text-center font-bold italic text-black md:text-4xl md:mt-8'>
            Votre confort, notre priorité !
          </p>
          <Link className="block w-36 mx-auto mt-3 text-sm text-white font-semibold text-center bg-blue hover:bg-opacity-90 rounded-2xl p-3 cursor-pointer md:p-4 md:text-xl md:w-44 md:mt-5"
            to="Contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
              Contactez-nous
          </Link>
        </div>
      </div>
    </Element>
      

  )
}