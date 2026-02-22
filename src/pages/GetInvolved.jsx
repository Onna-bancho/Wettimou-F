import { useState } from "react";
import React from "react";
import { FaFacebookF, FaTiktok, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const HeroAndGetInvolved = () => {
  const [pressed, setPressed] = useState(false);

  // Hero CTA scroll
  const handleScrollToInvolved = (e) => {
    e.preventDefault();
    const target = document.querySelector("#get-involved");
    if (target) target.scrollIntoView({ behavior: "smooth" });
    else window.location.hash = "#get-involved";
  };

  // Gmail link for Get Involved
  const gmailLink = `https://mail.google.com/mail/?view=cm&to=wettimou@gmail.com&su=${encodeURIComponent(
    "Get Involved"
  )}&body=${encodeURIComponent(
    "Hi Wettimou,\n\nI want to learn more about how to get involved."
  )}`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-b from-pink-50 to-white">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/marian-jenis.jpg"
            alt="Hero Background"
            className="object-cover w-full h-full filter blur-sm brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl drop-shadow-lg">
            Support & Empowerment for Young Girls & Single Moms
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 drop-shadow-sm">
            Join us in creating opportunities, education, and safe spaces for women and girls to thrive.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-center">
            <a
              href="#get-involved"
              onMouseDown={() => setPressed(true)}
              onMouseUp={() => setPressed(false)}
              onMouseLeave={() => setPressed(false)}
              onTouchStart={() => setPressed(true)}
              onTouchEnd={() => setPressed(false)}
              onTouchCancel={() => setPressed(false)}
              onClick={handleScrollToInvolved}
              className={`w-full sm:w-auto px-8 py-3 font-semibold rounded-lg shadow-lg text-black bg-white transition-transform duration-150 hover:bg-pink-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white ${
                pressed ? "scale-95 bg-pink-50" : ""
              }`}
            >
              Get Involved
            </a>

            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-8 py-3 font-semibold text-white transition-colors duration-150 bg-pink-600 rounded-lg shadow-lg sm:w-auto hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* Subtle Decorative Shapes */}
        <div className="absolute bg-pink-300 rounded-full -bottom-20 left-1/4 w-72 h-72 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bg-pink-500 rounded-full -top-24 right-1/3 w-96 h-96 opacity-15 blur-3xl animate-pulse"></div>
      </section>

      {/* Get Involved Section */}
      <section
        id="get-involved"
        className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-black"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/Wettimou.jpeg"
            alt="Community support"
            className="object-cover w-full h-full brightness-90"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-2xl px-6 py-12 text-center text-white sm:px-8 sm:py-16 md:max-w-3xl lg:px-10 lg:py-20">
          <h2 className="text-3xl font-bold text-pink-600 sm:text-4xl md:text-5xl">
            Get Involved
          </h2>

          <p className="mt-4 text-base text-gray-200 sm:text-lg md:text-xl">
            Join us in empowering women and children through education, healthcare, and economic opportunities.
          </p>

          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 mt-6 text-sm font-semibold transition-all duration-300 bg-pink-600 rounded-lg sm:px-8 sm:py-3 sm:text-base md:px-8 md:py-3 md:text-lg hover:bg-pink-700 hover:scale-105 active:scale-95"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer / Social Media */}
      <footer className="px-6 py-16 text-white bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4 text-lg font-semibold text-gray-300">
            Follow us on social media
          </p>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://www.facebook.com/share/1WRA7c6m3k/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-pink-600 transition rounded-full bg-black/30 hover:bg-pink-600/20"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@wettimou?_r=1&_t=ZS-948HknWO7aXNow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-pink-600 transition rounded-full bg-black/30 hover:bg-pink-600/20"
            >
              <FaTiktok />
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            © 2026 Wettimou. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default HeroAndGetInvolved;