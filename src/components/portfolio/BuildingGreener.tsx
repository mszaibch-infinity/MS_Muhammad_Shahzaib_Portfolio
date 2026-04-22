import scalingImg from "@/assets/scaling-analytics.jpg";

const BuildingGreener = () => (
  <section className="relative">
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src={scalingImg}
          alt="Data analytics and sustainability growth"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-24 md:py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
          Scaling up — but held back by emissions, compliance,
          and complex data?
        </h2>
        <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
          I support industries with advanced environmental and technical solutions, enabling them to scale
          processes and products while ensuring compliance and meeting sustainability targets.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:bg-primary/90 transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

export default BuildingGreener;
