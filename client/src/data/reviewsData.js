import imgOne from "../images/testimonial-m-1.jpeg"
import imgTwo from "../images/testimonial-w-1.jpeg"
import imgThree from "../images/testimonial-m-2.webp"
import imgFour from "../images/testimonial-m-3.webp"

export const reviewsData = [
    {
      id: 1,
      name: "John Doe",
      review:
        "This service has exceeded my expectations. The team is professional, punctual, and attentive to details. I particularly appreciated their dedication to ensuring I was completely satisfied with the outcome. I would highly recommend them to anyone seeking quality and reliability in their services.",
      image: imgOne || "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "The attention to detail and the quality of work they deliver is simply outstanding. It’s rare to find a company that genuinely cares about its customers as much as they do. Highly recommend!",
      image: imgTwo || "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Michael Brown",
      review:
        "They provided a seamless and stress-free experience. I would recommend them to anyone looking for top-notch service.",
      image: imgThree || "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Richard Johnson",
      review:
        "The experience was fantastic from start to finish. They were very communicative and ensured all my questions were answered. The quality of the service is unmatched, and they truly go above and beyond to deliver excellent results. I will definitely be returning in the future.",
      image: imgFour || "https://via.placeholder.com/150",
    },
  ];