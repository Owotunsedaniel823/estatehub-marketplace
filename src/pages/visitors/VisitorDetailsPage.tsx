import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


interface Visitor {
  id: number;
  name: string;
  phone: string;
  vehicleNumber: string;
  date: string;
  time: string;
  status: string;
}


const VisitorDetailsPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  const [visitor, setVisitor] = useState<Visitor | null>(null);



  useEffect(() => {

    const savedVisitors = JSON.parse(
      localStorage.getItem("visitors") || "[]"
    );


    const foundVisitor = savedVisitors.find(
      (item: Visitor) => item.id === Number(id)
    );


    setVisitor(foundVisitor);

  }, [id]);



  const updateStatus = (status: string) => {

    const savedVisitors = JSON.parse(
      localStorage.getItem("visitors") || "[]"
    );


    const updatedVisitors = savedVisitors.map(
      (item: Visitor) =>
        item.id === Number(id)
          ? { ...item, status }
          : item
    );


    localStorage.setItem(
      "visitors",
      JSON.stringify(updatedVisitors)
    );


    const updatedVisitor = updatedVisitors.find(
      (item: Visitor) => item.id === Number(id)
    );


    setVisitor(updatedVisitor);

  };



  if (!visitor) {

    return (
      <div className="p-6">
        Visitor not found
      </div>
    );

  }



  return (

    <div className="p-6">


      <h1 className="text-2xl font-bold mb-6">
        Visitor Details
      </h1>



      <div className="bg-white border rounded-xl p-6 shadow-sm">


        <h2 className="text-xl font-semibold">
          {visitor.name}
        </h2>


        <p className="mt-3">
          Phone: {visitor.phone}
        </p>


        <p>
          Vehicle Number: {visitor.vehicleNumber}
        </p>


        <p>
          Date: {visitor.date}
        </p>


        <p>
          Time: {visitor.time}
        </p>


        <p className="mt-3">
          Status:
          <span className="font-semibold ml-2">
            {visitor.status}
          </span>
        </p>



        <div className="flex gap-4 mt-6">


          <button
            onClick={() => updateStatus("Checked In")}
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            Check In
          </button>



          <button
            onClick={() => updateStatus("Checked Out")}
            className="bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Check Out
          </button>


        </div>


      </div>



      <button
        onClick={() => navigate("/visitors")}
        className="mt-6 text-blue-600"
      >
        ← Back to Visitors
      </button>


    </div>

  );

};


export default VisitorDetailsPage;