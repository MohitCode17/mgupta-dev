import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-auto">
      {/* NAVBAR------------------------------- */}
      <Navbar />
      <Hero />
      <ServiceSummary />
    </div>
  );
};

export default App;
