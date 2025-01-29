import React from "react";
import { servicesData } from "../../data/servicesData";
import CategoryCard from "../../components/CategoryCard";
import { FaCircle } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <div id="services" className="w-full py-[200px] px-4 sm:px-24 bg-neutral-50 relative overflow-hidden">
      {/* Background Decorations (Large Circles) */}
      <div className="absolute top-[-10%] left-[-10%] z-0">
        <FaCircle className="text-primary opacity-20 w-[150px] h-[150px]" />
      </div>
      <div className="absolute bottom-[-10%] right-[-10%] z-0">
        <FaCircle className="text-secondary opacity-20 w-[150px] h-[150px]" />
      </div>
      <h2 className="text-5xl font-heading font-bold text-center text-accent mb-40 relative z-10">
        Our Services
      </h2>
      <div className="flex flex-col justify-start items-center gap-16 relative z-10">
        {servicesData.map((service, index) => (
          <CategoryCard
            key={index}
            category={service.category}
            description={service.description}
            services={service.services}
            icon={service.icon}
            image={service.image}
            imagePosition={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
