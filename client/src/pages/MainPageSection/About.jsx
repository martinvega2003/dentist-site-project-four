import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaTooth, FaSmile, FaHeartbeat } from "react-icons/fa";
import { useRef, useEffect } from "react";
import image from "../../images/dentists-looking-at-camera.jpg"

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: 50, opacity: 0.8 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center md:items-start justify-center px-8 py-48 md:py-64 bg-white relative"
      ref={ref}
      animate={controls}
      initial={{ y: 50, opacity: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Icons in the Background */}
      <div className="absolute top-10 left-10 text-primary opacity-20 text-[100px]">
        <FaTooth />
      </div>
      <div className="absolute bottom-10 right-10 text-accent opacity-20 text-[100px]">
        <FaSmile />
      </div>

      {/* Text Content */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 px-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-4">
          About Us
        </h2>
        <p className="text-lg font-body mb-6">
          At [Clinic Name], we are committed to providing exceptional dental
          care tailored to each patient’s needs. Our mission is to create
          healthy, beautiful smiles in a welcoming and relaxing environment.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <FaHeartbeat className="text-primary text-xl mr-3" />
            <span>Creating confident smiles with personalized care.</span>
          </li>
          <li className="flex items-center">
            <FaTooth className="text-primary text-xl mr-3" />
            <span>Using the latest technology for quality treatments.</span>
          </li>
          <li className="flex items-center">
            <FaSmile className="text-primary text-xl mr-3" />
            <span>Offering a friendly and stress-free experience.</span>
          </li>
        </ul>
        <p className="text-lg font-body mt-6">
          Whether you need a routine checkup or advanced treatments, our team
          is here to support you every step of the way.
        </p>
      </motion.div>

      {/* Image Placeholder */}
      <motion.div
        className="md:w-1/2 px-4 flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="border-4 border-secondary rounded-lg p-6">
          <img
            src={image || "https://via.placeholder.com/450x450"}
            alt="About Us Placeholder"
            className="rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
