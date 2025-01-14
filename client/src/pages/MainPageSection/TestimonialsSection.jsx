import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    name: "John Doe",
    location: "New York, USA",
    review:
      "This is a placeholder review. The service was amazing and exceeded my expectations. Highly recommended!",
    image: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    name: "Jane Smith",
    location: "Los Angeles, USA",
    review:
      "Another placeholder review. Great experience! The team was professional and friendly.",
    image: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    name: "Mike Johnson",
    location: "Chicago, USA",
    review:
      "Amazing experience. Highly skilled professionals and the process was smooth from start to finish.",
    image: "https://via.placeholder.com/150", // Placeholder image
  },
];

const TestimonialsSection = () => {
  return (
    <div className="w-full py-[100px] px-24 bg-transparent">
      <h2 className="text-5xl font-heading font-bold text-center text-accent mb-16">
        Patient Testimonials
      </h2>
      <motion.div
        className="flex justify-center items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex justify-start items-center gap-6 mb-8"
              initial={{ x: index % 2 === 0 ? -200 : 200 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: index * 0.5,
              }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src={testimonial.image} alt="Patient" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-lg text-gray-800">{testimonial.review}</p>
                <div className="flex items-center mt-2">
                  <FaStar className="text-yellow-400" />
                  <p className="text-md font-semibold text-gray-700 ml-2">{testimonial.name}</p>
                </div>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
