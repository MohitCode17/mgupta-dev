import React, { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import Works from "./sections/Works";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <ReactLenis
          root
          className="relative w-full min-h-screen overflow-x-hidden"
        >
          <Navbar />
          <Hero />
          <ServiceSummary />
          <Services />
          <About />
          <Works />
          <ContactSummary />
          <Contact />
        </ReactLenis>
      )}
    </>
  );
};

export default App;
