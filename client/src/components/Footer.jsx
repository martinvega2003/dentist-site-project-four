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
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
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
  