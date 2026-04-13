import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:mszaibch@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0APhone: ${formData.phone}%0AEmail: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
          Get in touch
        </h2>
        <p className="text-muted-foreground text-lg mb-4">
          Drop me a line, and I will get back to you as soon as I can!
        </p>
        <p className="text-muted-foreground mb-2">
          Also, please remember to leave your email and phone number.
        </p>
        <p className="text-muted-foreground mb-8">
          You can also send me an email. My email can be found below.
        </p>

        <div className="flex flex-wrap gap-4 mb-12 text-sm text-muted-foreground">
          <a href="mailto:mszaibch@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} /> mszaibch@gmail.com
          </a>
          <a href="tel:+358449285931" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={16} /> +358 44 928 5931
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-border rounded-lg px-5 py-4 text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
          <div className="grid md:grid-cols-2 gap-6">
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
            rows={6}
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
      </div>
    </section>
  );
};

export default Contact;
