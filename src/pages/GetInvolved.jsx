import React from "react";

const GetInvolved = () => {
  // Encode the subject and body so it works in the URL
  const gmailLink = `https://mail.google.com/mail/?view=cm&to=wettimou@gmail.com&su=${encodeURIComponent(
    "Get Involved"
  )}&body=${encodeURIComponent(
    "Hi Wettimou,\n\nI want to learn more about how to get involved."
  )}`;

  return (
    <section
      id="get-involved"
      className="relative flex items-center justify-center w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/Wettimou.jpeg"
          alt="Community support"
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl px-4 py-12 text-center text-white sm:px-6 sm:py-16 md:max-w-3xl md:px-8 lg:px-10 lg:py-20">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Get Involved
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg lg:text-xl">
          Join us in empowering women and children through education,
          healthcare, and economic opportunities.
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
  );
};

export default GetInvolved;
