import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 bg-foreground text-primary-foreground">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">Let's Connect</p>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Get In <span className="text-primary">Touch</span>
      </h2>
      <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
        Interested in collaborating on environmental projects or need expert consultation? Let's talk.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <a href="mailto:mszaibch@gmail.com" className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary/20 transition-colors px-6 py-4 rounded-xl">
          <Mail className="text-primary" size={20} />
          <span className="text-sm font-medium">mszaibch@gmail.com</span>
        </a>
        <a href="tel:+358449285931" className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary/20 transition-colors px-6 py-4 rounded-xl">
          <Phone className="text-primary" size={20} />
          <span className="text-sm font-medium">+358 44 928 5931</span>
        </a>
        <a href="#" className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary/20 transition-colors px-6 py-4 rounded-xl">
          <Linkedin className="text-primary" size={20} />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
        <div className="flex items-center gap-3 bg-primary-foreground/10 px-6 py-4 rounded-xl">
          <MapPin className="text-primary" size={20} />
          <span className="text-sm font-medium">Helsinki, Finland</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
