import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RatedSection = () => {
  const starsRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === starsRef.current) {
            gsap.to(starsRef.current, { opacity: 1, scale: 1, duration: 1 });
          }
          if (entry.target === headingRef.current) {
            gsap.to(headingRef.current, { opacity: 1, y: 0, duration: 1 });
          }
          if (entry.target === buttonRef.current) {
            gsap.to(buttonRef.current, { opacity: 1, duration: 1 });
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    if (starsRef.current) observer.observe(starsRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Video Background */}
      <video
        className="w-full h-[60vh] object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Banner Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white py-16 px-4">
        {/* Five Star Icon */}
        <div
          ref={starsRef}
          className="flex justify-center items-center mb-4"
          style={{ opacity: 0, transform: "scale(0.8)" }}
        >
          {Array(5)
            .fill("")
            .map((_, index) => (
              <span key={index} className="text-teal-400 md:text-5xl text-3xl">
                &#9733;
              </span>
            ))}
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          We Are the #1 Rated Dentist on Google
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          Trusted by thousands of happy patients for providing exceptional
          dental care.
        </p>

        {/* Button */}
        <a
          href="https://raleighdentalandimplants.com/index.html"
          target="_blank"
          rel="noopener noreferrer"
          ref={buttonRef}
          className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
          style={{ opacity: 0 }}
        >
          See More Reviews Now
        </a>
      </div>
    </div>
  );
};

export default RatedSection;
