import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Service from "./components/Service";

function App() {
  return (
    <div className="min-h-screen bg-[#14213D] text-white">
      <Navbar />
      <HeroSection />
      <Service />
    </div>
  );
}

export default App;
