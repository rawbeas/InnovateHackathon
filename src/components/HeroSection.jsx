import React, { useState } from "react";

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  // Texts to display in the bottom bar
  const texts = [
    "Change the life of a family every month.",
    "Your support makes a difference.",
  ];

  // Function to handle text change
  const handleNextText = () => {
    setTextIndex((yo) => (yo + 1) % texts.length);
  };

  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        autoplay=""
        loop=""
        muted=""
        playsinline=""
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="https://cdn.pixabay.com/video/2020/05/22/39788-424022649_large.mp4"
      ></video>

      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-start justify-start text-white px-6">
        <div className="max-w-lg text-left mt-20">
          <h1 className="text-4xl py-2 md:text-7xl font-bold mb-4">
            Safe water protects and saves lives
          </h1>
          <p className="text-lg  md:text-3xl mb-6">
            Water.org has helped empower more than 76 million people with access
            to safe water or sanitation.
          </p>
          <button className="bg-blue-600 px-6 py-3 rounded-md text-white font-medium hover:bg-blue-700">
            Donate
          </button>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-blue-600 text-white flex justify-between items-center px-6 py-3">
        {/* Previous Button (Placeholder for functionality) */}
        <button
          onClick={handleNextText}
          className="text-xl font-bold hover:opacity-80"
        >
          &lt;
        </button>

        {/* Dynamic Text */}
        <p className="text-center text-sm md:text-lg">{texts[textIndex]}</p>

        {/* Next Button */}
        <button
          onClick={handleNextText}
          className="text-xl font-bold hover:opacity-80"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
