import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'; 


import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return ( 
    <nav className={`fixed w-full top-0 z-50 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-black'} backdrop-blur-md bg-opacity-30 py-1`}>
      <div className="max-w-screen-lg px-5 md:px-0 flex flex-wrap items-center justify-between mx-auto md:w-5/6 lg:w-4/6 py-3 md:pl-0">
        <img src={isDarkMode ? logoDark : logoLight} alt="Logo" className="mx-auto md:mx-0" width={185} height={150} /> 
        <div className="flex items-center space-x-5 py-1 ">
          <a href="" className='text-lg px-2 py-1'>Inicio</a>
          <a href="" className='text-lg px-2 py-1'>Proyectos</a>
          <a href="" className='text-lg px-2 py-1'>Blog</a>
          <FontAwesomeIcon 
            icon={isDarkMode ? faSun : faMoon} 
            onClick={toggleDarkMode} 
            className="cursor-pointer"
            style={
              { color: isDarkMode ? "#ffffff": "#000000" 
              }
            }
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
