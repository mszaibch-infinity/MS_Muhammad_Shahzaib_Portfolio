import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => (
  <section id="contact" className="bg-foreground py-24">
    <div className="max-w-[1100px] mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
        Get In Touch
      </h2>
      <p className="text-primary-foreground/70 text-lg max-w-xl mb-10">
        Interested in collaborating on environmental projects or need expert consultation? Let's talk.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:mszaibch@gmail.com"
          className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary/20 transition-colors px-6 py-4 rounded-xl"
        >
          <Mail className="text-primary" size={20} />
          <span className="text-primary-foreground text-sm font-medium">mszaibch@gmail.com</span>
        </a>
        <a
          href="tel:+358449285931"
          className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary/20 transition-colors px-6 py-4 rounded-xl"
        >
          <Phone className="text-primary" size={20} />
          <span className="text-primary-foreground text-sm font-medium">+358 44 928 5931</span>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-shahzaib-052ba0291/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary/20 transition-colors px-6 py-4 rounded-xl"
        >
          <Linkedin className="text-primary" size={20} />
          <span className="text-primary-foreground text-sm font-medium">LinkedIn</span>
        </a>
        <div className="flex items-center gap-3 bg-primary-foreground/10 px-6 py-4 rounded-xl">
          <MapPin className="text-primary" size={20} />
          <span className="text-primary-foreground text-sm font-medium">Finland</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
