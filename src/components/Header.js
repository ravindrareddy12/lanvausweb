import React from 'react';
import { Link } from 'react-scroll';
import { AcademicCapIcon,XMarkIcon } from '@heroicons/react/20/solid';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-50 top-0 bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-2xl font-bold text-gray-800">Lanvaus</div>
        <nav className="hidden md:flex space-x-6">
          <Link to="hero" smooth={true} className="cursor-pointer text-gray-800 hover:text-blue-600">Home</Link>
          <Link to="services" smooth={true} className="cursor-pointer text-gray-800 hover:text-blue-600">Services</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <AcademicCapIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white">
          <Link to="hero" smooth={true} className="block py-2 px-4 text-gray-800 hover:text-blue-600" onClick={toggleMenu}>Home</Link>
          <Link to="services" smooth={true} className="block py-2 px-4 text-gray-800 hover:text-blue-600" onClick={toggleMenu}>Services</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
