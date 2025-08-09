import React from "react";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <div className="bg-SageGray relative w-full min-h-screen overflow-x-auto">
      {/* NAVBAR------------------------------- */}
      <Navbar />
      <section id="home" className="min-h-screen bg-indigo-800" />
      <section id="services" className="min-h-screen bg-amber-700" />
      <section id="about" className="min-h-screen bg-DarkLava" />
      <section id="work" className="min-h-screen bg-cyan-600" />
      <section id="contact" className="min-h-screen bg-gold" />
    </div>
  );
};

export default App;
