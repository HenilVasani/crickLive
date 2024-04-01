import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-grow">
      <footer className="bg-gray-900 text-white p-5 font-serif text-gray-300">
      <div className="container mx-auto p-5 h-100 font-serif text-gray-300 bg-gray-900">
        <div className="text-3xl font-bold text-blue-500 mb-10">
          CREX
        </div>
        <div className="footer-link">
          <div className="flex">
            <ul className="mr-20">
              <li className="mb-4 hover:text-gray-500 text-lg"><Link to="/about">About</Link></li>
              <li className="mb-4 hover:text-gray-500 text-lg"><a href="/grievance">Grievance</a></li>
              <li className="mb-4 hover:text-gray-500 text-lg"><a href="/refund-policy">Refund Policy</a></li>
            </ul>
            <ul>
              <li className="mb-4 hover:text-gray-500 text-lg"><a href="/privacy-policy">Privacy Policy</a></li>
              <li className="mb-4 hover:text-gray-500 text-lg"><a href="/terms-and-conditions">Terms and Conditions</a></li>
              <li className="hover:text-gray-500 text-lg"><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Footer;
