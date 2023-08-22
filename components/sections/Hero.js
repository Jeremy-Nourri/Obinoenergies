import React from 'react'
import Image from 'next/image'
import banner from '../../public/images/banner-color.webp'
import imageIntro from '../../public/images/image-intro.webp'
import entretienChaudiere from '../../public/images/entretien-chaudiere.webp'

export default function Hero() {
  return (
    <>
      <div className="relative">
        <p className="w-full text-center py-1 text-base font-bold italic opacity-75 absolute z-10 text-black bg-gray-light md:text-4xl md:py-4 lg:h-[90%] lg:pt-[12rem]">
          Votre confort, notre priorité !
        </p>
        <Image
          src={imageIntro}
          alt="Obino Energies"
          priority
          sizes="100vw"
          className="w-full h-auto opacity-80 lg:opacity-70" />
        <Image
          src={banner}
          alt="Obino Energies"
          sizes='100vw'
          className="w-full h-auto lg:absolute lg:bottom-0" />

        <div className="my-10 mx-6 py-4 px-4 text-justify border-y-8 md:border-y-[12px] rounded-md border-blue shadow-lg md:text-xl lg:absolute lg:top-[30%] lg:translate-x-[15%] lg:z-20" >
          <h1>
          Vous recherchez un chauffagiste professionnel pour entretenir vos systèmes de chauffage et de climatisation ?
          </h1>
          <h1 className="mt-1">
          Vous souhaitez faire installer une nouvelle chaudière ou une pompe à chaleur ?
          </h1>
          <p className="mt-1 font-semibold">
          Obino Energies est à votre service pour répondre à tous vos besoins de chauffage et de climatisation.
          </p>
        </div>
      </div>
      <div className='relative mb-16 lg:mt-12'>
        <Image
          src={entretienChaudiere}
          alt="Obino Energies"
          sizes='90vw'
          className="w-10/12 h-auto mx-auto" />

      </div>
    </>
      

  )
}