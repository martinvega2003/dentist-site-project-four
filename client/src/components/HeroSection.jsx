import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import defaultImg from "../images/main-hero.webp"
import { Link } from "react-router-dom";

const HeroSection = ({ heading, subheading, image }) => {
  return (
    <div
      id="home"
      className="relative w-full h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(${image || defaultImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 sm:px-20">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-heading font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {heading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-3xl font-body mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subheading}
        </motion.p>

        {/* CTA Button */}
        <Link to="/booking">
          <Button>
              Book An Appointment
          </Button>
        </Link>

        {/* Call Us */}
        <motion.p
          className="mt-4 text-lg font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Call us: <span className="font-bold">(123) 456-7890</span>
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
