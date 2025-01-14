import { FaTooth, FaSmile, FaSyringe } from "react-icons/fa";
import imageOne from "../images/dr-attending-client.jpg"
import imageTwo from "../images/bright-smile.jpg"
import imageThree from "../images/surgery.webp"

export const servicesData = [
  {
    category: "General Dentistry",
    description: "Comprehensive dental care for all ages.",
    services: [
      {
        name: "Dental cleanings",
        heading: "Professional Dental Cleanings",
        subheading: "Keep Your Smile Sparkling and Healthy",
        description:
          "Our professional dental cleanings are designed to maintain your oral health by removing plaque, tartar, and stains that regular brushing and flossing can’t address. Regular cleanings help prevent gum disease, cavities, and bad breath, ensuring your teeth and gums remain in top condition. Our experienced dental hygienists use state-of-the-art tools and gentle techniques to make your experience comfortable and effective. With healthier teeth, you can enjoy a brighter smile and improved overall well-being. Book your cleaning today and invest in your long-term oral health!",
        FAQs: [
          {
            question: "How often should I get a dental cleaning?",
            answer: "It’s recommended to get a dental cleaning every six months to maintain optimal oral health.",
          },
          {
            question: "Does a dental cleaning hurt?",
            answer: "For most people, dental cleanings are painless. However, if you have sensitive gums, we take extra care to ensure your comfort.",
          },
          {
            question: "Can dental cleanings prevent cavities?",
            answer: "Yes, regular cleanings remove plaque and tartar buildup, reducing the risk of cavities and gum disease.",
          },
        ],
      },
      {
        name: "Oral exams",
        heading: "Comprehensive Oral Exams",
        subheading: "Your First Step to a Healthier Smile",
        description:
          "Our comprehensive oral exams provide a thorough evaluation of your oral health, including your teeth, gums, and mouth tissues. These exams help detect potential issues early, such as cavities, gum disease, or oral cancer. During your visit, our dentists will discuss your concerns and create a personalized treatment plan tailored to your needs. Regular oral exams are vital for preventing minor problems from becoming serious issues. Schedule your oral exam today and take the first step toward a confident and healthy smile.",
        FAQs: [
          {
            question: "What happens during an oral exam?",
            answer: "Our dentist will examine your teeth, gums, and mouth for signs of disease, decay, or other issues. X-rays may also be taken if necessary.",
          },
          {
            question: "How long does an oral exam take?",
            answer: "An oral exam typically takes 30-45 minutes, depending on your individual needs.",
          },
          {
            question: "Is an oral exam covered by insurance?",
            answer: "Most dental insurance plans cover regular oral exams. Check with your provider for specific details.",
          },
        ],
      },
      {
        name: "X-rays",
        heading: "Advanced Dental X-Rays",
        subheading: "See Beneath the Surface of Your Smile",
        description:
          "Dental X-rays are an essential diagnostic tool that allows our dentists to see what’s happening beneath the surface of your teeth and gums. They help identify hidden issues such as impacted teeth, bone loss, and cavities not visible during a standard exam. Using the latest digital X-ray technology, we ensure minimal radiation exposure while capturing highly detailed images. This technology enables precise diagnoses and effective treatment planning. Experience the benefits of proactive dental care by scheduling your X-ray appointment today!",
        FAQs: [
          {
            question: "Are dental X-rays safe?",
            answer: "Yes, we use digital X-rays, which emit very low levels of radiation and are considered safe for routine use.",
          },
          {
            question: "How often do I need dental X-rays?",
            answer: "The frequency of X-rays depends on your oral health history and current needs, typically every 1-2 years.",
          },
          {
            question: "Do dental X-rays hurt?",
            answer: "No, dental X-rays are painless and quick, usually completed in just a few minutes.",
          },
        ],
      },
      {
        name: "Tooth fillings",
        heading: "Durable Tooth Fillings",
        subheading: "Restore Your Teeth and Confidence",
        description:
          "Tooth fillings are a quick and effective solution for repairing cavities and restoring the function and appearance of your teeth. We offer high-quality materials such as composite resin to ensure a natural look and long-lasting results. Our skilled dentists take great care to match the filling to your tooth color, blending seamlessly with your smile. Protect your teeth from further decay and enjoy eating and speaking comfortably again. Schedule your appointment for a filling and reclaim your smile today!",
        FAQs: [
          {
            question: "How long do tooth fillings last?",
            answer: "Composite fillings typically last 7-10 years with proper care, but longevity can vary based on your oral hygiene and habits.",
          },
          {
            question: "Do getting fillings hurt?",
            answer: "We use local anesthesia to ensure the process is comfortable. Most patients feel minimal discomfort.",
          },
          {
            question: "Can I eat after getting a filling?",
            answer: "It’s best to wait a few hours until the anesthesia wears off, especially if your filling was done with composite resin.",
          },
        ],
      },
      {
        name: "Root canals",
        heading: "Gentle Root Canal Treatment",
        subheading: "Save Your Tooth and Relieve Pain",
        description:
          "Root canals are a highly effective treatment to save infected or damaged teeth, eliminating the need for extraction. During the procedure, our experienced dentists remove the infected pulp, clean the canal, and seal it to prevent further issues. We prioritize your comfort, using modern techniques and anesthetics to make the process as painless as possible. Avoid the risks of untreated tooth infections and preserve your natural smile. Contact us today to schedule your root canal consultation.",
        FAQs: [
          {
            question: "Does a root canal hurt?",
            answer: "With modern techniques and local anesthesia, most patients report little to no pain during the procedure.",
          },
          {
            question: "How long does a root canal take?",
            answer: "The procedure usually takes 1-2 hours and may require a follow-up visit to place a crown.",
          },
          {
            question: "Can I go to work after a root canal?",
            answer: "Most patients can return to their normal activities the same day, though some prefer to rest for a few hours.",
          },
        ],
      },
    ],    
    icon: FaTooth,
    image: imageOne || "https://via.placeholder.com/150?text=General+Dentistry",
  },
  {
    category: "Cosmetic Dentistry",
    description: "Enhance your smile with our cosmetic treatments.",
    services: [
      {
        name: "Teeth whitening",
        heading: "Professional Teeth Whitening",
        subheading: "Brighten Your Smile with Confidence",
        description:
          "Our professional teeth whitening service offers a safe and effective way to remove years of stains and discoloration caused by coffee, tea, wine, and everyday life. Using advanced whitening techniques, we can help you achieve a dazzling smile in as little as one visit. Unlike over-the-counter products, our customized treatments ensure consistent results while protecting your enamel. Enjoy a brighter smile that boosts your confidence and leaves a lasting impression. Book your teeth whitening appointment today and transform your smile!",
        FAQs: [
          {
            question: "Is teeth whitening safe?",
            answer: "Yes, professional teeth whitening is safe when performed by a qualified dentist. We use techniques that minimize sensitivity and protect your enamel.",
          },
          {
            question: "How long do whitening results last?",
            answer: "Results can last from six months to two years, depending on your oral hygiene and lifestyle habits.",
          },
          {
            question: "Will teeth whitening make my teeth sensitive?",
            answer: "Some patients may experience temporary sensitivity, but it usually subsides within a few days. We use products designed to reduce discomfort.",
          },
        ],
      },
      {
        name: "Veneers",
        heading: "Custom Porcelain Veneers",
        subheading: "Achieve a Flawless Smile",
        description:
          "Veneers are a versatile cosmetic solution designed to correct imperfections like chipped, stained, or uneven teeth. Made from durable porcelain, our custom veneers are crafted to match the shape, size, and color of your natural teeth, providing a seamless and stunning transformation. With veneers, you can enjoy a radiant, natural-looking smile that lasts for years. Whether you want to fix one tooth or enhance your entire smile, veneers are an excellent choice. Schedule your consultation today to explore how veneers can elevate your confidence.",
        FAQs: [
          {
            question: "How long do veneers last?",
            answer: "Porcelain veneers typically last 10-15 years with proper care and maintenance.",
          },
          {
            question: "Do veneers damage my natural teeth?",
            answer: "Veneers require minimal enamel removal, and when done correctly, they do not harm your natural teeth.",
          },
          {
            question: "Can I eat normally with veneers?",
            answer: "Yes, you can eat most foods, but it's best to avoid biting into hard or sticky foods to preserve the veneers' longevity.",
          },
        ],
      },
      {
        name: "Dental bonding",
        heading: "Expert Dental Bonding",
        subheading: "Quick Fixes for a Perfect Smile",
        description:
          "Dental bonding is an affordable and minimally invasive cosmetic treatment that repairs minor imperfections, such as chips, cracks, or gaps in your teeth. Using a tooth-colored resin, our skilled dentists expertly sculpt and bond the material to your natural teeth for a flawless finish. The process is quick and painless, often completed in a single visit. Dental bonding is perfect for enhancing your smile without the need for extensive procedures. Book your appointment today and discover how dental bonding can revitalize your smile with ease.",
        FAQs: [
          {
            question: "How long does dental bonding last?",
            answer: "Bonding typically lasts 5-10 years, depending on your oral habits and the location of the bonded tooth.",
          },
          {
            question: "Does dental bonding hurt?",
            answer: "No, dental bonding is painless and usually doesn’t require anesthesia unless addressing decay.",
          },
          {
            question: "Can bonded teeth be whitened?",
            answer: "Bonding material doesn’t respond to whitening treatments, so it’s best to whiten your teeth before the procedure for an even look.",
          },
        ],
      },
      {
        name: "Smile makeovers",
        heading: "Complete Smile Makeovers",
        subheading: "Transform Your Smile, Transform Your Life",
        description:
          "A smile makeover is a comprehensive approach to achieving the smile of your dreams. Combining treatments like veneers, teeth whitening, bonding, and more, our personalized smile makeovers are designed to address your unique concerns and goals. Whether you want to fix imperfections, brighten your teeth, or completely reshape your smile, our experienced dentists will work with you to create a customized plan. Invest in your confidence and let your smile light up every room. Schedule your smile makeover consultation today and begin your journey to a stunning smile!",
        FAQs: [
          {
            question: "What does a smile makeover include?",
            answer: "A smile makeover may include veneers, whitening, bonding, crowns, or other treatments tailored to your needs.",
          },
          {
            question: "How long does a smile makeover take?",
            answer: "The timeline varies depending on the treatments involved, ranging from a single visit to several months.",
          },
          {
            question: "Is a smile makeover worth it?",
            answer: "Absolutely! A smile makeover can significantly boost your confidence and enhance your quality of life by improving your smile’s appearance.",
          },
        ],
      },
    ],    
    icon: FaSmile,
    image: imageTwo || "https://via.placeholder.com/150?text=Cosmetic+Dentistry",
  },
  {
    category: "Surgical Dentistry",
    description: "Expert surgical procedures for complex dental issues.",
    services: [
      {
        name: "Wisdom teeth removal",
        heading: "Wisdom Teeth Removal",
        subheading: "Safe and Comfortable Extraction",
        description:
          "Wisdom teeth removal is a common procedure to address pain, crowding, or potential dental complications caused by third molars. Our team ensures a stress-free experience using advanced techniques and sedation options for your comfort. Removing wisdom teeth not only prevents infection and misalignment but also safeguards your overall oral health. Whether you’re experiencing discomfort or your dentist has recommended extraction, our gentle and efficient approach will help you recover quickly. Book your consultation today and protect your smile for the future!",
        FAQs: [
          {
            question: "Is wisdom teeth removal painful?",
            answer: "The procedure is performed under local anesthesia or sedation, so you won’t feel pain. Mild discomfort during recovery can be managed with medication.",
          },
          {
            question: "How long is the recovery time?",
            answer: "Recovery typically takes 5-7 days, though complete healing may take a few weeks.",
          },
          {
            question: "When should I remove my wisdom teeth?",
            answer: "It’s best to remove them if they’re causing pain, crowding, or are at risk of becoming impacted.",
          },
        ],
      },
      {
        name: "Dental implants",
        heading: "Dental Implants",
        subheading: "Restore Your Smile with Confidence",
        description:
          "Dental implants are a permanent and natural-looking solution for replacing missing teeth. Our high-quality implants are designed to integrate seamlessly with your jawbone, providing unparalleled stability and functionality. Implants not only restore your smile but also prevent bone loss and improve overall oral health. Whether you’re missing one tooth or multiple, our expert team will customize a treatment plan to suit your needs. Invest in a lifetime of confident smiles with dental implants. Schedule your consultation today to explore this transformative solution!",
        FAQs: [
          {
            question: "Are dental implants permanent?",
            answer: "Yes, dental implants are designed to last a lifetime with proper care and maintenance.",
          },
          {
            question: "Is the implant procedure painful?",
            answer: "The procedure is performed under anesthesia, and most patients experience minimal discomfort during recovery.",
          },
          {
            question: "How long does the implant process take?",
            answer: "The entire process can take 3-6 months, depending on healing time and the need for preparatory procedures.",
          },
        ],
      },
      {
        name: "Gum surgeries",
        heading: "Gum Surgeries",
        subheading: "Rejuvenate Your Oral Health",
        description:
          "Gum surgeries are essential for treating periodontal disease, correcting gum recession, and restoring a healthy foundation for your teeth. Our experienced team offers a range of procedures, including flap surgery, grafting, and crown lengthening, all performed with precision and care. These treatments not only improve the health of your gums but also enhance the appearance of your smile. Protect your oral health and achieve a balanced, beautiful gum line with our state-of-the-art surgical solutions. Schedule your consultation today and take the first step toward healthier gums!",
        FAQs: [
          {
            question: "What are the signs I need gum surgery?",
            answer: "Signs include bleeding gums, gum recession, persistent bad breath, or loose teeth.",
          },
          {
            question: "Is gum surgery painful?",
            answer: "We use local anesthesia to ensure your comfort during the procedure, and post-operative pain is manageable with medication.",
          },
          {
            question: "How long does recovery take?",
            answer: "Recovery varies by procedure but typically ranges from 1-2 weeks.",
          },
        ],
      },
      {
        name: "Bone grafts",
        heading: "Bone Grafts",
        subheading: "Strengthen Your Jaw for a Healthier Smile",
        description:
          "Bone grafting is a vital procedure for patients experiencing bone loss in the jaw, often necessary before dental implants or to restore overall jaw structure. Our advanced bone grafting techniques use natural or synthetic materials to rebuild and strengthen your jawbone, ensuring a stable foundation for future dental work. This procedure not only supports your oral health but also helps maintain facial structure and aesthetics. Don’t let bone loss compromise your smile—schedule your bone graft consultation today and regain a strong, healthy foundation!",
        FAQs: [
          {
            question: "Why would I need a bone graft?",
            answer: "Bone grafts are often required to restore bone lost due to gum disease, trauma, or tooth loss, especially before placing implants.",
          },
          {
            question: "Is bone grafting a lengthy procedure?",
            answer: "The procedure typically takes 1-2 hours, depending on the complexity and the area being treated.",
          },
          {
            question: "How long does it take to heal?",
            answer: "Healing can take 3-6 months, during which the new bone integrates with your jaw.",
          },
        ],
      },
    ],    
    icon: FaSyringe,
    image: imageThree || "https://via.placeholder.com/150?text=Surgical+Dentistry",
  },
];


