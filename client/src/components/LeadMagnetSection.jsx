import React from "react";
import { motion } from "framer-motion";
import { FaRegHandshake, FaTooth, FaSmile } from "react-icons/fa";
import image from "../images/dentist-clinic.jpg";
import { Button } from "./Button";

const LeadMagnetSection = () => {
  return (
    <div className="bg-primary h-[500px] pt-[50px] relative overflow-y-visible">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <div className="bg-secondary w-[300px] h-[300px] rounded-full opacity-30 absolute top-10 left-10"></div>
        {/* Small Circle */}
        <div className="bg-secondary w-[150px] h-[150px] rounded-full opacity-50 absolute bottom-20 right-20"></div>
        {/* Icon Decorations */}
        <FaSmile className="text-secondary text-[120px] opacity-20 absolute top-1/3 left-10" />
        <FaTooth className="text-secondary text-[100px] opacity-30 absolute bottom-10 left-1/3" />
        <FaRegHandshake className="text-secondary text-[80px] opacity-40 absolute top-5 right-1/4" />
      </div>

      <div className="container md:mx-20 flex items-center justify-center h-full relative">
        {/* Left Side (Image + Content) */}
        <div className="w-full md:w-2/3 h-full flex justify-center items-center">
          <div className="relative w-[450px] md:min-w-[650px] h-[500px] mt-[100px] flex items-center justify-center flex-col p-6 border-2 border-secondary rounded-lg overflow-hidden">
            {/* Image with opacity overlay */}
            <div
              style={{
                backgroundImage: `url(${image || "https://via.placeholder.com/600x700"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-3 opacity-60 z-0 rounded-lg"
            ></div>

            {/* Text Content */}
            <div className="relative z-10 text-center text-white flex flex-col items-center">
              <h2
                className="text-2xl font-bold font-heading mb-4"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
              >
                Exclusive Offer for New Patients!
              </h2>
              <p
                className="mb-6 text-lg font-body w-2/3"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
              >
                Book your first appointment today and receive a $100 discount on
                any treatment.
              </p>
              <Button>Claim Your Offer</Button>
            </div>
          </div>
        </div>

        {/* Right Side (Optional additional content or empty space) */}
        <div className="w-1/3 pl-8 hidden md:block">
          {/* Additional content can go here */}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetSection;

