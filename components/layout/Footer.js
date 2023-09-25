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
        />
      </div>

      <p className="text-white text-center text-sm mt-2 md:text-lg">
        © 2023 - Tous droits réservés - 
        <Link className="hover:text-orange" href="/mentions/page"> Mentions légales</Link>
      </p>
    </footer>
  );
}