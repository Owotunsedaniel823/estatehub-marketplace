import {
  Search,
  Filter,
  MapPin,
  Heart,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";

const listings = [
  {
    id: 1,
    title: "Modern Leather Sofa",
    category: "Furniture",
    price: "$850",
    location: "Block A Estate",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  },
  {
    id: 2,
    title: "Samsung Smart Television",
    category: "Electronics",
    price: "$450",
    location: "Block C Estate",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6",
  },
  {
    id: 3,
    title: "Premium Office Chair",
    category: "Office",
    price: "$220",
    location: "Block B Estate",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
  },
  {
    id: 4,
    title: "Mountain Bicycle",
    category: "Sports",
    price: "$300",
    location: "Block D Estate",
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890",
  },
];

export default function MarketplacePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Estate Marketplace 🛒
          </h1>

          <p className="mt-2 text-slate-500">
            Buy and sell items within your estate community.
          </p>
        </div>


        {/* Search Area */}

        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow md:flex-row">

          <div className="flex flex-1 items-center gap-3 rounded-xl border px-4">
            <Search size={20} className="text-slate-400" />

            <input
              placeholder="Search products..."
              className="w-full py-3 outline-none"
            />
          </div>


          <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            <Filter size={18} />
            Filters
          </button>

        </div>


        {/* Products */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {listings.map((item) => (

            <div
              key={item.id}
              className="overflow-hidden rounded-2xl bg-white shadow transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="relative">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />

                <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow">
                  <Heart size={18}/>
                </button>

              </div>


              <div className="p-5">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                  {item.category}
                </span>


                <h2 className="mt-4 text-lg font-bold text-slate-800">
                  {item.title}
                </h2>


                <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={15}/>
                  {item.location}
                </p>


                <div className="mt-5 flex items-center justify-between">

                  <p className="text-xl font-bold text-blue-600">
                    {item.price}
                  </p>


                  <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-700">
                    View
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}