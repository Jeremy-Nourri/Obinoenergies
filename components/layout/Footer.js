import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="Footer" className="bg-blue p-4 h-56 w-full bottom-0">
      <Image
        src="/images/logo-background-blue-medium.png"
        alt="Logo Obino Energies"
        width={170}
        height={170}
      />
      <p className="text-white font-bold mt-3">229 rue de Solférino</p>
      <p className="text-white font-bold">59000 Lille</p>
      <p className="text-white text-center mt-11">
        © 2023 - Tous droits réservés - 
        <Link href="/mentions/page">
          Mentions légales
        </Link>
      </p>
    </footer>
  );
}