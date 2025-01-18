import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const RatedSection = () => {
  // References for the elements to animate
  const videoRef = useRef(null);
  const starsRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Function to trigger animations when an element enters the viewport
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animations for each element when they enter the viewport
          if (entry.target === videoRef.current) {
            gsap.to(videoRef.current, { opacity: 1, duration: 1 });
          }
          if (entry.target === starsRef.current) {
            gsap.to(starsRef.current, { opacity: 1, scale: 1, duration: 1 });
          }
          if (entry.target === headingRef.current) {
            gsap.to(headingRef.current, { opacity: 1, y: 0, duration: 1 });
          }
          if (entry.target === buttonRef.current) {
            gsap.to(buttonRef.current, { opacity: 1, duration: 1 });
          }
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    };

    // Create an IntersectionObserver to observe the elements
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // Trigger when 50% of the element is in the viewport
    });

    // Start observing the elements
    if (videoRef.current) observer.observe(videoRef.current);
    if (starsRef.current) observer.observe(starsRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      observer.disconnect(); // Cleanup the observer when the component unmounts
    };
  }, []);

  return (
    <div>
      <div className="relative w-full">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-[60vh] object-cover"
          src="/hero.mp4" // Replace with your video URL
          autoPlay
          loop
          muted
          style={{ opacity: 0 }} // Start with opacity 0
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-black bg-opacity-80 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            {/* Five Star Icon */}
            <div
              ref={starsRef}
              className="flex justify-center items-center mb-4"
              style={{ opacity: 0, transform: "scale(0.8)" }} // Start with opacity 0 and scale 0.8
            >
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <span key={index} className="text-teal-400 text-3xl">
                    &#9733;
                  </span> // Star icons
                ))}
            </div>

            {/* Heading */}
            <h1
              ref={headingRef}
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ opacity: 0, transform: "translateY(50px)" }} // Start with opacity 0 and translateY(50px)
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
              style={{ opacity: 0 }} // Start with opacity 0
            >
              See More Reviews Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatedSection;
