import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur">
      <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/Wettimou_logo.jpeg" alt="Wettimou Logo" className="rounded-full h-7" />
          <span className="text-lg font-bold text-white-600">Wettimou</span>
        </a>

        {/* Desktop */}
        <ul className="hidden gap-8 text-sm md:flex">
          {links.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition hover:text-pink-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="px-6 pb-6 space-y-4 bg-black md:hidden">
          {links.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 border-b border-white/10 hover:text-pink-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
