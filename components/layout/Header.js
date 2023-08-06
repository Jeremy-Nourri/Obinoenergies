import Link from "next/link";
import Image from 'next/image'
import { getCategories } from "@/data/dataServices";
import { useState, useRef } from "react";
// import { Open_Sans } from 'next/font/google'
 
// const open = Open_Sans({
//   subsets: ['latin'],
//   variable: '--font-open',
// })

export default function Header() {

  const categories = getCategories();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const inputRef = useRef(null);

  const changeChecked = () => {
    inputRef.current.checked = false;
    setIsMenuOpen(false);
  }

  return (
    <header className="flex justify-between items-center p-2 z-30 bg-blue">
      <Image 
        src="/images/logo-background-blue-medium.png"
        alt="Obino Energies"
        width={150}
        height={150}
        priority={true}
      />
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
    
      <nav className="lg:hidden">
        <label
          className="btn btn-circle swap swap-rotate z-50 fixed top-0 right-0 mt-3 mr-2"
        >
          {/* this hidden checkbox controls the state */}
          <input 
            type="checkbox" 
            className="w-full" 
            onChange={() => setIsMenuOpen(!isMenuOpen)} 
            ref={inputRef}
          />

          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>

        </label>

        <ul
          id="menu-items"
          className={`w-full flex-col items-center z-40 bg-gray-light ${isMenuOpen ? "menu-items-open" : "menu-items-closed"}`}
        >
          {categories.map((category, index) => (
            <li 
              key={index} 
              className="my-2 p-4 border-b-4" 
              onClick={() => changeChecked()}
            >
              <Link href={`#${category}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>

      </nav>

    </header>
  );
}