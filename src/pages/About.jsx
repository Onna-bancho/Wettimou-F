const About = () => {
  return (
    <section  
      id="about"
      className="w-full px-6 bg-white py-28"
    > 
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="mb-4 text-3xl font-semibold tracking-widest text-pink-600 uppercase">
          About Wettimou
        </p>

        {/* Main heading */}
        <h2 className="mb-10 text-4xl font-extrabold leading-tight text-gray-900 md:text-4xl">
          Building women quietly,<br className="hidden md:block" />
          strengthening generations permanently.
        </h2>

        {/* Main story */}  
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>

            Founded in 2019, Wettimou is a foundation dedicated to single mothers(single mum, widow mum) and young girls — women who often face life’s toughest challenges with little or no support.
            Built on compassion backed by action, Wettimou—meaning “Help Me”—amplifies the voices of these women.
            We exist to be that helping hand, and voice of hope, a safe place where they're not judged, but rather understood and empowered.
          </p>
          <p>
            We know the struggle firsthand — and that’s what drives us. Society may point fingers, but Wettimou extends a hand.

            Our goal is not just to help, but to transform. We’re building a community where single mothers and their children can rise above judgment and live with dignity.

          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 mb-10 bg-pink-600 rounded-full mt-14"></div>

        {/* Closing emphasis */}
        <p className="max-w-3xl text-lg leading-relaxed text-gray-800">
          Today, Wettimou continues to guide women toward emotional stability,
          strong values, and long-term personal growth.
          We believe that when women are built in private, families and
          communities are strengthened for generations.
        </p>
      </div>
    </section>
  );
};

export default About;
