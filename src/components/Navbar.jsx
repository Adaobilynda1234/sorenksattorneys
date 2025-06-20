import React, { useState } from "react";
import { Menu, X, Scale } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openCalendly = () => {
    window.open("https://calendly.com/charlesudeh88", "_blank");
  };

  return (
    <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Scale className="w-8 h-8 text-[#FCA311]" />
          <span className="text-xl font-bold">SorenksAttorneys</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-white hover:text-[#FCA311] transition-colors"
          >
            Home
          </a>
          <a
            href="service"
            className="text-white hover:text-[#FCA311] transition-colors"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-white hover:text-[#FCA311] transition-colors"
          >
            About
          </a>
          <button
            onClick={openCalendly}
            className="bg-[#FCA311] text-[#14213D] px-6 py-2 rounded-md font-semibold hover:bg-[#E6920F] transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-700 transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#14213D] border-t border-gray-600 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#home"
              className="block text-white hover:text-[#FCA311] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="service"
              className="block text-white hover:text-[#FCA311] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>

            <a
              href="#about"
              className="block text-white hover:text-[#FCA311] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <button
              onClick={() => {
                openCalendly();
                setIsMenuOpen(false);
              }}
              className="w-full bg-[#FCA311] text-[#14213D] px-6 py-3 rounded-md font-semibold hover:bg-[#E6920F] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
