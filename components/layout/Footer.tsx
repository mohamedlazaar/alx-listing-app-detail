import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 px-4">

        <div className="text-center md:text-left">
          <h2 className="text-white text-2xl font-bold">YourLogo</h2>
          <p className="mt-2 text-sm">
            Discover the best accommodations for your next adventure. Book now
            and enjoy your stay!
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold">Follow Us</h3>
          <div className="mt-2 flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;