import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import LawyersTeam from "./components/LawyerTeam";
import Service from "./components/Service";
import FAQSection from "./components/Faqs";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

function App() {
  return (
    <div className="min-h-screen bg-[#14213D] text-white">
      <Navbar />
      {/* Home Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <Service />
      </section>

      <LawyersTeam />

      {/* About Section (linking to FAQs) */}
      <section id="about">
        <FAQSection />
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
