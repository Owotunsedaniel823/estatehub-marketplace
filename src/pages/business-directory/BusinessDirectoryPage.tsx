import { useState } from "react";
import { Link } from "react-router-dom";


interface Business {
  id: number;
  name: string;
  category: string;
  phone: string;
  description: string;
}


export default function BusinessDirectoryPage() {


  const [businesses] = useState<Business[]>([

    {
      id: 1,
      name: "Estate Mini Mart",
      category: "Shopping",
      phone: "08012345678",
      description: "Groceries and household items for residents.",
    },

    {
      id: 2,
      name: "Daniel Laundry Services",
      category: "Cleaning",
      phone: "08098765432",
      description: "Laundry pickup and delivery service.",
    },

    {
      id: 3,
      name: "Quick Repairs",
      category: "Maintenance",
      phone: "08055555555",
      description: "Home repairs and technical services.",
    },

  ]);



  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");



  const categories = [
    "All",
    "Shopping",
    "Cleaning",
    "Maintenance"
  ];



  const filteredBusinesses = businesses.filter((business) => {


    const matchSearch =
      business.name
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchCategory =
      category === "All" ||
      business.category === category;


    return matchSearch && matchCategory;

  });





  return (

    <div className="space-y-8">


      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          Business Directory
        </h1>


        <p className="text-gray-500 mt-2">
          Discover trusted businesses inside your estate.
        </p>

      </div>





      {/* SEARCH AND FILTER */}

      <div className="bg-white rounded-xl shadow p-5 space-y-4">


        <input

          placeholder="Search businesses..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

          className="w-full border rounded-lg p-3"

        />



        <select

          value={category}

          onChange={(e) => setCategory(e.target.value)}

          className="w-full border rounded-lg p-3"

        >

          {categories.map((item) => (

            <option key={item}>
              {item}
            </option>

          ))}


        </select>


      </div>





      {/* BUSINESS CARDS */}

      <div className="grid md:grid-cols-3 gap-6">


        {filteredBusinesses.map((business) => (


          <div

            key={business.id}

            className="bg-white rounded-xl shadow p-6"

          >


            <h2 className="text-xl font-bold">
              {business.name}
            </h2>



            <p className="text-blue-600 font-semibold mt-2">
              {business.category}
            </p>



            <p className="text-gray-600 mt-3">
              {business.description}
            </p>



            <p className="mt-3">
              📞 {business.phone}
            </p>



            <Link

              to={`/business/${business.id}`}

              className="block text-center mt-5 bg-blue-600 text-white py-3 rounded-lg"

            >

              View Details

            </Link>


          </div>


        ))}


      </div>



    </div>

  );

}