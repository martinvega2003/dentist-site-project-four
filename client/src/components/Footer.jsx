import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 text-white py-12 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-400">
            <li>123 Main Street, New York, NY 10001</li>
            <li>(123) 456-7890</li>
            <li>contact@ourclinic.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-6">
            {/* Icons Column */}
            <div className="flex flex-col space-y-4 text-gray-400">
              <FaFacebookF size={20} />
              <FaInstagram size={20} />
              <FaTwitter size={20} />
            </div>
            {/* Links */}
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-white">
                Facebook Profile
              </a>
              <a href="#" className="hover:text-white">
                Instagram Profile
              </a>
              <a href="#" className="hover:text-white">
                Twitter Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-12">
        &copy; {new Date().getFullYear()} Our Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
