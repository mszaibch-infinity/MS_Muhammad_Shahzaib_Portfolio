import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "References", href: "#references" },
  { label: "Get in touch!", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-primary-foreground font-bold text-xl tracking-tight">
          M<span className="text-primary">S</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
