import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const imgRef = useRef(null);

  const text = `Passionate about building elegant, scalable solutions—
    from concept to launch,
    without compromising speed or quality`;

  const aboutText = `A self-taught developer who took the road less traveled into tech. Coming from a commerce background, had no formal computer science degree—just a growing fascination with how the web works and an urge to create. 
  few years ago, I started code through online resources, tutorials, and hands-on projects. What began as small experiments soon evolved into full-stack applications, high-performance solutions built with React, Node.js, Express, and MongoDB.

  When I’m not coding:
⚡️ Exploring new technology
🧗 Rock climbing for problem-solving under pressure
🏏 Play cricket to stay active and competitive`;

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.9,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-[#e4e5df] rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Built for today, ready for tomorrow"}
        title={"About"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-black/60">
        <img
          ref={imgRef}
          src="images/mohit.jpg"
          alt="Mohit Gupta"
          className="w-md rounded-3xl"
        />

        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
