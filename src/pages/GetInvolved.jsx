import React from "react";

const GetInvolved = () => {
  // Gmail link with subject and body
  const gmailLink = `https://mail.google.com/mail/?view=cm&to=wettimou@gmail.com&su=${encodeURIComponent(
    "Get Involved"
  )}&body=${encodeURIComponent(
    "Hi Wettimou,\n\nI want to learn more about how to get involved."
  )}`;

  return (
    <section
      id="get-involved"
      className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Background Image with subtle dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/Wettimou.jpeg"
          alt="Community support"
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl px-6 py-12 text-center text-white sm:px-8 sm:py-16 md:max-w-3xl lg:px-10 lg:py-20">
        <h2 className="text-3xl font-bold text-pink-600 sm:text-4xl md:text-5xl">
          Get Involved
        </h2>

        <p className="mt-4 text-sm text-gray-300 sm:text-base md:text-lg">
          Join us in empowering women and children through education, healthcare, and economic opportunities.
          Your interest matters—reach out to learn how you can make a meaningful contribution.
        </p>

        <a
          href={gmailLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 mt-6 font-semibold text-white transition-all duration-200 bg-pink-600 rounded-lg shadow-sm hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          Email Us to Get Involved
        </a>
      </div>
    </section>
  );
};

export default GetInvolved;