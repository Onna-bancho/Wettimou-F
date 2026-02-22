import { AcademicCapIcon, BriefcaseIcon, HomeIcon, HeartIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "School Fees Support",
    description:
      "Helping young girls and single moms' children continue their education without financial burden.",
    icon: <AcademicCapIcon className="w-10 h-10 text-pink-600" />,
  },
  {
    title: "Small Business Capital",
    description:
      "Providing small capital and guidance for single moms to start sustainable small businesses.",
    icon: <BriefcaseIcon className="w-10 h-10 text-pink-600" />,
  },
  {
    title: "Rent & Household",
    description:
      "Assistance for single mothers struggling with essential housing and living expenses.",
    icon: <HomeIcon className="w-10 h-10 text-pink-600" />,
  },
  {
    title: "Healthcare Support",
    description:
      "Financial aid for medical bills, essential health needs, and emotional support.",
    icon: <HeartIcon className="w-10 h-10 text-pink-600" />,
  },
];

const WhatWeDo = () => {
  return (
    <section className="px-4 text-center text-gray-200 bg-black py-28">
      <h2 className="mb-8 text-4xl font-bold text-pink-600">
        What We Do
      </h2>

      <h5 className="max-w-3xl mx-auto mb-16 text-lg text-gray-400">
        Wettimou supports young girls and single mothers through practical,
        meaningful assistance. Our focus is long-term stability, dignity,
        and real empowerment.
      </h5>

      <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center p-8 transition-all duration-300 border border-gray-800 rounded-xl bg-black/30 backdrop-blur-sm hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4">{service.icon}</div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              {service.title}
            </h3>

            <p className="text-sm text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <p className="text-gray-400">
          Wettimou welcomes partners, donors, and sponsors who believe that
          empowering a mother is empowering a generation.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
