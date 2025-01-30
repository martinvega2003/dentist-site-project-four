import React from "react";
import { reviewsData as reviews } from "../../data/reviewsData";
import { TestimonialCard } from "../../components/TestimonialCard";


const Testimonials = () => {
  return (
    <div className="relative w-full flex flex-col justify-start items-center py-20 px-4 sm:px-12">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-b from-white to-accent" />
      </div>
      <h2 className="relative z-10 w-full px-4 sm:px-12 text-primary text-2xl md:text-4xl lg:text-6xl font-heading text-left">
        Read It From Our Clients
      </h2>
      <p className="relative z-10 w-full text-gray-700 text-md md:text-lg font-body text-left mb-24 mt-6 px-4 sm:px-12">
        Don't take our word for it, read the most recent reviews we had from our clients. We always try to deliver the best service for our community.
      </p>
      <div className="relative z-10 py-6 px-4 sm:px-12 flex flex-wrap justify-start gap-8">
        {reviews.map((review) => (
          <TestimonialCard
            key={review.id}
            name={review.name}
            review={review.review}
            image={review.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
