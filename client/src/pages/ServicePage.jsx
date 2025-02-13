import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import { FaRegCreditCard, FaClinicMedical, FaPhoneAlt } from "react-icons/fa";
import bgImage from "../images/patient-smiling.webp"
import ImageOne from "../images/dentist-&-client.jpg"
import ImageTwo from "../images/receptionist-&-client.jpg"
import ImageThree from "../images/dentist-w-1.jpg"
import CTASection from '../components/CTASection';
import LeadMagnetSection from '../components/LeadMagnetSection';
import ContactSection from './MainPageSection/ContactSection';
import TestimonialsSection from './MainPageSection/TestimonialsSection';

export const ServicePage = ({service}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };  

  return (
    <div className='w-full h-fit flex flex-col justify-start items-center'>
      {/* Hero Section */}
      <HeroSection heading={service.heading} subheading={service.subheading} image={bgImage || bgPlaceholder} />

      {/* Service Description and Image Section */}
      <section className="pt-32 lg:py-32 px-6 lg:px-20 w-full">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start space-x-6">
          {/* Service Description */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex lg:block flex-col justify-start items-center lg:p-6 lg:border-2 lg:border-primary lg:rounded-br-[50px] lg:shadow-2xl">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Learn About {service.name}
            </h2>
            <p className="text-gray-700 text-lg w-[95%] sm:max-w-[60%] text-justify lg:max-w-full lg:text-left mb-16 lg:mb-6">{service.description}</p>
          </div>

          {/* Service Image with Orange Border */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              <img
                src={ImageOne || "https://via.placeholder.com/400x400"} // Replace with actual image URL
                alt={service.name}
                className="hidden lg:block w-full h-auto border-2 lg:border-none border-orange-500 p-2 lg:p-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information and Image Section */}
      <section className="lg:py-16 lg:px-20 w-full">
        <div className="bg-primary lg:bg-transparent flex flex-row-reverse justify-start lg:justify-between items-center lg:items-start space-x-6 mt-12 p-4 sm:p-6 lg:p-0">
          {/* Payment Information */}
          <div className="w-full sm:w-[60%] bg-white -mt-12 lg:mt-0 lg:w-1/2 lg:ml-6 flex lg:block flex-col justify-start items-start mb-8 lg:mb-0 p-6 rounded-br-[50px] shadow-2xl border-2 lg:border-none border-primary">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-accent mb-4">
              Payment Information
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center space-x-3">
                <FaClinicMedical className="text-secondary text-lg sm:text-xl" />
                <span>Insurance Accepted</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaRegCreditCard className="text-secondary text-lg sm:text-xl" />
                <span>Payment Plans Accepted</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaRegCreditCard className="text-secondary text-lg sm:text-xl" />
                <span>Credit Cards Accepted</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-secondary text-lg sm:text-xl" />
                <span>Call us: (555) 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Payment Image */}
          <div className="w-0 lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              <img
                src={ImageTwo || "https://via.placeholder.com/400x400"}// Replace with actual payment-related image URL
                alt="Payment Options"
                className="hidden lg:block w-full h-auto border-2 lg:border-none border-orange-500 p-2 lg:p-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="lg:py-16 px-4 sm:px-6 lg:px-20 w-full">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start mt-12">
          {/* FAQs Content */}
          <div className="w-full lg:w-1/2 lg:mr-6 mb-8 lg:mb-0 flex lg:block flex-col justify-start items-start">
            <h2 className="text-2xl font-heading font-bold text-accent mb-4">
              Solve Your Common Doubts About {service.name}
            </h2>
            <div className="space-y-4 w-full flex flex-col justify-start items-center">
              {service.FAQs.map((faq, index) => (
                <div
                  key={index}
                  className={`w-full md:w-[60%] lg:w-full border ${
                    activeIndex === index ? "bg-white shadow" : "bg-gray-50"
                  } rounded-lg overflow-hidden transition-all duration-300`}
                >
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 transform ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      } transition-transform duration-300 text-gray-500`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                  {activeIndex === index && (
                    <div className="p-4 text-gray-600 border-t transition-opacity duration-300 opacity-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative">
              <img
                src={ImageThree || "https://via.placeholder.com/400x400"} // Replace with actual FAQ-related image URL
                alt="FAQs"
                className="w-full h-auto border-2 border-orange-500 p-2"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-fit py-[150px]">
        <LeadMagnetSection />
      </div>
      <div className="w-full h-fit">
        <TestimonialsSection />
      </div>
      <div className="w-full h-fit">
        <CTASection />
      </div>
      <div className="w-full h-fit">
        <ContactSection />
      </div>
    </div>
  )
}
