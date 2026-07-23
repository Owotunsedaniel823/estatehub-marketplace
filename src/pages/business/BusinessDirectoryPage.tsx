import { useState } from "react";


export default function BusinessDirectoryPage() {


  const [businesses,setBusinesses] = useState([

    {
      id:1,
      name:"Estate Mini Mart",
      category:"Shopping",
      phone:"08012345678",
      description:"Groceries and household items."
    },

    {
      id:2,
      name:"Daniel Laundry Services",
      category:"Cleaning",
      phone:"08098765432",
      description:"Laundry pickup and delivery service."
    },

    {
      id:3,
      name:"Quick Repairs",
      category:"Maintenance",
      phone:"08055555555",
      description:"Home repairs and technical services."
    },

  ]);



  const [search,setSearch] = useState("");



  const [name,setName] = useState("");

  const [category,setCategory] = useState("");

  const [phone,setPhone] = useState("");

  const [description,setDescription] = useState("");





  const addBusiness = ()=>{


    if(!name) return;



    setBusinesses([

      ...businesses,

      {

        id:Date.now(),

        name,

        category,

        phone,

        description,

      }

    ]);



    setName("");

    setCategory("");

    setPhone("");

    setDescription("");


  };






  const filteredBusinesses = businesses.filter((item)=>

    item.name

    .toLowerCase()

    .includes(search.toLowerCase())

  );







  return (

    <div className="space-y-8">


      <div>

        <h1 className="text-3xl font-bold">

          Business Directory

        </h1>


        <p className="text-gray-500">

          Discover businesses inside your estate.

        </p>


      </div>







      <div className="bg-white rounded-xl shadow p-6 space-y-4">


        <h2 className="text-xl font-bold">

          Add Business

        </h2>



        <input

          className="w-full border p-3 rounded-lg"

          placeholder="Business name"

          value={name}

          onChange={(e)=>setName(e.target.value)}

        />



        <input

          className="w-full border p-3 rounded-lg"

          placeholder="Category"

          value={category}

          onChange={(e)=>setCategory(e.target.value)}

        />



        <input

          className="w-full border p-3 rounded-lg"

          placeholder="Phone"

          value={phone}

          onChange={(e)=>setPhone(e.target.value)}

        />



        <textarea

          className="w-full border p-3 rounded-lg"

          placeholder="Description"

          value={description}

          onChange={(e)=>setDescription(e.target.value)}

        />



        <button

          onClick={addBusiness}

          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          "

        >

          Add Business

        </button>



      </div>








      <div className="bg-white rounded-xl shadow p-5">


        <input

          className="w-full border p-3 rounded-lg"

          placeholder="Search business..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

        />


      </div>







      <div className="grid md:grid-cols-3 gap-6">


        {filteredBusinesses.map((business)=>(


          <div

            key={business.id}

            className="
            bg-white
            shadow
            rounded-xl
            p-6
            "

          >


            <h2 className="text-xl font-bold">

              {business.name}

            </h2>



            <p className="text-blue-600 mt-2">

              {business.category}

            </p>



            <p className="text-gray-600 mt-3">

              {business.description}

            </p>



            <p className="mt-3 font-semibold">

              📞 {business.phone}

            </p>



            <button

              className="
              mt-5
              w-full
              bg-green-600
              text-white
              py-3
              rounded-lg
              "

            >

              Contact

            </button>



          </div>


        ))}



      </div>





    </div>

  );

}