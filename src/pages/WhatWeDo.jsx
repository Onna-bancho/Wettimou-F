import { AcademicCapIcon, BriefcaseIcon, HomeIcon, HeartIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "School Fees Support",
    description:
      "Helping young girls and single moms' children continue their education without financial burden.",
    icon: <AcademicCapIcon className="text-pink-500 w-9 h-9" />,
  },
  {
    title: "Small Business Capital",
    description:
      "Providing small capital and guidance for single moms to start sustainable small businesses.",
    icon: <BriefcaseIcon className="text-pink-500 w-9 h-9" />,
  },
  {
    title: "Rent & Household",
    description:
      "Assistance for single mothers struggling with essential housing and living expenses.",
    icon: <HomeIcon className="text-pink-500 w-9 h-9" />,
  },
  {
    title: "Healthcare Support",
    description:
      "Financial aid for medical bills, essential health needs, and emotional support.",
    icon: <HeartIcon className="text-pink-500 w-9 h-9" />,
  },
];

const WhatWeDo = () => {
  return (
    <section className="px-4 py-24 text-center text-gray-300 bg-black">
      <h2 className="mb-8 text-4xl font-semibold text-pink-500">
        What We Do
      </h2>

      <h5 className="max-w-3xl mx-auto text-lg text-gray-400 mb-14">
        Today, Wettimou doesn't only guide women towards emotional stability,
        strong values, and long-term personal growth.
        <br />
        It also brings assistance in these domains below, which we are integrating
        in this new season (2026).
      </h5>

      <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center p-8 transition-all duration-200 border border-gray-800 rounded-lg bg-gray-1000/40 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4">{service.icon}</div>

            <h3 className="mb-3 text-lg font-semibold text-white">
              {service.title}
            </h3>

            <p className="text-sm text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-14">
        <p className="text-gray-400">
          Wettimou welcomes partners, donors, and sponsors who believe that
          empowering a mother is empowering a generation.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
