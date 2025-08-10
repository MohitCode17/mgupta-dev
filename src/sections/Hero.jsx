import { useRef } from "react";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  const aboutText = `I help brands and startups
grow faster 
with premium, results-driven website & apps`;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(contextRef.current, {
      y: "50vh", // START 50% BELOW FROM VIEWPORT HIGHT(SLIDES FROM BELOW)
      duration: 1,
      ease: "circ.out", // START FAST END SLOW
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <div ref={contextRef}>
        {/* WE USING CLIP PATH SO THAT EVERYTHING OUTSIDE OF THIS CLIP PATH WILL GOING TO BE INVISIBLE. WE TRYING TO CREATE A MASK */}
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
          <div
            ref={headerRef}
            className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
          >
            <p className="text-sm font-light tracking-[0.3rem] uppercase px-6 sm:px-10 text-black">
              Zero Bugs. Infinite Ideas.
            </p>
            <div className="px-6 sm:px-10 pb-1">
              <h1 className="flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block">
                Mohit Gupta
              </h1>
            </div>
          </div>
        </div>
        <div className="relative px-10 text-black">
          <div className="absolute inset-x-0 border-t-2" />
          <div className="py-12 sm:py-16 text-end">
            <AnimatedTextLines
              text={aboutText}
              className="font-light uppercase value-text-responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
