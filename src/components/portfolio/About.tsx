import aboutImg from "@/assets/about-portrait.jpg";

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-0 items-stretch">
        {/* Left: Image with overlay title like Teemu */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="Muhammad Shahzaib"
            className="w-full h-full object-cover rounded-l-xl md:rounded-l-xl md:rounded-r-none rounded-t-xl md:rounded-t-none"
            loading="lazy"
            width={800}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-transparent rounded-l-xl md:rounded-r-none rounded-t-xl md:rounded-t-none">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground p-8">
              About Me
            </h2>
          </div>
        </div>
        {/* Right: Text */}
        <div className="bg-card p-8 md:p-12 flex flex-col justify-center rounded-r-xl md:rounded-l-none rounded-b-xl md:rounded-b-none shadow-lg">
          <p className="text-foreground text-lg mb-6">
            I'm Muhammad Shahzaib. Environmental Professional based in Finland.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I have 4+ years of hands-on experience helping industries achieve environmental
            compliance and sustainability goals. From emissions measurement campaigns aligned
            with EU ETS standards, to environmental impact assessments and GHG inventory
            management, I combine technical depth with cross-functional collaboration to deliver
            measurable environmental outcomes.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I've worked across Pakistan and Finland — in government, consulting, research labs,
            and manufacturing — always focused on turning environmental data into practical,
            actionable improvements.
          </p>
          <p className="text-foreground leading-relaxed">
            <strong>
              If you're looking for environmental expertise, the best place to start is a
              conversation.
            </strong>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
