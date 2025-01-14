import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight, FaCircle, FaStar } from "react-icons/fa";

const CategoryCard = ({
  category,
  description,
  icon: Icon,
  services,
  image,
  imagePosition = "right",
}) => {
  return (
    <div
      className={`flex ${
        imagePosition === "left" ? "flex-row-reverse" : "flex-row"
      } items-center gap-16 mb-10 w-full relative`}
    >
      {/* Decorative background in Card */}
      <div className="absolute top-[-10%] left-[-10%] z-0 opacity-10">
        <FaCircle className="text-secondary w-[80px] h-[80px]" />
      </div>
      <div className="absolute bottom-[-10%] right-[-10%] z-0 opacity-20">
        <FaStar className="text-primary w-[60px] h-[60px]" />
      </div>

      {/* Card Content */}
      <div className="flex-1 bg-gradient-to-r from-secondary to-primary shadow-lg rounded-lg p-6 h-[400px] md:h-[350px] relative z-10 overflow-hidden">
        {/* Icon */}
        <div className="text-primary text-4xl mb-4">
          <Icon />
        </div>

        {/* Category and Description */}
        <h3 className="text-2xl font-heading font-bold text-white mb-2 relative z-10">
          {category}
        </h3>
        <p className="text-gray-600 font-body text-sm mb-4 relative z-10">{description}</p>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary opacity-50 z-0" />

        {/* Services */}
        <ul className="list-none space-y-2 mt-4 relative z-10">
          {services.map((service, index) => (
            <li key={index}>
              <Link
                to={"/services/" + service.name}
                className="text-white hover:scale-[1.02] transition duration-300 font-body text-base flex justify-start items-center gap-2"
              >
                {service.name} <FaLongArrowAltRight />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div
        className="w-[40%] md:w-[30%] min-h-full min-w-[150px] h-[400px] md:h-[350px] bg-cover bg-center rounded-lg shadow-md relative z-10"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </div>
  );
};

export default CategoryCard;
