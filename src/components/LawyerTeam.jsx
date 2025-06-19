import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Phone, Mail, Facebook } from "lucide-react";

const LawyersTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const lawyers = [
    {
      id: 1,
      name: "Ebuka Udeh Esq",
      title: "Senior Partner/corporate Lawyer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      phone: "+2348127350477",
      email: "charlesudeh88@gmail.com",
    },
    {
      id: 2,
      name: "Olantunji Olanrewaju Esq",
      title: "senior Partner/Corporate Lawyer",
      image: "./Olantunji.png",
      phone: "+1 (555) 234-5678",
      email: "christina@lawfirm.com",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === lawyers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lawyers.length - 1 : prevIndex - 1
    );
  };

  const getVisibleLawyers = () => {
    const visible = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % lawyers.length;
      visible.push(lawyers[index]);
    }
    return visible;
  };

  const getMobileLawyer = () => {
    return lawyers[currentIndex];
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#FCA311" }}>
            Our Lawyers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet our team of dedicated legal professionals, committed to
            providing expert advice and tailored solutions to meet your legal
            needs.
          </p>
        </div>

        {/* Desktop View - 2 lawyers */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8 mb-8">
            {getVisibleLawyers().map((lawyer) => (
              <div
                key={lawyer.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-full h-full  "
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {lawyer.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{lawyer.title}</p>
                  <div className="flex justify-center space-x-4">
                    <button
                      className="p-2 rounded-full transition-colors duration-200 hover:text-white"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <Phone size={16} className="text-white" />
                    </button>
                    <button
                      className="p-2 rounded-full transition-colors duration-200 hover:text-white"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <Mail size={16} className="text-white" />
                    </button>
                    <button
                      className="p-2 rounded-full transition-colors duration-200 hover:text-white"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <Facebook size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - 1 lawyer */}
        <div className="block md:hidden">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="relative">
              <img
                src={getMobileLawyer().image}
                alt={getMobileLawyer().name}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {getMobileLawyer().name}
              </h3>
              <p className="text-gray-600 mb-4">{getMobileLawyer().title}</p>
              <div className="flex justify-center space-x-4">
                <button
                  className="p-2 rounded-full transition-colors duration-200"
                  style={{ backgroundColor: "#FCA311" }}
                >
                  <Phone size={16} className="text-white" />
                </button>
                <button
                  className="p-2 rounded-full transition-colors duration-200"
                  style={{ backgroundColor: "#FCA311" }}
                >
                  <Mail size={16} className="text-white" />
                </button>
                <button
                  className="p-2 rounded-full transition-colors duration-200"
                  style={{ backgroundColor: "#FCA311" }}
                >
                  <Facebook size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full text-white transition-colors duration-200 hover:opacity-80"
            style={{ backgroundColor: "#FCA311" }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full text-white transition-colors duration-200 hover:opacity-80"
            style={{ backgroundColor: "#FCA311" }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {lawyers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? "opacity-100"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              style={{
                backgroundColor: index === currentIndex ? "#FCA311" : undefined,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawyersTeam;
