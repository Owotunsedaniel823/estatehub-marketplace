import DashboardLayout from "../../components/layout/DashboardLayout";

const listings = [
  {
    title: "Modern Sofa",
    category: "Furniture",
    price: "$250",
    image: "🛋️",
  },
  {
    title: "Laptop",
    category: "Electronics",
    price: "$600",
    image: "💻",
  },
  {
    title: "Apartment Cleaning",
    category: "Services",
    price: "$50",
    image: "🧹",
  },
];

export default function MarketplacePage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-6 text-3xl font-bold">
          Estate Marketplace
        </h1>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <input
            placeholder="Search listings..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 md:w-96"
          />

          <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Filter
          </button>
        </div>


        {/* Listings */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {listings.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-6 shadow"
            >

              <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-slate-100 text-6xl">
                {item.image}
              </div>


              <h2 className="text-xl font-bold">
                {item.title}
              </h2>


              <p className="mt-2 text-gray-500">
                {item.category}
              </p>


              <p className="mt-3 text-2xl font-bold text-blue-600">
                {item.price}
              </p>


              <button className="mt-5 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700">
                View Details
              </button>

            </div>
          ))}

        </div>

      </div>
    </DashboardLayout>
  );
}