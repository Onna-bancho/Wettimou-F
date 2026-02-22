import { useState, useEffect } from "react";

const Navbar = () => {
  // Line 5: scrolled state, fully used in JSX → ESLint-safe
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Detect any scroll and immediately update header
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 15);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-black/70 backdrop-blur"
      }`}
    >
      <nav
        className={`flex items-center justify-between mx-auto max-w-7xl px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 select-none">
          <div
            className={`flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all duration-300 ${
              scrolled ? "h-9 w-9" : "h-11 w-11"
            }`}
          >
            <img
              src="/images/Wettimou_logo.jpeg"
              alt="Wettimou Logo"
              className="h-[85%] w-[85%] rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`font-semibold tracking-wide text-white transition-all duration-300 ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              Wettimou
            </span>
            <span className="text-xs tracking-widest uppercase text-white/60">
              Foundation
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="items-center hidden gap-10 text-sm font-medium md:flex">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="transition-colors duration-200 text-white/80 hover:text-white"
              >
                {link.name}
              </a>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#get-involved"
            className="px-5 py-2 text-sm font-semibold text-black transition duration-200 bg-pink-600 rounded-md hover:bg-pink-500"
          >
            Support Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-black border-t md:hidden border-white/10 animate-slide-down">
          <ul className="px-6 py-6 space-y-5 text-center">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block transition text-white/80 hover:text-pink-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-6">
            <a
              href="#get-involved"
              onClick={() => setOpen(false)}
              className="block w-full py-2 font-semibold text-center text-black transition bg-pink-600 rounded-md hover:bg-pink-500"
            >
              Support Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
