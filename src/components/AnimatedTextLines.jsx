import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null); // CONTAINER FOR ScrollTrigger
  const lineRefs = useRef([]);

  // SPLIT TEXT INTO NEW LINES
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  // SETTING UP GSAP ANIMATIONS TO LINES
  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        y: 100, // START 100px LOWER THAN THEIR FINAL POSITION
        opacity: 0,
        duration: 1,
        stagger: 0.3, // 0.3s DELAY IN EACH LINES
        ease: "back.out", // "OVERSHOOT BOUNCE" WHEN ANIMATION FINIHES
        scrollTrigger: {
          trigger: containerRef.current, // ONLY START ANIMATION WHEN THIS CONTAINER SCROLLS INTO VIEW.
        },
      });
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => (lineRefs.current[index] = el)}
          className="block tracking-wide leading-relaxed text-pretty"
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLines;
