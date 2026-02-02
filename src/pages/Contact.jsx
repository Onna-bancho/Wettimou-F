import { useNavigate, useLocation } from "react-router-dom";

const ContactFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavToHash = (e, id) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: id } });
    } else {
      scrollToSection(id);
    }
  };

  return (
    <footer className="px-4 py-16 text-white bg-black">
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto text-center md:grid-cols-3 md:text-left">
        {/* Column 1: Brand */}
        <div>
          <h2 className="mb-2 text-2xl font-bold text-pink-600">Wettimou</h2>
          <p className="text-sm text-gray-300">
            Supporting single mothers and young girls to thrive with dignity and hope.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="space-y-2 text-sm text-gray-300">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=wettimou@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-pink-600"
            >
              wettimou@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +237 693734904
          </p>
          <p>
            <strong>Address:</strong> North-West Bamenda, Cameroon
          </p>
        </div>

        {/* Column 3: Quick Links (Home added) */}
        <div className="space-y-2 text-sm text-gray-300">
          <a
            href="/#home"
            onClick={(e) => handleNavToHash(e, "home")}
            className="block transition-colors duration-300 hover:text-pink-600"
          >
            Home
          </a>
          <a
            href="/#about"
            onClick={(e) => handleNavToHash(e, "about")}
            className="block transition-colors duration-300 hover:text-pink-600"
          >
            About
          </a>
          <a
            href="/#what-we-do"
            onClick={(e) => handleNavToHash(e, "what-we-do")}
            className="block transition-colors duration-300 hover:text-pink-600"
          >
            What We Do
          </a>
          <a
            href="/#news"
            onClick={(e) => handleNavToHash(e, "news")}
            className="block transition-colors duration-300 hover:text-pink-600"
          >
            News & Media
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleNavToHash(e, "contact")}
            className="block transition-colors duration-300 hover:text-pink-600"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800" />

      <div className="mt-4 text-xs text-center text-gray-500">
        &copy; {new Date().getFullYear()} Wettimou. All rights reserved.
      </div>
    </footer>
  );
};

export default ContactFooter;
