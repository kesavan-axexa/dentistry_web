import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Location from "./Location"; // Import Location component

const InfoSection = ({ onGetStartedClick }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-6 lg:mx-20 xl:mx-40">
        {/* Emergency Call */}
        <div className="relative bg-teal-600 text-white p-6 rounded-lg shadow-md">
          {/* SVG Background */}
          <div className="absolute inset-0 opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                fillOpacity="0.3"
                d="M0,224L1440,320L1440,0L0,0Z"
              ></path>
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-4">
                <FaPhone />
              </div>
              <h2 className="md:text-2xl text-xl font-semibold">
                Emergency Call
              </h2>
            </div>
            <p className="text-base md:text-lg mb-4">
              Your Health is Our Priority. Dial (919)-453-0777 for
              round-the-clock emergency support.Quick Care, Always There. Reach
              our emergency team anytime for urgent medical attention.
            </p>
            <a
              href="tel:919-453-0777"
              className="text-sm font-semibold underline hover:text-teal-400"
            >
              CALL US NOW
            </a>
          </div>
        </div>

        {/* Where Are We? */}
        <div className="relative bg-teal-600 text-white p-6 rounded-lg shadow-md">
          {/* SVG Background */}
          <div className="absolute inset-0 opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                fillOpacity="0.3"
                d="M0,160L1440,320L1440,0L0,0Z"
              ></path>
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <h2 className="md:text-2xl text-xl font-semibold">
                Where Are We?
              </h2>
            </div>
            <p className="text-base md:text-lg mb-4">
              Find Us Easily: Locate us at 4008 Mitchell Mill Rd SUITE 108,
              Raleigh, NC 27616, USA. Your trusted healthcare destination.
            </p>
            <button
              onClick={onGetStartedClick}
              className="text-sm font-semibold underline hover:text-teal-400"
            >
              SEE ON MAP
            </button>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="relative bg-white text-teal-700 p-6 rounded-lg shadow-md">
          {/* SVG Background */}
          <div className="absolute inset-0 opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                fill="#008080"
                fillOpacity="0.3"
                d="M0,64L1440,160L1440,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-4">
                <FaClock />
              </div>
              <h2 className="md:text-2xl text-xl font-semibold">
                Opening Hours
              </h2>
            </div>
            <ul className="text-base md:text-lg">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>8:00am - 7:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00am - 6:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
