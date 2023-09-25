import Image from "next/image"
import Link from "next/link"

import logo from '../public/images/logo-background-blue-medium.webp'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-blue">
      <div className="w-2/4 md:w-1/4 my-4">
        <Image
          src={logo}
          alt="Logo Obino Energies"
        />
      </div>
      <h1 className="text-lg text-white text-center font-bold mt-4 md:text-xl lg:text-2xl">
        404 - Page non trouvée
      </h1>
      <p className="text-lg text-center text-white mt-4 md:text-xl lg:text-2xl">
        <Link href="/" className="text-white hover:text-orange">
          Retourner à la page d'accueil
        </Link>
      </p>
    </div>
  )
}