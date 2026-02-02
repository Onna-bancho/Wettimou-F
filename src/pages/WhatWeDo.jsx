import { AcademicCapIcon, BriefcaseIcon, HomeIcon, HeartIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "School Fees Support",
    description: "Helping young girls and single moms's children continue their education without financial burden.",
    icon: <AcademicCapIcon className="w-10 h-10 text-pink-600" />
  },
  {
    title: "Small Business Capital",
    description: "Providing small capitals and guidance for single moms to start their own businesses.",
    icon: <BriefcaseIcon className="w-10 h-10 text-pink-600" />
  },
  {
    title: "Rent & Household",
    description: "Assistance for single mothers struggling with basic living costs.",
    icon: <HomeIcon className="w-10 h-10 text-pink-600" />
  },
  {
    title: "Healthcare Support",
    description: "Financial aid for medical bills, essential health needs and emotional support.",
    icon: <HeartIcon className="w-10 h-10 text-pink-600" />
  },
];

const WhatWeDo = () => {
  return (
    <section className="px-4 text-center py-28 bg-gray-50">
          <h2 className="mb-12 text-4xl font-bold text-gray-900">What We Do</h2>
          <h5 className="mb-20 text-xl text-center text-gray-800">
            Today, Wettimou doesn't only guide women towards emotional stability,
            strong values, and long-term personal growth.
            <br />It also brings assistance in these domains below, which we are integrating in this new season (2026).
          </h5>
          <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center p-8 transition-transform transform bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="text-sm text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <p className="text-center text-gray-700">
          Wettimou welcomes partners, donors, and sponsors who share this mission — those who believe that empowering a mother is empowering a generation.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
