import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const EditListingPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();


  const [title, setTitle] = useState("Modern Sofa Set");

  const [description, setDescription] = useState(
    "Comfortable sofa set available from a verified resident."
  );

  const [category, setCategory] = useState("Furniture");

  const [price, setPrice] = useState("450");



  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();


    console.log({

      id,

      title,

      description,

      category,

      price

    });


    alert("Listing updated successfully");


    navigate("/marketplace");

  };



  return (

    <div className="min-h-screen bg-gray-50 p-6">


      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">


        <h1 className="text-3xl font-bold mb-2">
          Edit Listing
        </h1>


        <p className="text-gray-500 mb-6">
          Update your marketplace item
        </p>



        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >



          <input

            className="w-full border p-3 rounded"

            value={title}

            onChange={(e)=>setTitle(e.target.value)}

            placeholder="Title"

          />




          <textarea

            className="w-full border p-3 rounded"

            value={description}

            onChange={(e)=>setDescription(e.target.value)}

            placeholder="Description"

          />




          <select

            className="w-full border p-3 rounded"

            value={category}

            onChange={(e)=>setCategory(e.target.value)}

          >


            <option>
              Furniture
            </option>


            <option>
              Electronics
            </option>


            <option>
              Home
            </option>


            <option>
              Other
            </option>


          </select>





          <input

            type="number"

            className="w-full border p-3 rounded"

            value={price}

            onChange={(e)=>setPrice(e.target.value)}

            placeholder="Price"

          />





          <button

            className="w-full bg-green-600 text-white p-3 rounded"

          >

            Save Changes

          </button>



        </form>


      </div>


    </div>

  );

};


export default EditListingPage;