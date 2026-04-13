import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -250 : 250, behavior: "smooth" });
  };

  return (
    <section id="references" className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Companies and Projects
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Here are some of the organizations I've worked with and contributed to:
        </p>

        <div className="relative flex items-center gap-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="shrink-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide items-center py-4 snap-x"
            style={{ scrollbarWidth: "none" }}
          >
            {companies.map((name) => (
              <div
                key={name}
                className="shrink-0 bg-card rounded-lg px-8 py-5 shadow-sm border border-border min-w-[200px] snap-center"
              >
                <span className="font-bold text-foreground text-sm whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="shrink-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Companies;
