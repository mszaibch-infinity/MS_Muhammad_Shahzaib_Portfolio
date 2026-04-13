import { useState } from "react";
import { FileDown, ExternalLink } from "lucide-react";
import aboutImg from "@/assets/about-portrait.jpg";

const About = () => {
  const [tab, setTab] = useState<"about" | "cv">("about");

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="relative grid md:grid-cols-2 gap-0 items-stretch">
          {/* Left: Image */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="Muhammad Shahzaib"
              className="w-full h-full object-cover rounded-l-xl md:rounded-r-none rounded-t-xl md:rounded-t-none min-h-[400px]"
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

          {/* Right: Overlapping card */}
          <div className="bg-card p-8 md:p-12 flex flex-col justify-center rounded-r-xl md:rounded-l-none rounded-b-xl md:rounded-b-none shadow-lg md:-ml-12 relative z-10">
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setTab("about")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  tab === "about"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setTab("cv")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  tab === "cv"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                CV
              </button>
            </div>

            {tab === "about" && (
              <>
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
              </>
            )}

            {tab === "cv" && (
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Download my full CV or view it directly in your browser.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/CV_Muhammad_Shahzaib.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-primary/90 transition-colors"
                  >
                    <FileDown size={18} />
                    Download CV
                  </a>
                  <a
                    href="/CV_Muhammad_Shahzaib.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-foreground text-foreground font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-foreground hover:text-background transition-colors"
                  >
                    <ExternalLink size={18} />
                    View in Browser
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
