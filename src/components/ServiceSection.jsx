import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const services = [
  {
    title: "Cosmetic Dentistry",
    description:
      "Enhance the appearance of your smile with our advanced cosmetic procedures, including veneers, whitening, and contouring for a stunning and confident smile.",
  },
  {
    title: "Crowns & Bridges",
    description:
      "Restore damaged or missing teeth with durable crowns and bridges that blend seamlessly with your natural teeth for a perfect bite.",
  },
  {
    title: "Emergency Care",
    description:
      "Providing immediate dental assistance for urgent situations such as severe tooth pain, fractures, or dental trauma.",
  },
  {
    title: "Implants",
    description:
      "Replace missing teeth with permanent, natural-looking implants that restore both function and aesthetics.",
  },
  {
    title: "Laser Gum Surgery",
    description:
      "A modern, minimally invasive approach to treating gum diseases and reshaping gums for improved oral health and aesthetics.",
  },
  {
    title: "Gum Recession Treatment",
    description:
      "Comprehensive care to treat and prevent gum recession, protecting your teeth and improving your gumline.",
  },
  {
    title: "Root Canals",
    description:
      "Relieve tooth pain and save your natural teeth with our expert, pain-free root canal treatments.",
  },
  {
    title: "Invisalign",
    description:
      "Achieve a straighter smile with discreet and comfortable Invisalign aligners, designed for both teens and adults.",
  },
];

const DentalServicesSection = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="px-4 md:px-16 py-10 bg-white text-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600 max-w-2xl">
        We Promise an Excellent Dental Care and Provide These Services
      </h2>
      <p className="text-gray-500 md:text-lg text-base mb-8">
        Explore a range of specialized dental services tailored to meet your
        oral health needs.
      </p>
      <div className="flex flex-wrap -mx-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 mt-2.5 px-4 mb-6"
            onClick={() => handleToggle(index)}
          >
            <div className="border rounded-lg p-4 shadow-sm bg-white cursor-pointer hover:shadow-sm transition-shadow duration-300">
              {/* Title and Toggle Icon */}
              <div className="flex justify-between items-center">
                <h3 className="md:text-2xl text-xl font-semibold">{service.title}</h3>
                <div
                  className={`transition-transform duration-300 ${
                    expanded[index] ? "rotate-180" : ""
                  }`}
                >
                  {expanded[index] ? (
                    <FaChevronUp className="text-teal-600" />
                  ) : (
                    <FaChevronDown className="text-teal-600" />
                  )}
                </div>
              </div>
              {/* Description */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded[index]
                    ? "max-h-96 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 md:text-lg text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DentalServicesSection;
