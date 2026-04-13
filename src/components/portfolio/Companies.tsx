import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logoParoc from "@/assets/logos/paroc.png";
import logoUef from "@/assets/logos/uef.png";
import logoEpa from "@/assets/logos/epa.png";
import logoPcsir from "@/assets/logos/pcsir.png";
import logoBv from "@/assets/logos/bureau-veritas.png";
import logoVe from "@/assets/logos/visiting-energy.png";

const companies = [
  { name: "Paroc Oy", logo: logoParoc },
  { name: "University of Eastern Finland", logo: logoUef },
  { name: "EPA Punjab", logo: logoEpa },
  { name: "PCSIR", logo: logoPcsir },
  { name: "Bureau Veritas", logo: logoBv },
  { name: "Visiting Energy", logo: logoVe },
];

const Companies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const autoScroll = () => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 200, behavior: "smooth" });
      }
    };

    intervalRef.current = setInterval(autoScroll, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    clearInterval(intervalRef.current);
    el.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
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
            className="shrink-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-12 overflow-x-auto items-center py-4"
            style={{ scrollbarWidth: "none" }}
          >
            {[...companies, ...companies].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="shrink-0 flex items-center justify-center w-[160px] h-[80px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="shrink-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Companies;
