import React from "react";
import { BenefitsCard } from "../../components/BenefitsCard";
import { FaTooth, FaRegSmile, FaHandsHelping } from "react-icons/fa";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Affordable Dentistry",
      description:
        "We believe in providing top-quality care at prices everyone can afford.",
      icon: FaTooth,
    },
    {
      title: "Patient Education",
      description:
        "Empowering our patients with knowledge to make the best decisions for their oral health.",
      icon : FaRegSmile,
    },
    {
      title: "Comfortable Environment",
      description:
        "Experience a welcoming and relaxing atmosphere during every visit.",
      icon: FaHandsHelping,
    },
  ];

  return (
    <div className="bg-transparent relative py-64 px-4">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 text-secondary opacity-30 text-6xl sm:text-9xl">
        <FaTooth />
      </div>
      <div className="absolute bottom-10 right-10 text-secondary opacity-30 text-6xl sm:text-9xl">
        <FaRegSmile />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary opacity-20 text-6xl sm:text-9xl">
        <FaHandsHelping />
      </div>

      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-3xl font-bold font-heading text-accent">
            Why Choose Our Clinic?
          </h2>
          <p className="text-md sm:text-lg text-gray-200 mt-4">
            Discover the benefits of choosing us for your dental care.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitsCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              Icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
