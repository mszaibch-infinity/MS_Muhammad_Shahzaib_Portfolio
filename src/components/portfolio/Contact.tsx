import { useState } from "react";
import { Send, Mail, Phone, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:mszaibch@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0APhone: ${formData.phone}%0AEmail: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <div>
            <p className="font-['Playfair_Display',serif] italic text-2xl md:text-3xl text-muted-foreground mb-2">
              Let's discuss!
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-10">
              Get in touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-border rounded-lg px-5 py-4 text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-border rounded-lg px-5 py-4 text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
                <input
                  type="tel"
                  placeholder="Telephone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-border rounded-lg px-5 py-4 text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full border border-border rounded-lg px-5 py-4 text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-foreground text-background font-bold text-sm uppercase tracking-wider px-10 py-4 rounded hover:bg-foreground/80 transition-colors"
              >
                <Send size={16} />
                Send
              </button>
            </form>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-10">
              <a
                href="mailto:mszaibch@gmail.com"
                className="w-12 h-12 rounded-full bg-[#EA4335] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+358449285931"
                className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-shahzaib-052ba0291/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background hover:opacity-80 transition-opacity"
                aria-label="Website"
              >
                <Globe size={20} />
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
