import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div 
        className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                    transition-all duration-300 ease-in-out 
                    ${ menuOpen? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>

        <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Close Menu">
            &times;
        </button>

        <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Home
        </a>

        <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            About
        </a>
        <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Contact
      </a>
      <a
        href="https://drive.google.com/file/d/1dkKIB5y4K1y2qIGoN7ngcmodW-l_9W-n/view?usp=sharing"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} flex`}>
        Resume
        <FaExternalLinkAlt className="text-xs mt-2 ml-2"/>
      </a>

    </div>
  );
}

export default MobileMenu