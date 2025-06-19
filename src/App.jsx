import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import LawyersTeam from "./components/LawyerTeam";
import Service from "./components/Service";
import FAQSection from "./components/Faqs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#14213D] text-white">
      <Navbar />
      <HeroSection />
      <Service />
      <LawyersTeam />

      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
