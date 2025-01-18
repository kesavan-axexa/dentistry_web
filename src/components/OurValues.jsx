import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurValues = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".value-item");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div
      className="bg-white mt-20 mb-24 px-8 md:px-16 lg:px-32"
      ref={containerRef}
    >
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {/* Value 1 */}
        <div className="border-t border-gray-200 pt-8 value-item">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Compassion</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            We prioritize patient comfort and ensure that every visit is a
            positive, stress-free experience.
          </p>
        </div>

        {/* Value 2 */}
        <div className="border-t border-gray-200 pt-8 value-item">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our team uses state-of-the-art technology to deliver the highest
            quality dental care tailored to your needs.
          </p>
        </div>

        {/* Value 3 */}
        <div className="border-t border-gray-200 pt-8 value-item">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Integrity</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            We are committed to transparent, ethical practices and building
            lasting relationships with our patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
