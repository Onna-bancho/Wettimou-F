import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import About from "../pages/About";
import WhatWeDo from "../pages/WhatWeDo";
import GetInvolved from "../pages/GetInvolved";
import News from "../pages/News";
import Contact from "../pages/Contact";

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden text-white bg-neutral-900">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="what-we-do">
        <WhatWeDo />
      </section>
      <section id="get-involved">
        <GetInvolved />
      </section>

      <section id="news">
        <News />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
