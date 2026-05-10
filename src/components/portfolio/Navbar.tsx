import { useState } from "react";
import { Menu, X } from "lucide-react";
import CVDialog from "./CVDialog";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Expertise", href: "#drives" },
  { label: "Projects", href: "#projects" },
  { label: "Get in touch!", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md pt-[env(safe-area-inset-top)]">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <a href="/" className="text-primary-foreground font-bold text-lg sm:text-xl tracking-tight shrink-0">
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
            <button
              onClick={() => setCvOpen(true)}
              className="text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              CV
            </button>
          </div>
          <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-foreground/95 backdrop-blur-md px-4 sm:px-6 pb-6 pt-2 flex flex-col gap-3 border-t border-primary-foreground/10">
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
            <button
              onClick={() => {
                setOpen(false);
                setCvOpen(true);
              }}
              className="text-left text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              CV
            </button>
          </div>
        )}
      </nav>
      <CVDialog open={cvOpen} onOpenChange={setCvOpen} />
    </>
  );
};

export default Navbar;
