import { useEffect, useRef } from "react";

const companies = [
  "Paroc Oy",
  "University of Eastern Finland",
  "Environmental Protection Agency Punjab",
  "Pakistan Council of Scientific & Industrial Research",
  "Bureau Veritas",
  "Visiting Energy",
];

const Companies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId: number;
    let pos = 0;
    const speed = 0.5;

    const step = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animationId = requestAnimationFrame(step);
    };
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Companies and Projects
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Here are some of the organizations I've worked with and contributed to:
        </p>
        <div
          ref={scrollRef}
          className="flex gap-12 overflow-hidden items-center py-4"
        >
          {[...companies, ...companies].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="shrink-0 bg-card rounded-lg px-8 py-5 shadow-sm border border-border min-w-[200px]"
            >
              <span className="font-bold text-foreground text-sm whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
