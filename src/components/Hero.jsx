import { useState } from "react";

const Hero = () => {
  const [pressed, setPressed] = useState(false);

  const handlePressStart = () => setPressed(true);
  const handlePressEnd = () => setPressed(false);

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector("#get-involved");
    if (target) target.scrollIntoView({ behavior: "smooth" });
    else window.location.hash = "#get-involved";
  };
  return (
    <section className="relative flex items-center justify-center h-screen px-4 overflow-hidden text-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/marian-jenis.jpg"
          alt="Hero Background"
          className="object-cover w-full h-full blur-sm"
        />
        <div className="absolute inset-0 pointer-events-none bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl text-white">
        <h1 className="mb-6 text-4xl font-bold text-pink-600 md:text-5xl">
          Support & Empowerment for Young Girls & Single Mothers
        </h1>
        <p className="mb-8 text-lg md:text-1xl">
            Supporting single mothers and young girls to thrive with dignity and hope.
        </p>
        <a
          href="#get-involved"
          onMouseDown={handlePressStart}
          onMouseUp={handlePressEnd}
          onMouseLeave={handlePressEnd}
          onTouchStart={handlePressStart}
          onTouchEnd={handlePressEnd}
          onTouchCancel={handlePressEnd}
          onClick={handleClick}
          className={`inline-block px-6 py-3 font-semibold transition-colors duration-150 border-white rounded-lg hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white ${
            pressed
              ? "bg-black text-white scale-95"
              : "bg-white text-black"
          }`}
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
