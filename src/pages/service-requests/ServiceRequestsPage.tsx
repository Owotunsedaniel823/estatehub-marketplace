import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

export default function ServiceRequestsPage() {

  const [search, setSearch] = useState("");

  const requests = JSON.parse(
    localStorage.getItem("serviceRequests") || "[]"
  );

  const filtered = useMemo(() => {

    return requests.filter((item: any) =>

      item.title.toLowerCase().includes(search.toLowerCase()) ||

      item.category.toLowerCase().includes(search.toLowerCase())

    );

  }, [requests, search]);

  return (

    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">

            Service Requests

          </h1>

          <p className="text-gray-500 mt-2">

            Track and manage maintenance requests.

          </p>

        </div>

        <Link
          to="/create-request"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >

          + Create Request

        </Link>

      </div>

      <div className="bg-white rounded-xl shadow p-5">

        <input

          placeholder="Search requests..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          className="w-full border rounded-lg p-3"

        />

      </div>

      {filtered.length===0 ? (

        <div className="bg-white rounded-xl shadow p-12 text-center">

          <div className="text-6xl">

            🛠️

          </div>

          <h2 className="text-2xl font-bold mt-5">

            No Service Requests

          </h2>

          <p className="text-gray-500 mt-2">

            Create your first request.

          </p>

        </div>

      ) : (

        <div className="grid gap-6">

          {filtered.map((item:any)=>(

            <div

              key={item.id}

              className="bg-white rounded-xl shadow p-6"

            >

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-2xl font-bold">

                    {item.title}

                  </h2>

                  <p className="text-gray-500">

                    {item.category}

                  </p>

                </div>

                <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">

                  {item.status}

                </span>

              </div>

              {item.image && (

                <img

                  src={item.image}

                  className="mt-5 w-full h-56 rounded-xl object-cover"

                />

              )}

              <p className="mt-5">

                {item.description}

              </p>

              <div className="mt-6 flex justify-between items-center">

                <div>

                  <p className="text-sm text-gray-500">

                    Priority

                  </p>

                  <p className="font-semibold">

                    {item.priority}

                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">

                    Created

                  </p>

                  <p className="font-semibold">

                    {item.createdAt}

                  </p>

                </div>

                <Link

                  to={`/service-request/${item.id}`}

                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"

                >

                  View Details

                </Link>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}