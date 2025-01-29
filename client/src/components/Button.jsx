import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Button = ({ children, className, icon: Icon, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      onClick={onClick}
    >
      <button
        className={`font-heading flex items-center gap-2 transition-all duration-300 ${
          className || "bg-primary hover:bg-secondary text-white py-3 px-6 text-lg"
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
