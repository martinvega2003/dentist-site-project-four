import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full shadow-md bg-white h-fit">
      {/* Lead Magnet */}
      <div className="w-full bg-accent text-white text-center py-2 text-sm">
        💰 Get a $100 discount on your first consultation! Book now!
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-6 py-4 lg:px-20">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <a href="/">Clinic Logo</a>
        </div>

        {/* Links */}
        <nav
          className={`lg:flex gap-8 items-center ${
            menuOpen ? "flex flex-col fixed top-0 left-0 w-full h-full bg-white z-50" : "hidden"
          } lg:relative lg:w-auto lg:h-auto`}
        >
          <button
            className="absolute top-6 right-6 lg:hidden text-primary text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <ul className="lg:flex gap-8 text-lg text-gray-700">
            <li>
              <a href="#about" className="hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
          <Button className="bg-accent hover:bg-secondary text-white">
            Book An Appointment
          </Button>
        </nav>

        {/* Burger Button */}
        <button
          className="lg:hidden text-primary text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
