import { MessageCircle } from "lucide-react";

const Testimonial = () => (
  <section className="py-24 bg-background">
    <div className="max-w-[800px] mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
        Let people tell
      </h2>
      <p className="text-muted-foreground text-lg mb-8">
        This is what businesses have said about me:
      </p>
      <MessageCircle className="mx-auto text-muted-foreground mb-6" size={40} />
      <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
        "He made complex things easier to understand and provided actionable insights and practical
        solutions to work on — approaching compliance targets and identifying opportunities to improve
        our processes and products at the same time."
      </blockquote>
    </div>
  </section>
);

export default Testimonial;
