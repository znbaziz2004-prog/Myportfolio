import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-line">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a
          href="#home"
          className="font-display font-extrabold text-xl tracking-tight text-paper"
          onClick={() => setOpen(false)}
        >
          Zainab<span className="text-signal">.</span>Aziz
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-wider">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted hover:text-signal transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden text-paper text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-6 font-mono text-sm uppercase tracking-wider border-t border-line">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-muted hover:text-signal transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
