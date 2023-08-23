import { Element } from 'react-scroll'
import Image from 'next/image'
import banner from '../../public/images/banner-color.webp'
import imageIntro from '../../public/images/image-intro2.webp'
import entretienChaudiere from '../../public/images/entretien-chaudiere.webp'

export default function Hero() {
  return (
    <Element name="Accueil">
      <div className="relative">
        {/* <p className="w-full text-center py-1 text-base font-bold italic absolute z-10 bg-slate-200 bg-opacity-70 text-black md:text-4xl md:py-4 lg:pt-[12rem]">
          Votre confort, notre priorité !
        </p> */}
        <Image
          src={imageIntro}
          alt="Obino Energies"
          priority
          sizes="100vw"
          className="w-full h-auto opacity-80 bg-gray-light" />
        <Image
          src={banner}
          alt="Obino Energies"
          sizes='100vw'
          className="w-full h-auto lg:absolute lg:-bottom-2" />

        <div className="w-full absolute top-[55%] py-2 px-4 bg-slate-200 bg-opacity-70 text-black sm:px-8 md:top md:px-12 md:py-6" >
          <h1 className="mt-1 font-semibold text-sm sm:text-lg md:text-2xl ">
            Obino Energies est à votre service pour répondre à tous vos besoins de chauffage et de climatisation.
          </h1>
          <p className='mt-2 text-lg text-center font-bold italic text-black sm:text-2xl md:text-4xl md:mt-8'>
            Votre confort, notre priorité !
          </p>
        </div>
      </div>
      <div className='relative mb-16 mt-12'>
        <Image
          src={entretienChaudiere}
          alt="Obino Energies"
          sizes='90vw'
          className="w-10/12 h-auto mx-auto" />

      </div>
    </Element>
      

  )
}