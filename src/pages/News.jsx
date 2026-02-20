const newsItems = [
  {
    title: "Wettimou Launches New School Fees Program",
    description:
      "This initiative helps children of the single moms that had to drop out due to lack of financial support, to continue their education without financial barriers.",
    date: "Coming soon...",
    image: "/images/school_fee.jpg",
  },
  {
    title: "Small Business Grants for Single Mothers",
    description:
      "Providing financial support and guidance to empower women entrepreneurs.",
    date: "Not yet...",
    image: "/images/business_grants.jpg",
  },
  {
    title: "Healthcare Support Program Success",
    description:
      "Assisting mothers and their children with essential medical aid.",
    date: "Not yet...",
    image: "/images/healthcare_support.jpg",
  },
];

const News = () => {
  return (
    <section className="w-full px-4 py-20 text-center bg-gray-50">
      <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
        News & Media
      </h2>

      <p className="max-w-3xl mx-auto mb-12 text-base text-gray-700 sm:text-lg">
        Stay updated with our latest events, news, and success stories.
      </p>

      <div className="grid max-w-6xl gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => {
          const isFirst = index === 0;

          return (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-lg hover:-translate-y-2"
            >
              {/* Image Area */}
              <div className="overflow-hidden">
                {isFirst ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-56 transition-all duration-500 blur-sm group-hover:blur-0 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-56 bg-black"></div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mb-4 text-sm text-gray-700 sm:text-base">
                  {item.description}
                </p>

                <span className="text-sm font-medium text-pink-600">
                  {item.date}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
