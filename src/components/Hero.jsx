const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen px-4 overflow-hidden text-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/marian-jenis.jpg"
          alt="Hero Background"
          className="object-cover w-full h-full blur-sm"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="mb-6 text-4xl font-bold text-pink-600 md:text-5xl">
          Support & Empowerment for Young Girls & Single Mothers
        </h1>
        <p className="mb-8 text-lg md:text-1xl">
            Supporting single mothers and young girls to thrive with dignity and hope.
        </p>
        <button className="px-6 py-3 font-semibold text-black transition bg-white rounded-lg hover:bg-pink-600 hover:text-white">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
