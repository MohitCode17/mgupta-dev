import Marquee from "../components/Marquee";

const ContactSummary = () => {
  const items = [
    "Curiosity",
    "Craftsmanship",
    "Growth",
    "Resilience",
    "Vision",
  ];

  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  return (
    <section className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16">
      {/* MARQUEE ANIMATION */}
      <Marquee items={items} />

      <div className="font-light text-center contact-text-responsive overflow-hidden">
        <p>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">meaningful</span> <br />
          web app <span className="text-gold">together</span> “
        </p>
      </div>

      <Marquee
        items={items2}
        reverse={true}
        className="text-white bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
