import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative rounded-t-3xl bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 text-white py-10">
      {/* Background SVG */}
      <div className="absolute inset-0 opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.5"
            d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,170.7C672,171,768,213,864,218.7C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone Section */}
        <div className="flex flex-col items-start space-y-4">
          <FaPhone className="text-3xl" />
          <h3 className="text-xl font-semibold">Call Us</h3>
          <p className="text-base">(919)-453-0777</p>
        </div>

        {/* Address Section */}
        <div className="flex flex-col items-start space-y-4">
          <FaMapMarkerAlt className="text-3xl" />
          <h3 className="text-xl font-semibold">Visit Us</h3>
          <p className="text-base">
            4008 Mitchell Mill Rd, Suite 108,Raleigh, NC 27616
          </p>
        </div>

        {/* Email Section */}
        <div className="flex flex-col items-start space-y-4">
          <FaEnvelope className="text-3xl" />
          <h3 className="text-xl font-semibold">Email Us</h3>
          <p className="text-base">info@raleighdentalandimplants.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-8 text-center text-lg border-t border-teal-700 pt-6">
        <p>
          &copy; {new Date().getFullYear()} Wake Cross Family Dentistry. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
