import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20, // MOVE 20% ON X-AXIS
      scrollTrigger: {
        target: "#title-service-1", // SCROLL WHEN ELEMENT APPEARS IN SCROLL
        scrub: true, // FOR SMOOTH SCROLLING
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30, // MOVE 30% TO -X-AXIS
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 50,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -50,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });

  return (
    <section className="mt-10 sm:mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      <div id="title-service-1">
        <p>Innovation</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-5 sm:gap-10 translate-x-16"
      >
        <p className="font-normal">Scratch</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-5 sm:gap-10 -translate-x-24 sm:-translate-x-48"
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Scalability</p>
      </div>
      <div id="title-service-4" className="translate-x-32">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
