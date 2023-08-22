import Image from "next/image";
import Link from "next/link";
import logo from '../../public/images/logo-background-blue.webp'

export default function Footer() {
  return (
    <footer id="Footer" className="bg-blue p-4 w-full bottom-0">
      <div className="w-2/4">
        <Image
          src={logo}
          alt="Logo Obino Energies"
          width={500}
          height={500}
          className="w-auto h-auto"
        />
      </div>
      <div className="text-white font-bold mt-3 md:text-xl">
        <p className="mt-3">229 rue de Solférino</p>
        <p>59000 Lille</p>
      </div>

      <p className="text-white text-center text-sm mt-6 md:text-lg">
        © 2023 - Tous droits réservés - <Link href="/mentions/page"> Mentions légales</Link>
      </p>
    </footer>
  );
}