import Link from "next/link";
import { useState } from "react";

export default function Header() {

  const categories = ["Accueil", "Prestation", "Contact"];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <><header className="flex justify-between items-center p-5">

      <h1 className="text-1xl font-bold text-center">OBINO Énergies</h1>
      <nav className="hidden lg:block">
        <ul className="hidden lg:flex justify-evenly">
          {categories.map((category, index) => (
            <li key={index} className="mx-2">
              <Link href={`#${category}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <nav className="lg:hidden">
        <label
          className="btn btn-circle swap swap-rotate z-20 fixed top-0 right-0 mt-2 mr-2"
        >
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="w-full" onChange={() => setIsMenuOpen(!isMenuOpen)} />
          {/* hamburger icon */}
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
          {/* close icon */}
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

        </label>

        <ul
          id="menu-items"
          className={`w-full flex-col items-center z-10 bg-white ${isMenuOpen ? "menu-items-open" : "menu-items-closed"}`}
        >
          {categories.map((category, index) => (
            <li key={index} className="my-2 p-4 border-b-4 border-orange-400 bg-white">
              <Link href={`#${category}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>

      </nav></>


  );
}