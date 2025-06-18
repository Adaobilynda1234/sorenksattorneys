import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Scale,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#14213D] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#FCA311] rounded flex items-center justify-center">
                <Scale size={16} className="text-[#14213D]" />
              </div>
              <h2 className="text-xl font-bold text-[#FCA311]">
                SorenksAttorneys
              </h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              We stand by your side, providing expert legal guidance and
              unwavering support to protect your rights and ensure justice is
              served.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-[#FCA311] rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors cursor-pointer">
                <Facebook size={16} className="text-[#14213D]" />
              </div>
              <div className="w-8 h-8 bg-[#FCA311] rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors cursor-pointer">
                <Twitter size={16} className="text-[#14213D]" />
              </div>
              <div className="w-8 h-8 bg-[#FCA311] rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors cursor-pointer">
                <Instagram size={16} className="text-[#14213D]" />
              </div>
              <div className="w-8 h-8 bg-[#FCA311] rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors cursor-pointer">
                <Linkedin size={16} className="text-[#14213D]" />
              </div>
            </div>

            {/* Open Hour */}
            <div className="space-y-2">
              <h3 className="text-[#FCA311] font-semibold">Open Hour</h3>
              <p className="text-gray-300 text-sm">
                Monday - Friday: 9:00 AM - 4:00 PM
              </p>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#FCA311] rounded-full flex items-center justify-center mt-0.5">
                  <Phone size={12} className="text-[#14213D]" />
                </div>
                <div className="text-sm text-gray-300">
                  <p>+2348127350477</p>
                  <p>+2347066055803</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#FCA311] rounded-full flex items-center justify-center mt-0.5">
                  <Mail size={12} className="text-[#14213D]" />
                </div>
                <div className="text-sm text-gray-300">
                  <p>charlesudeh88@gmail.com</p>
                  <p>charlesudeh88@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#FCA311] rounded-full flex items-center justify-center mt-0.5">
                  <MapPin size={12} className="text-[#14213D]" />
                </div>
                <div className="text-sm text-gray-300">
                  <p>No.3 Obafalabi street,Ojodu</p>
                  <p>Ikeja,Lagos state</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-[#FCA311] cursor-pointer transition-colors">
                • Litigation and Dispute Resolution
              </li>
              <li className="hover:text-[#FCA311] cursor-pointer transition-colors">
                • Real Estate and Property Law
              </li>
              <li className="hover:text-[#FCA311] cursor-pointer transition-colors">
                • Human Rights and Advocacy
              </li>
              <li className="hover:text-[#FCA311] cursor-pointer transition-colors">
                • Taxation and Financial Law
              </li>
              <li className="hover:text-[#FCA311] cursor-pointer transition-colors">
                • Immigration Law
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 SorenksAttorneys. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#FCA311] transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#FCA311] transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
