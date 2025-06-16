import React from "react";
import profpic from "../assets/manlawyer.png"; // Assuming you have a profile picture in your assets

const HeroSection = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/charlesudeh88", "_blank");
  };

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <h1 className=" relative text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Partner on the Path to Justice and property consultancy
              <div className="w-32 h-1 bg-[#FCA311] mt-4"></div>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              We stand by your side, providing expert legal guidance,property
              consultancy and unwavering support to protect your rights and
              ensure justice is served.
            </p>

            <button
              onClick={openCalendly}
              className="bg-[#FCA311] text-[#14213D] px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#E6920F] transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Image */}
          <div className="lg:flex lg:justify-end">
            <div className="relative">
              {/* Placeholder for lawyer image */}

              <img
                src={profpic}
                alt="Lawyer"
                className="w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] object-cover rounded-lg shadow-2xl"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FCA311] opacity-20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FCA311] opacity-10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
