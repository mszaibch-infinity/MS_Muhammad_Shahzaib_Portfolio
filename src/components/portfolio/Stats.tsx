const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Emissions Campaigns" },
  { value: "EU ETS", label: "Compliance Expertise" },
  { value: "3", label: "Countries Worked In" },
];

const Stats = () => (
  <section className="bg-primary py-20">
    <div className="max-w-[1100px] mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
        Some interesting numbers about me:
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-12 max-w-2xl">
        Finnish-based environmental professional with hands-on experience across{" "}
        <strong className="text-primary-foreground font-bold">
          Pakistan, Finland, and international projects.
        </strong>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-5xl md:text-6xl font-black text-primary-foreground mb-2">
              {s.value}
            </p>
            <p className="text-primary-foreground/70 text-sm uppercase tracking-wider font-medium">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
