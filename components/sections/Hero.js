import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div id='Accueil' className="relative bg-zinc-400">
      <p className="text-sm font-bold italic opacity-100 absolute top-2 right-3 z-10">
        Votre confort, notre priorité
      </p>
      <Image 
        src="/images/image-intro.jpg"
        alt="Obino Energies"
        width={500}
        height={500}
        className="opacity-60 "
      />

    </div>

  )
}