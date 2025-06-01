import React, { useEffect } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

  return (
    <nav className="top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      
      <div className="mx-auto px-4">
        
        <div className='flex justify-between items-center h-16'>
        
            <a href="#home" className='font-mono flex text-xl font-bold text-white'>
                {" "}
                Satyam<span className='text-blue-500'>.tech</span>{" "}
                <a href="https://github.com/Satyamsahugr8/satyam-portfolio"><FaExternalLinkAlt className="ml-2 mt-2 text-sm"/></a>
            </a>
            

            <div 
                className='w-7 h-5 relative cursor-pointer z-40 md:hidden' 
                onClick={() => setMenuOpen((prev) => !prev)}>
                &#9776;
            </div>

            <div className='hidden md:flex items-center space-x-8'>
                <a href="#home" className='text-gray-300 hover:text-white transition-colors'>
                    {" "}
                    Home
                    {" "}
                </a>

                <a href="#about" className='text-gray-300 hover:text-white transition-colors'>
                    {" "}
                    About
                    {" "}
                </a>

                <a href="#projects" className='text-gray-300 hover:text-white transition-colors'>
                    {" "}
                    Project
                    {" "}
                </a>

                <a href="#contact" className='text-gray-300 hover:text-white transition-colors'>
                    {" "}
                    Contact
                    {" "}
                </a>
                <a name="resume" href="https://drive.google.com/file/d/1dkKIB5y4K1y2qIGoN7ngcmodW-l_9W-n/view?usp=sharing" 
                className="text-gray-300 hover:text-white transition-colors flex gap-1">
                    {" "}
                    Resume
                    <FaExternalLinkAlt className="text-xs mt-1"/>
                    {" "}
                    </a>

                
            </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar