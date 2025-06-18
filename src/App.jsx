import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Service from "./components/Service";
import FAQSection from "./components/Faqs";

function App() {
  return (
    <div className="min-h-screen bg-[#14213D] text-white">
      <Navbar />
      <HeroSection />
      <Service />
      <FAQSection />
    </div>
  );
}

export default App;
