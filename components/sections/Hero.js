import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <div id='Accueil' className="relative bg-zinc-100">
        <p className="w-full text-center py-1 text-base font-bold italic opacity-80 absolute z-10 text-black bg-gray-light">
        Votre confort, notre priorité
        </p>
        <Image
          src="/images/image-intro.jpg"
          alt="Obino Energies"
          width={500}
          height={500}
          className="opacity-80 " />

      </div>

      <Image
        src="/images/banner-color.png"
        alt="Obino Energies"
        width={500}
        height={500}
      />

      <div className="my-6 mx-6 py-4 px-2 text-justify border-y-8 rounded-md border-blue">
        <p className="text-justify">
          Vous recherchez un chauffagiste professionnel pour entretenir vos systèmes de chauffage et de climatisation ? 
        </p>
        <p className="mt-1">
          Vous souhaitez faire installer une nouvelle chaudière ou une pompe à chaleur ? 
        </p>
        <p className="mt-1">
          Vous avez besoin d'un dépannage ?
        </p>
        <p className="mt-1  font-semibold">
          Obino Energies est à votre service pour répondre à tous vos besoins de chauffage et de climatisation.
        </p>
        <p className="mt-2">
          N'hésitez pas à nous contacter notre équipe vous apportera les informations nécessaires et planifiera une intervention selon vos disponibilités.
        </p>

      </div>
      
    </>

  )
}