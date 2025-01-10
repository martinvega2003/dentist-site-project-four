import React from "react";
import { motion } from "framer-motion";

export const BenefitsCard = ({ title, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-transparent hover:shadow-2xl rounded-lg p-6 flex flex-col items-center text-center relative border border-transparent hover:border-gray-200 transition duration-500"
    >
      {/* Image */}
      <img
        src={image || "https://via.placeholder.com/150x150"}
        alt={title}
        className="w-28 h-28 object-cover rounded-full border-4 border-accent mb-4"
      />
      {/* Title */}
      <h3 className="text-xl font-bold font-heading text-secondary mb-2">
        {title}
      </h3>
      {/* Description */}
      <p className="text-gray-600 font-body">{description}</p>
    </motion.div>
  );
};
