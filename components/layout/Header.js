import { Link } from 'react-scroll';
import Image from 'next/image'
import { getCategories } from "@/data/dataServices";
import { useState, useRef } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

import logo from '../../public/images/logo-background-blue.webp'

export default function Header() {

  const categories = getCategories();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const inputRef = useRef(null);

  const changeChecked = () => {
    inputRef.current.checked = false;
    setIsMenuOpen(false);
  }

  return (
    <header className="flex justify-between items-center py-4 px-2 md:py-6 md:px-6 bg-blue">
    
      <div className='w-2/5'>
        <Image 
          src={logo}
          alt="Logo Obino énergies"
          width={500}
          height={500}
          className='w-auto h-auto'
        />
      </div>

      

      {/* <nav className="hidden lg:block" aria-label="Obino énergies">
        <ul className="hidden lg:flex justify-evenly" role="menubar" aria-label="Obino énergies">
          {categories.map((category, index) => (
            <li key={index} className="mx-2">
              <Link href={`#${category}`} role="menuitem">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}

      <button className=" btn btn-circle md:btn-lg z-50 absolute top-5 right-16 md:top-8 md:right-32">
        <BsFillTelephoneFill className="text-black" />
      </button>
        
      <nav className="lg:hidden" aria-label="Obino énergies">


        <label
          className="btn btn-circle md:btn-lg swap swap-rotate z-50 fixed top-5 right-2 md:top-8 md:right-8"
          htmlFor="menu-toggle"
        >
          {/* this hidden checkbox controls the state */}
          <input 
            type="checkbox" 
            className="w-full" 
            onChange={() => setIsMenuOpen(!isMenuOpen)} 
            ref={inputRef}
            id="menu-toggle"
            aria-checked={isMenuOpen}
          />

          <svg className="w-8 h-8 md:w-12 md:h-12 swap-off fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          
          <svg className="w-8 h-8 md:w-12 md:h-12 swap-on fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>

        </label>

        <ul
          id="menu-items"
          className={`w-full md:w-1/2 flex-col items-center z-40 bg-blue ${isMenuOpen ? "menu-items-open" : "menu-items-closed"}`}
          role="menubar"
          aria-label="Obino énergies"
        >
          {categories.map((category, index) => (
            <li 
              key={index}
              role="none"
            >
              <Link className="block text-white text-xl font-semibold my-2 pl-4 py-7 border-b-4" 
                to={`${category}`} smooth duration={1000} role="menuitem" onClick={() => changeChecked()}>
                {category}
              </Link>
            </li>
          ))}
        </ul>

      </nav>

    </header>
  );
}