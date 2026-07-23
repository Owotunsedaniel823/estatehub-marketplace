import { useParams, useNavigate } from "react-router-dom";


const businesses = [
  {
    id: 1,
    name: "Estate Mini Mart",
    category: "Shopping",
    phone: "08012345678",
    description:
      "Groceries, drinks and household items available for estate residents."
  },

  {
    id: 2,
    name: "Daniel Laundry Services",
    category: "Cleaning",
    phone: "08098765432",
    description:
      "Laundry pickup and delivery service within the estate."
  },

  {
    id: 3,
    name: "Quick Repairs",
    category: "Maintenance",
    phone: "08055555555",
    description:
      "Home repairs, electrical and technical maintenance services."
  }
];



export default function BusinessDetailsPage() {


  const { id } = useParams();

  const navigate = useNavigate();



  const business = businesses.find(
    (item) => item.id === Number(id)
  );



  if (!business) {

    return (
      <div className="p-6">
        Business not found
      </div>
    );

  }



  return (

    <div className="max-w-3xl mx-auto">


      <div className="bg-white rounded-xl shadow p-8">


        <h1 className="text-3xl font-bold">
          {business.name}
        </h1>



        <p className="text-blue-600 font-semibold mt-3">
          {business.category}
        </p>



        <div className="mt-6 space-y-4">


          <p>
            <strong>Services:</strong>
            <br />
            {business.description}
          </p>



          <p>
            <strong>Contact:</strong>
            <br />
            📞 {business.phone}
          </p>



        </div>



        <button

          onClick={() => navigate("/business-directory")}

          className="mt-8 bg-blue-600 text-white px-5 py-3 rounded-lg"

        >

          Back to Directory

        </button>


      </div>


    </div>

  );

}