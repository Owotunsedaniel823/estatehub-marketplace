import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CreateListingPage(){

  const navigate = useNavigate();


  const [image,setImage] = useState("");



  const [form,setForm] = useState({

    title:"",
    price:"",
    category:"Furniture",
    description:"",
    seller:"Daniel",

  });





  const handleChange = (
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  )=>{

    setForm({

      ...form,

      [e.target.name]:e.target.value

    });

  };







  const handleImage = (e:React.ChangeEvent<HTMLInputElement>)=>{


    const file = e.target.files?.[0];


    if(file){

      const reader = new FileReader();


      reader.onload = ()=>{

        setImage(reader.result as string);

      };


      reader.readAsDataURL(file);

    }


  };







  const handleSubmit=(e:React.FormEvent)=>{


    e.preventDefault();



    if(!form.title || !form.price){

      alert("Fill item name and price");

      return;

    }






    const oldListings = JSON.parse(

      localStorage.getItem("listings") || "[]"

    );






    const newListing={

      id:Date.now(),

      ...form,

      image,

    };






    localStorage.setItem(

      "listings",

      JSON.stringify([

        ...oldListings,

        newListing

      ])

    );





    alert("Listing created successfully");


    navigate("/marketplace");


  };







  return(

    <div className="space-y-8">


      <h1 className="text-3xl font-bold">

        Create Listing

      </h1>





      <form

      onSubmit={handleSubmit}

      className="
      bg-white
      rounded-xl
      shadow
      p-6
      space-y-5
      "

      >




        <input

        name="title"

        placeholder="Item name"

        value={form.title}

        onChange={handleChange}

        className="w-full border p-3 rounded-lg"

        />





        <input

        name="price"

        placeholder="Price"

        value={form.price}

        onChange={handleChange}

        className="w-full border p-3 rounded-lg"

        />





        <select

        name="category"

        value={form.category}

        onChange={handleChange}

        className="w-full border p-3 rounded-lg"

        >

          <option>Furniture</option>

          <option>Electronics</option>

          <option>Home</option>

          <option>Other</option>

        </select>





        <textarea

        name="description"

        placeholder="Description"

        value={form.description}

        onChange={handleChange}

        className="w-full border p-3 rounded-lg"

        />







        <input

        name="seller"

        placeholder="Seller name"

        value={form.seller}

        onChange={handleChange}

        className="w-full border p-3 rounded-lg"

        />







        <div>

          <p className="font-semibold mb-2">

            Upload Image

          </p>


          <input

          type="file"

          accept="image/*"

          onChange={handleImage}

          />

        </div>






        {image && (

          <img

          src={image}

          className="
          h-40
          w-full
          object-cover
          rounded-lg
          "

          />

        )}







        <button

        className="
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-lg
        "

        >

          Create Listing

        </button>




      </form>


    </div>

  );

}