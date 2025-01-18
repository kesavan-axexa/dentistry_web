import React, { useEffect, useState } from "react";
import InfoSection from "./InfoSection";

const Hero = ({ onGetStartedClick,onScrollToLocation }) => {
  const [currentWord, setCurrentWord] = useState("");
  const typewriterWords = ["Smile.", "Confidence.", "Brightness."];
  const typingSpeed = 100; // Speed of typing each character
  const wordDelay = 2000; // Delay between word transitions

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const typeEffect = () => {
      const currentText = typewriterWords[wordIndex];
      if (!isDeleting) {
        // Typing effect
        setCurrentWord(currentText.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentText.length) {
          isDeleting = true;
          timeout = setTimeout(typeEffect, wordDelay); // Pause before deleting
          return;
        }
      } else {
        // Deleting effect
        setCurrentWord(currentText.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % typewriterWords.length; // Move to the next word
        }
      }
      timeout = setTimeout(typeEffect, typingSpeed);
    };

    typeEffect();

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero_img.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black-opacity-20 to-transparent"></div>

        {/* Header */}
        <div className="w-full flex pt-3 justify-between items-center md:px-8 px-4  bg-gradient-to from-black via-transparent to-transparent">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 cursor-pointer z-50 w-auto object-contain"
          />

          {/* Contact Us Button */}
          <a
            href="tel:123456789"
            className="md:px-6 hover:cursor-pointer md:py-2 px-4 py-2 md:text-lg text-base bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 shadow-lg transform hover:scale-105 transition duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Hero Content */}
        <section className="relative grid grid-cols-1 pb-20 md:grid-cols-2 items-center h-full px-6 md:px-12">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8   text-white">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600 uppercase">
              Let us Brighten <br />
              your <span className="typewriter">{currentWord}</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-lg">
              Discover the art of confident smiles with our innovative dental
              care. We are committed to creating personalized experiences that
              brighten your day.
            </p>
            <button 
            onClick={onGetStartedClick}
            className="px-8 py-4 bg-teal-600 text-white rounded-lg text-lg font-semibold hover:bg-teal-700 shadow-lg transform hover:scale-105 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Right Empty Space */}
          <div className="hidden md:block"></div>
        </section>
      </div>

      {/* InfoSection */}
      <div className="relative -mt-20 z-50 md:mb-10">
        <InfoSection onGetStartedClick={onScrollToLocation} />
      </div>
    </div>
  );
};

export default Hero;
