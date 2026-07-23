import { useState } from "react";
import { Link } from "react-router-dom";


export default function MarketplacePage(){


  const [listings,setListings] = useState(()=>{

    const saved = localStorage.getItem("listings");

    return saved ? JSON.parse(saved) : [];

  });





  const [search,setSearch] = useState("");

  const [category,setCategory] = useState("All");



  const [editing,setEditing] = useState<any>(null);







  const saveListings=(data:any)=>{


    setListings(data);


    localStorage.setItem(

      "listings",

      JSON.stringify(data)

    );


  };







  const deleteListing=(id:number)=>{


    const updated = listings.filter(

      (item:any)=>item.id !== id

    );


    saveListings(updated);


  };








  const updateListing=()=>{


    const updated = listings.map(

      (item:any)=>

      item.id === editing.id

      ?

      editing

      :

      item

    );


    saveListings(updated);


    setEditing(null);


  };









  const filteredListings = listings.filter(

    (item:any)=>{


      const matchSearch = item.title

      .toLowerCase()

      .includes(search.toLowerCase());



      const matchCategory =

      category === "All"

      ||

      item.category === category;



      return matchSearch && matchCategory;


    }

  );









  return (


    <div className="space-y-8">






      <div className="flex justify-between items-center">


        <div>

          <h1 className="text-3xl font-bold">

            Estate Marketplace

          </h1>


          <p className="text-gray-500">

            Buy and sell items inside your estate.

          </p>


        </div>





        <Link

        to="/create-listing"

        className="
        bg-blue-600
        text-white
        px-5
        py-3
        rounded-lg
        "

        >

        + Create Listing

        </Link>



      </div>









      <div className="
      bg-white
      rounded-xl
      shadow
      p-5
      flex
      gap-4
      ">



        <input

        placeholder="Search listings..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        className="
        flex-1
        border
        p-3
        rounded-lg
        "

        />






        <select

        value={category}

        onChange={(e)=>setCategory(e.target.value)}

        className="
        border
        p-3
        rounded-lg
        "

        >


          <option>All</option>

          <option>Furniture</option>

          <option>Electronics</option>

          <option>Home</option>

          <option>Other</option>


        </select>



      </div>








      {editing && (


        <div className="
        bg-white
        shadow
        rounded-xl
        p-6
        space-y-4
        ">


          <h2 className="text-xl font-bold">

            Edit Listing

          </h2>



          <input

          value={editing.title}

          onChange={(e)=>

            setEditing({

              ...editing,

              title:e.target.value

            })

          }

          className="
          border
          p-3
          rounded-lg
          w-full
          "

          />




          <input

          value={editing.price}

          onChange={(e)=>

            setEditing({

              ...editing,

              price:e.target.value

            })

          }

          className="
          border
          p-3
          rounded-lg
          w-full
          "

          />




          <textarea

          value={editing.description}

          onChange={(e)=>

            setEditing({

              ...editing,

              description:e.target.value

            })

          }

          className="
          border
          p-3
          rounded-lg
          w-full
          "

          />





          <button

          onClick={updateListing}

          className="
          bg-green-600
          text-white
          px-6
          py-3
          rounded-lg
          "

          >

          Save Changes

          </button>


        </div>


      )}









      <div className="
      grid
      md:grid-cols-3
      gap-6
      ">





      {filteredListings.map((item:any)=>(



        <div

        key={item.id}

        className="
        bg-white
        rounded-xl
        shadow
        p-6
        "

        >





          {item.image ? (

            <img

            src={item.image}

            className="
            h-40
            w-full
            object-cover
            rounded-lg
            "

            />

          ) : (


            <div className="
            h-40
            bg-blue-50
            rounded-lg
            flex
            items-center
            justify-center
            text-6xl
            ">

            🛒

            </div>


          )}







          <h2 className="
          text-xl
          font-bold
          mt-5
          ">

          {item.title}

          </h2>






          <p className="
          text-blue-600
          font-bold
          text-xl
          ">

          ${item.price}

          </p>





          <p className="text-gray-500">

          {item.category}

          </p>






          <p className="mt-3 text-gray-600">

          {item.description}

          </p>






          <p className="mt-3 text-sm">

          👤 {item.seller}

          </p>







          <Link

          to={`/listing/${item.id}`}

          className="
          block
          text-center
          mt-5
          bg-blue-600
          text-white
          py-3
          rounded-lg
          "

          >

          View Details

          </Link>







          <button

          onClick={()=>setEditing(item)}

          className="
          mt-3
          w-full
          bg-yellow-500
          text-white
          py-3
          rounded-lg
          "

          >

          Edit Listing

          </button>








          <button

          onClick={()=>deleteListing(item.id)}

          className="
          mt-3
          w-full
          bg-red-600
          text-white
          py-3
          rounded-lg
          "

          >

          Delete Listing

          </button>





        </div>


      ))}




      </div>




    </div>


  );


}