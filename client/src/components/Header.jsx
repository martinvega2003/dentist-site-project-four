import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full h-fit z-50">
      <div className="w-full bg-accent text-white text-center py-2 text-sm">
        Get a $100 discount on your first consultation! Book now!
      </div>
      <div className="container mx-auto px-6 py-10 flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/">
          <div className="relative z-20 text-2xl font-bold text-primary cursor-pointer">DentalClinic</div>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden relative z-20 text-2xl text-primary cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links & Button */}
        <div className={`absolute z-10 top-16 left-0 w-full bg-white shadow-lg md:shadow-none md:static md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-center md:flex-row md:items-center md:gap-1 lg:gap-6">
            <li className="text-gray-700 hover:text-secondary text-lg py-2 px-4 md:py-0">
              <a href="#home">Home</a>
            </li>
            <li className="text-gray-700 hover:text-secondary text-lg py-2 px-4 md:py-0">
              <a href="#about">About</a>
            </li>
            <li className="text-gray-700 hover:text-secondary text-lg py-2 px-4 md:py-0">
              <a href="#services">Services</a>
            </li>
            <li className="text-gray-700 hover:text-secondary text-lg py-2 px-4 md:py-0">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="p-4 md:p-0 flex justify-center items-center md:ml-6">
            <Link to="/booking">
              <Button className="bg-primary hover:bg-secondary text-white text-xs lg:text-lg">
                Book An Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;