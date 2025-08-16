import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedTextLines from "./AnimatedTextLines";

const AnimatedHeaderSection = ({
  title,
  subTitle,
  text,
  textColor,
  withScrollTrigger,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? { trigger: contextRef.current }
        : undefined,
    });
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
    <div ref={contextRef}>
      {/* WE USING CLIP PATH SO THAT EVERYTHING OUTSIDE OF THIS CLIP PATH WILL GOING TO BE INVISIBLE. WE TRYING TO CREATE A MASK */}
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.3rem] uppercase px-5 sm:px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-5 sm:px-10 pb-1">
            <h1
              className={`flex flex-col flex-wrap gap-12 ${textColor} uppercase banner-text-responsive sm:gap-16 md:block`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-5 sm:px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="pt-12 pb-18 sm:pt-0 sm:pb-0 sm:py-16 text-end">
          <AnimatedTextLines
            text={text}
            className={`font-light uppercase value-text-responsive ${textColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
