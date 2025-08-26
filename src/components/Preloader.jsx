import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        // Fade out preloader when loading finishes
        gsap.to(loaderRef.current, {
          duration: 1,
          opacity: 0,
          scale: 0.95,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    // Step 1: Animate text letter by letter
    const letters = textRef.current.querySelectorAll("span");
    tl.fromTo(
      letters,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
      }
    );

    // Step 2: Animate progress bar
    tl.to(progressRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
    });

    // Step 3: Hold for a moment before exit
    tl.to({}, { duration: 0.3 });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-[9999]"
    >
      {/* Animated Text */}
      <h1
        ref={textRef}
        className="text-white text-4xl md:text-5xl font-bold flex overflow-hidden gap-1"
      >
        {"Mohit Gupta".split("").map((letter, i) => (
          <span key={i} className="inline-block transform translate-y-full">
            {letter}
          </span>
        ))}
      </h1>

      {/* Loading Bar */}
      <div className="w-64 mt-6 h-[3px] bg-gray-700 rounded-full overflow-hidden">
        <div ref={progressRef} className="h-full bg-white w-0"></div>
      </div>

      {/* Tagline */}
      <p className="mt-4 text-gray-400 text-sm tracking-wide">
        Loading awesome experience...
      </p>
    </div>
  );
};

export default Preloader;
