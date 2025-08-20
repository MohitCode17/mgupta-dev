import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Particles } from "../components/Particles";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I help brands and startups
 grow faster 
 with premium, results-driven website & apps`;

  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-screen overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={isMobile ? 80 : 200}
        ease={80}
        color="#ffffff"
        refresh
      />

      <AnimatedHeaderSection
        title={"Mohit Gupta"}
        subTitle={"Zero Bugs. Infinite Ideas."}
        text={text}
        textColor={"text-white"}
      />
    </section>
  );
};

export default Hero;
