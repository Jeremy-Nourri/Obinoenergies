import Image from "next/image";
import Link from "next/link";
import logo from '../../public/images/logo-background-blue-medium.webp'

export default function Footer() {
  return (
    <footer id="Footer" className="bg-blue p-4 w-full bottom-0">
      <div className="w-2/4 md:w-1/4">
        <Image
          src={logo}
          alt="Logo Obino Energies"
          width={500}
          height={500}
          className="w-auto h-auto"
        />
      </div>
      <div className="text-white font-bold md:text-lg">
        <p className="mt-2">229 rue de Solférino</p>
        <p>59000 Lille</p>
      </div>

      <p className="text-white hover:text-orange text-center text-sm mt-2 md:text-lg">
        © 2023 - Tous droits réservés - <Link href="/mentions/page"> Mentions légales</Link>
      </p>
    </footer>
  );
}