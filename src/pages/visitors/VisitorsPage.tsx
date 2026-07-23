import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface Visitor {
  id: number;
  name: string;
  phone: string;
  vehicleNumber: string;
  date: string;
  time: string;
  status: string;
}


const VisitorsPage = () => {

  const [visitors, setVisitors] = useState<Visitor[]>([]);


  useEffect(() => {

    const savedVisitors = localStorage.getItem("visitors");

    if (savedVisitors) {
      setVisitors(JSON.parse(savedVisitors));
    }

  }, []);



  return (

    <div className="p-6">


      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-bold">
          Visitor Management
        </h1>


        <Link
          to="/register-visitor"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Register Visitor
        </Link>

      </div>



      {visitors.length === 0 ? (

        <div className="text-gray-500">
          No visitors registered.
        </div>


      ) : (

        <div className="grid gap-5">


          {visitors.map((visitor) => (

            <div
              key={visitor.id}
              className="border rounded-xl p-5 shadow-sm bg-white"
            >


              <h2 className="text-lg font-semibold">
                {visitor.name}
              </h2>


              <p className="text-gray-600">
                Visit Date: {visitor.date}
              </p>


              <p className="text-gray-600">
                Time: {visitor.time}
              </p>


              <p className="text-gray-600">
                Status:
                <span className="ml-2 font-medium">
                  {visitor.status}
                </span>
              </p>



              <Link
                to={`/visitor/${visitor.id}`}
                className="inline-block mt-4 text-blue-600"
              >
                View Details →
              </Link>


            </div>

          ))}


        </div>

      )}


    </div>

  );

};


export default VisitorsPage;