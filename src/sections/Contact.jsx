import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Got a question or a project idea? 
We’d love to hear from you and explore it together!`;

  const items = [
    "You dream, I deliver",
    "You dream, I deliver",
    "You dream, I deliver",
    "You dream, I deliver",
    "You dream, I deliver",
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-[#e4e5df]"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"I’m just one message away."}
          title={"Contact"}
          text={text}
          textColor={"text-black"}
          withScrollTrigger={true}
        />

        <div className="flex px-5 sm:px-10 font-light text-black uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-black/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl">
                mohitgupta1630.mg@gmail.com
              </p>
            </div>

            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-black/30" />
              <p className="text-xl lowercase md:text-2xl">+91-9899950024</p>
            </div>

            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-black/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-black/80 transition-colors duration-200"
                  >
                    {"[ "}
                    {social.name}
                    {" ]"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-black bg-transparent" />
    </section>
  );
};

export default Contact;
