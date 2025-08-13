import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import ContactSummary from "./sections/ContactSummary";

const App = () => {
  return (
    <ReactLenis root className="relative w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <ContactSummary />
    </ReactLenis>
  );
};

export default App;
