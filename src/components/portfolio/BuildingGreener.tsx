import buildingImg from "@/assets/building-greener.jpg";

const BuildingGreener = () => (
  <section className="relative py-24">
    <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src={buildingImg}
          alt="Environmental monitoring at industrial plant"
          className="rounded-xl shadow-lg w-full"
          loading="lazy"
          width={1920}
          height={1080}
        />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
          Building Greener Business?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          I help industries turn environmental challenges into actionable improvements. From emissions
          compliance to sustainability reporting, I provide hands-on support to help your business meet
          regulatory targets while improving processes and products.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Whether you're navigating EU ETS requirements, need an environmental impact assessment, or
          want data-driven insights into your operations —{" "}
          <strong className="text-foreground font-bold">let's find the path forward together.</strong>
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center border-2 border-foreground text-foreground font-bold text-sm uppercase tracking-wider px-8 py-4 rounded hover:bg-foreground hover:text-background transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

export default BuildingGreener;
