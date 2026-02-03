import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);

  useEffect(() => {
    // Detect any scroll and immediately update header
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

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
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-150 ${scrolled || hoverMenu ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-black/70 backdrop-blur'}`}>
      <nav className={`flex items-center justify-between px-6 mx-auto max-w-7xl transition-all duration-150 ${scrolled || hoverMenu ? 'py-2' : 'py-4'}`}>
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
                className="transition-colors duration-150 hover:text-pink-500 active:text-pink-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="text-2xl transition-colors duration-150 md:hidden hover:text-pink-500 active:text-pink-600"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul 
          className="w-full px-6 pb-6 space-y-2 bg-black/95 md:hidden"
          onMouseEnter={() => setHoverMenu(true)}
          onMouseLeave={() => setHoverMenu(false)}
        >
          {links.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block w-full px-4 py-3 text-white transition-all duration-150 rounded-lg hover:bg-pink-500/20 hover:text-pink-400 active:bg-pink-500/40 active:text-pink-300"
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
