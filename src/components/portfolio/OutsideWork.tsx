import { Globe2, HeartHandshake, Trophy } from "lucide-react";

const OutsideWork = () => (
  <section className="bg-background py-10 sm:py-14">
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
      <div className="bg-gradient-to-br from-card to-card/90 border-2 border-primary rounded-2xl p-5 sm:p-7 shadow-sm">
        <p className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3">
          Outside work
        </p>
        <p className="text-foreground/80 text-sm sm:text-base leading-relaxed italic">
          Outside work, MS carries +8 years of competitive sport at domestic and international
          level, currently representing the Finnish national cricket team ahead of World Cup
          qualifiers. Alongside this, +6 years of volunteering across local and
          international organisations have shaped habits of showing up, following through, and
          working effectively across very different cultures and contexts.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-xs sm:text-sm text-muted-foreground">
            <Trophy size={16} className="text-primary" />
            Competitive sport discipline
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-xs sm:text-sm text-muted-foreground">
            <Globe2 size={16} className="text-primary" />
            International team experience
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-xs sm:text-sm text-muted-foreground">
            <HeartHandshake size={16} className="text-primary" />
            Long-term volunteering impact
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OutsideWork;
