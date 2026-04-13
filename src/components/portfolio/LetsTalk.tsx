import letsTalkBg from "@/assets/lets-talk-bg.jpg";

const LetsTalk = () => (
  <section className="relative py-24">
    <div className="absolute inset-0">
      <img
        src={letsTalkBg}
        alt=""
        className="w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-foreground/70" />
    </div>
    <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
      <h2 className="font-['Playfair_Display',serif] italic text-4xl md:text-5xl text-primary-foreground mb-6">
        Let's talk!
      </h2>
      <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4">
        If you're looking to improve your environmental performance, let's see how I can help.
        Whether it's emissions compliance, sustainability reporting, or process optimization —{" "}
        <strong className="text-primary-foreground font-bold">
          reach out before challenges become costly.
        </strong>{" "}
        I've been on the ground myself.
      </p>
      <a
        href="#contact"
        className="inline-flex items-center justify-center bg-foreground text-primary-foreground font-bold text-sm uppercase tracking-wider px-10 py-4 rounded mt-6 hover:bg-foreground/80 transition-colors"
      >
        Get In Touch
      </a>
    </div>
  </section>
);

export default LetsTalk;
