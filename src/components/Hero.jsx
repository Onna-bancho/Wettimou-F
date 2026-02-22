import { useState } from "react";

const Hero = () => {
  const [pressed, setPressed] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  const handlePressStart = () => setPressed(true);
  const handlePressEnd = () => setPressed(false);

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector("#get-involved");
    if (target) target.scrollIntoView({ behavior: "smooth" });
    else window.location.hash = "#get-involved";
  };

  const openDonateModal = () => setShowDonateModal(true);
  const closeDonateModal = () => setShowDonateModal(false);

  return (
    <section className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/marian-jenis.jpg"
          alt="Hero Background"
          className="object-cover w-full h-full blur-sm brightness-75"
        />
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
          Support & Empowerment for Young Girls & Single Moms
        </h1>

        <p className="mt-4 text-lg text-white/90 md:text-xl">
          Join us in creating opportunities, education, and safe spaces for women and girls to thrive.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-center">
          <a
            href="#get-involved"
            onMouseDown={handlePressStart}
            onMouseUp={handlePressEnd}
            onMouseLeave={handlePressEnd}
            onTouchStart={handlePressStart}
            onTouchEnd={handlePressEnd}
            onTouchCancel={handlePressEnd}
            onClick={handleClick}
            className={`w-full sm:w-auto px-8 py-3 font-semibold rounded-md shadow-md text-black bg-white transition-transform duration-150 hover:bg-gray-100 hover:scale-102 focus:outline-none ${
              pressed ? "scale-95 bg-gray-50" : ""
            }`}
          >
            Get Involved
          </a>

          <button
            onClick={openDonateModal}
            className="w-full px-8 py-3 font-semibold text-white transition-colors duration-150 bg-pink-600 rounded-md shadow-md sm:w-auto hover:bg-pink-700 focus:outline-none"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Softer Decorative Shapes (No animation) */}
      <div className="absolute bg-pink-300 rounded-full -bottom-24 left-1/4 w-60 h-60 opacity-10 blur-3xl"></div>
      <div className="absolute bg-pink-400 rounded-full -top-24 right-1/3 w-72 h-72 opacity-10 blur-3xl"></div>

      {/* Donate Modal */}
      {showDonateModal && (
        <div
          onClick={closeDonateModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-11/12 max-w-lg p-8 bg-white rounded-lg shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-semibold text-pink-600">
              Donate to Wettimou
            </h2>

            <p className="mb-6 text-gray-700">
              The donation system is being prepared. For now, you can reach out to us via email for guidance on how to contribute.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=wettimou@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 font-semibold text-white transition-colors duration-150 bg-pink-600 rounded-md hover:bg-pink-700"
            >
              Email Us to Donate
            </a>

            <button
              onClick={closeDonateModal}
              className="absolute text-gray-500 top-3 right-3 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
