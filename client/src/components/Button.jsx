import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

export const Button = ({ children, className, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <button
        className={`font-heading py-3 px-6 rounded-lg text-lg flex items-center gap-2 transition-all duration-300 ${
          className || "bg-primary hover:bg-secondary text-white"
        }`}
      >
        {/* Icon Section */}
        <span className="text-xl">
          {Icon ? <Icon /> : <FaCalendarAlt />}
        </span>
        {/* Button Text */}
        {children}
      </button>
    </motion.div>
  );
};
