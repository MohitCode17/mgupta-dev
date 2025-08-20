import { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]); // REFER TO AN ARRAY OF DOM ELEMENTS
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  // SETTING UP GSAP ANIMATION TO NAVBAR
  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    // CREATING PAUSED TIMELIME SO THAT WE CAN PLAY/REVERSE LATER. SO WHAT I MEAN BY THAT WHEN THE USER CLICKS ON THIS MENU ICON ANIMATIONS WILL GOING TO START
    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0, // ANIMATE TO 0% MAKE IT FULLY VISIBLE
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1, // MEANS EACH LINKS ANIMATE 0.1s AFTER THE PREVIOUS ONES
          duration: 0.5,
          ease: "power2.out",
        },
        "<" // START THIS ANIMATION AS THE SAME TIME AS PREVIOUS START(ABOVE ONE)
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2" // START THIS ANIMATION AFTER 0.2s THAN PREVIOUS ONE STARTS
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45, // ROTATE 45 DEGREE CLOCKWISE
        y: 3.3, // MOVE DOWN SLIGHTLY TO CENTER THE X
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []); // [] DEPENDENCY ARRAY: MEANS RUN ONLY WHEN COMPONENT MOUNT

  // TO HIDE/SHOW OF HAMBURGER MENU WHEN SCROLLING DOWN & UP
  useEffect(() => {
    let lastScrollY = window.scrollY; // TO DETERMINE THE DIRECTION
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // SHOW THE BURGER MENU WHEN SCROLLING UP
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10); // MEAN SCROLLING IS UP AND ELEMENT AT TOP OF THE PAGE SO DISPLAY BURGER ELSE SCROLLING DOWN

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true, // FOR OPTIMIZING SCROLLING PERFORMANCE
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* NAVIGATION BAR */}
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full bg-[#e4e5df] text-black/80 px-5 sm:px-10 uppercase py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        {/* NAVIGATION LINKS WRAPPER */}
        <div className="flex flex-col gap-y-2 text-4xl sm:text-5xl md:text-6xl lg:text-[78px]">
          {/* NAVIGATION LINKS */}
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  className="transition duration-300 cursor-pointer hover:text-black"
                  to={`${section}`}
                  smooth
                  offset={0}
                  duration={2000}
                >
                  {section}
                </Link>
              </div>
            )
          )}
        </div>

        {/* CONTACT INFORMATION WRAPPER */}
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-black/60">E-mail</p>
            <p className="sm:text-xl tracking-wider sm:tracking-widest lowercase text-pretty">
              mohitgupta1630.mg@gmail.com
            </p>
          </div>

          <div className="font-light">
            <p className="tracking-wider text-black/60">Social Media</p>
            <div className="flex flex-wrap flex-col md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="text-sm tracking-wider leading-loose hover:text-black transition-colors duration-300"
                >
                  {"[ "}
                  {social.name}
                  {" ]"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* HAMBURGER ICON */}
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-gold rounded-full cursor-pointer h-14 w-14 md:w-20 md:h-20 top-4 right-10"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
