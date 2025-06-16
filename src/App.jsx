import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";

function App() {
  return (
    <div className="min-h-screen bg-[#14213D] text-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
