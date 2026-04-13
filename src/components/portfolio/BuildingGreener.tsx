import buildingImg from "@/assets/building-greener.jpg";

const BuildingGreener = () => (
  <section className="relative py-0">
    {/* Curved top edge */}
    <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{ borderRadius: '0 0 50% 50%' }} />

    {/* Background image section */}
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src={buildingImg}
          alt="Environmental monitoring"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">
          Building a Greener, More Sustainable Business?
        </h2>
        <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
          I help industries turn environmental challenges into actionable improvements. From emissions
          compliance to sustainability reporting, I provide hands-on support to help your business meet
          regulatory targets while improving processes and products.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:bg-primary/90 transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </div>

    {/* Curved bottom edge */}
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-secondary" style={{ borderRadius: '50% 50% 0 0' }} />
  </section>
);

export default BuildingGreener;
