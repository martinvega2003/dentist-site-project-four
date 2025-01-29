import React from "react";
import { motion } from "framer-motion";

export const BenefitsCard = ({ title, description, Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-transparent hover:shadow-2xl rounded-lg p-6 flex flex-col items-center text-center relative border border-transparent hover:border-gray-200 transition duration-500 cursor-default"
    >
      {/* Icon */}
      {Icon ? (
        <div className="w-20 sm:w-28 h-20 sm:h-28 flex justify-center items-center rounded-full border-4 border-accent mb-4 text-accent text-6xl">
          <Icon />
        </div>
      ) : (
        <div className="w-20 sm:w-28 h-20 sm:h-28 flex justify-center items-center rounded-full border-4 border-gray-300 mb-4 text-gray-400 text-6xl">
          ?
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold font-heading text-secondary mb-2">
        {title}
      </h3>
      {/* Description */}
      <p className="text-gray-600 font-body">{description}</p>
    </motion.div>
  );
};

