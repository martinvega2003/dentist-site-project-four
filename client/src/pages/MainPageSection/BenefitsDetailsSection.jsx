import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUserMd, FaShieldAlt } from "react-icons/fa";
import image from "../../images/office.webp";

const BenefitsDetailsSection = () => {
  const bgImage = "https://via.placeholder.com/1920x1080";

  return (
    <div
      style={{
        backgroundImage: `url(${image || bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-[500px] flex items-center overflow-visible"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto flex items-center justify-center h-full relative px-6 md:px-20">
        {/* Left Side (Optional additional content or empty space) */}
        <div className="w-1/3 pl-8 hidden md:block"></div>

        {/* Right Side: Benefits Card */}
        <div className="relative w-full lg:w-2/3 h-full flex justify-center items-center mt-[70px] border-4 border-secondary rounded-lg p-2 z-20">
          <div
            className="relative w-full h-full flex flex-col items-start justify-center p-8 bg-white bg-opacity-70 rounded-lg shadow-lg z-20"
          >
            {/* Section Title */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary mb-4"
            >
              The Benefits of Choosing Us
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-700 text-sm md:text-md lg:text-lg font-body mb-6"
            >
              Experience unmatched dental care tailored to your needs. Here’s
              why we stand out:
            </motion.p>

            {/* Bullet Points with Icons */}
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <FaCheckCircle className="text-secondary text-2xl mt-1" />
                <span className="text-gray-700 font-body text-lg">
                  <strong>Expert Team:</strong> Our experienced dentists ensure
                  top-notch care for every patient.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-start space-x-4"
              >
                <FaUserMd className="text-secondary text-2xl mt-1" />
                <span className="text-gray-700 font-body text-lg">
                  <strong>Personalized Plans:</strong> Customized treatments
                  designed for your specific needs.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-start space-x-4"
              >
                <FaShieldAlt className="text-secondary text-2xl mt-1" />
                <span className="text-gray-700 font-body text-lg">
                  <strong>Safe Environment:</strong> We prioritize your safety
                  with state-of-the-art equipment.
                </span>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsDetailsSection;
