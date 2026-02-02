const newsItems = [
  {
    title: "Wettimou Launches New School Fees Program",
    description: "This initiative helps young girls continue their education without financial barriers.",
    date: "coming soon...",
    image: "/public/images/school_fee.jpg"
  },
  {
    title: "Small Business Grants for Single Mothers",
    description: "Providing financial support and guidance to empower women entrepreneurs.",
    date: "not yet...",
    image: "/images/business_grants.jpg"
  },
  {
    title: "Healthcare Support Program Success",
    description: "Assisting mothers and their children with essential medical aid.",
    date: "not yet...",
    image: "/images/healthcare_support.jpg"
  },
];

const News = () => {
  return (
    <section className="w-full px-4 text-center py-28 bg-gray-50">
      <h2 className="mb-12 text-4xl font-bold text-gray-900">News & Media</h2>
      <p className="max-w-3xl mx-auto mb-16 text-lg text-gray-700">
        Stay updated with our latest events, news, and success stories.
      </p>
      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden transition-transform transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1"
          >
            <img src={item.image} alt={item.title} className="object-cover object-center w-full h-60 sm:h-48 md:h-56 lg:h-68 blur-sm" />
            <div className="p-6 text-left">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 text-sm text-gray-700">{item.description}</p>
              <span className="text-sm text-pink-600">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
