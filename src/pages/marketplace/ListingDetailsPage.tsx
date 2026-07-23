import { useParams, Link } from "react-router-dom";


export default function ListingDetailsPage(){


  const {id}=useParams();



  const listings = JSON.parse(

    localStorage.getItem("listings") || "[]"

  );



  const listing = listings.find(

    (item:any)=>item.id.toString() === id

  );





  if(!listing){

    return (

      <div className="bg-white rounded-xl shadow p-8">

        <h1 className="text-2xl font-bold">

          Listing not found

        </h1>


        <Link

        to="/marketplace"

        className="
        inline-block
        mt-5
        bg-blue-600
        text-white
        px-5
        py-3
        rounded-lg
        "

        >

        Back to Marketplace

        </Link>


      </div>

    );

  }







  return (

    <div className="space-y-6">





      <Link

      to="/marketplace"

      className="text-blue-600"

      >

      ← Back to Marketplace

      </Link>








      <div className="
      bg-white
      rounded-xl
      shadow
      p-8
      ">






        {/* IMAGE GALLERY */}


        <div className="
        h-80
        rounded-xl
        bg-gray-100
        overflow-hidden
        flex
        items-center
        justify-center
        ">


        {listing.image ? (

          <img

          src={listing.image}

          className="
          w-full
          h-full
          object-cover
          "

          />

        ) : (

          <div className="text-8xl">

          🛒

          </div>

        )}


        </div>









        <div className="mt-8">



          <h1 className="
          text-4xl
          font-bold
          ">

          {listing.title}

          </h1>






          <p className="
          text-blue-600
          text-3xl
          font-bold
          mt-3
          ">

          ${listing.price}

          </p>








          <span className="
          inline-block
          mt-4
          bg-blue-100
          text-blue-700
          px-4
          py-2
          rounded-full
          ">

          {listing.category}

          </span>









          <div className="mt-8">


            <h2 className="
            text-xl
            font-bold
            ">

            Description

            </h2>


            <p className="
            text-gray-600
            mt-3
            ">

            {listing.description}

            </p>


          </div>









          <div className="
          mt-8
          border-t
          pt-6
          ">


            <h2 className="
            text-xl
            font-bold
            ">

            Seller Information

            </h2>



            <p className="mt-3">

            👤 {listing.seller}

            </p>




          </div>








          <button

          className="
          mt-8
          w-full
          bg-green-600
          text-white
          py-3
          rounded-lg
          "

          >

          Contact Seller

          </button>






        </div>




      </div>




    </div>


  );


}