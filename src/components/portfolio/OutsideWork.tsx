import { Globe2, HeartHandshake, Trophy } from "lucide-react";
import outsideWorkCricket from "@/assets/outside-work-cricket.png";

const OutsideWork = () => (
  <section className="bg-background py-10 sm:py-14">
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-gradient-to-br from-card via-card to-card/95 p-5 sm:p-7 lg:p-8 shadow-sm">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-primary/5 blur-2xl"
          aria-hidden
        />

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 lg:items-center">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 min-w-0">
            <p className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em]">
              Outside work
            </p>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed italic">
              Outside work, MS carries +8 years of competitive sport at domestic and international level,
              currently representing the Finnish national cricket team ahead of World Cup qualifiers. Alongside
              this, +6 years of volunteering across local and international organisations have shaped habits of
              showing up, following through, and working effectively across very different cultures and contexts.
            </p>
            <div className="mt-1 grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-xs sm:text-sm text-muted-foreground">
                <Trophy size={16} className="text-primary shrink-0" />
                Competitive sport discipline
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-xs sm:text-sm text-muted-foreground">
                <Globe2 size={16} className="text-primary shrink-0" />
                International team experience
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-xs sm:text-sm text-muted-foreground">
                <HeartHandshake size={16} className="text-primary shrink-0" />
                Long-term volunteering impact
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:items-center">
            <figure className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-[340px]">
              <div
                className="absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent opacity-80 blur-xl"
                aria-hidden
              />
              <div className="relative aspect-[3/4] w-full rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] ring-1 ring-primary/25 ring-offset-2 ring-offset-card">
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-muted/30">
                  <img
                    src={outsideWorkCricket}
                    alt="Celebrating on the pitch in national team colours"
                    className="h-full w-full object-cover object-[center_12%] sm:object-[center_8%]"
                    loading="lazy"
                    width={640}
                    height={853}
                    decoding="async"
                  />
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-card via-card/25 to-transparent"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5"
                    aria-hidden
                  />
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OutsideWork;
