import React, { useState } from 'react';
import { FaBars, FaTimes, FaTooth } from 'react-icons/fa';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import useRedirect from './UseRedirect';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirectTo = useRedirect()

  return (
    <div className="w-full flex flex-col fixed top-0 z-50">
      <div className="w-full bg-accent text-white text-center py-2 text-sm">
        Get a $100 discount on your first consultation! Book now!
      </div>
      <nav className="relative z-60 bg-white shadow-md w-full h-[100px]">
        <div className="px-10 flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/">
            <div className="text-4xl font-bold flex items-center text-primary text-pretty cursor-pointer"><FaTooth /></div>
          </Link>

          {/* Hamburger Icon */}
          <div className="md:hidden text-2xl text-primary cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Links & Button */}
          <div className={`absolute top-16 left-0 w-full bg-white shadow-lg md:shadow-none md:static md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row items-center lg:gap-6">
              <li className="text-gray-700 hover:text-secondary text-md py-2 px-4 md:py-0">
                <a href="#home">Home</a>
              </li>
              <li className="text-gray-700 hover:text-secondary text-md py-2 px-4 md:py-0">
                <a href="#about">About</a>
              </li>
              <li className="text-gray-700 hover:text-secondary text-md py-2 px-4 md:py-0">
                <a href="#services">Services</a>
              </li>
              <li className="text-gray-700 hover:text-secondary text-md py-2 px-4 md:py-0">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="p-4 md:p-0 flex justify-center items-center md:ml-6">
              <Button label="Book Appointment" onClick={() => redirectTo("/booking")} className="w-fit h-fit bg-primary hover:bg-secondary text-white py-3 px-6 text-sm lg:text-md">
                Book Your Appointment
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;