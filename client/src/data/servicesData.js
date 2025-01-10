import { FaTooth, FaSmile, FaSyringe } from "react-icons/fa";
import imageOne from "../images/dr-attending-client.jpg"
import imageTwo from "../images/bright-smile.jpg"
import imageThree from "../images/surgery.webp"

export const servicesData = [
  {
    category: "General Dentistry",
    description: "Comprehensive dental care for all ages.",
    services: [
      "Dental cleanings",
      "Oral exams",
      "X-rays",
      "Tooth fillings",
      "Root canals",
    ],
    icon: FaTooth,
    image: imageOne || "https://via.placeholder.com/150?text=General+Dentistry",
  },
  {
    category: "Cosmetic Dentistry",
    description: "Enhance your smile with our cosmetic treatments.",
    services: [
      "Teeth whitening",
      "Veneers",
      "Dental bonding",
      "Smile makeovers",
    ],
    icon: FaSmile,
    image: imageTwo || "https://via.placeholder.com/150?text=Cosmetic+Dentistry",
  },
  {
    category: "Surgical Dentistry",
    description: "Expert surgical procedures for complex dental issues.",
    services: [
      "Wisdom teeth removal",
      "Dental implants",
      "Gum surgeries",
      "Bone grafts",
    ],
    icon: FaSyringe,
    image: imageThree || "https://via.placeholder.com/150?text=Surgical+Dentistry",
  },
];


