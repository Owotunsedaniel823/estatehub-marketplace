import { useState } from "react";


export default function AnnouncementsPage() {


  const [announcements, setAnnouncements] = useState(()=>{

    const saved = localStorage.getItem("announcements");

    return saved ? JSON.parse(saved) : [

      {
        id: 1,
        title: "New Maintenance Schedule",
        message:
          "Estate maintenance will take place this weekend.",
        category: "Maintenance",
        date: "Today",
      },

      {
        id: 2,
        title: "Community Meeting",
        message:
          "Residents meeting will hold at the estate hall.",
        category: "Community",
        date: "Yesterday",
      },

    ];

  });




  const [form, setForm] = useState({

    title: "",

    message: "",

    category: "General",

  });





  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  )=>{


    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });


  };





  const addAnnouncement = ()=>{


    if(!form.title || !form.message) return;



    const newAnnouncement = {

      id: Date.now(),

      ...form,

      date: "Just now",

    };



    const updated = [

      newAnnouncement,

      ...announcements,

    ];



    setAnnouncements(updated);



    localStorage.setItem(

      "announcements",

      JSON.stringify(updated)

    );



    setForm({

      title:"",

      message:"",

      category:"General",

    });


  };





  return (

    <div className="space-y-8">



      <div>

        <h1 className="text-3xl font-bold text-gray-800">

          Announcements

        </h1>


        <p className="text-gray-500 mt-2">

          Stay updated with estate news and important information.

        </p>


      </div>





      {/* Create Announcement */}


      <div className="
      bg-white
      rounded-xl
      shadow
      p-6
      space-y-4
      ">


        <h2 className="text-xl font-bold">

          Create Announcement

        </h2>




        <input

          name="title"

          value={form.title}

          onChange={handleChange}

          placeholder="Announcement title"

          className="w-full border rounded-lg p-3"

        />





        <select

          name="category"

          value={form.category}

          onChange={handleChange}

          className="w-full border rounded-lg p-3"

        >

          <option>General</option>

          <option>Maintenance</option>

          <option>Security</option>

          <option>Community</option>


        </select>





        <textarea

          name="message"

          value={form.message}

          onChange={handleChange}

          placeholder="Write announcement..."

          className="w-full border rounded-lg p-3"

        />





        <button

          onClick={addAnnouncement}

          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          "

        >

          Publish Announcement

        </button>



      </div>







      {/* Announcement List */}


      <div className="space-y-5">



        {announcements.map((item:any)=>(


          <div

            key={item.id}

            className="
            bg-white
            rounded-xl
            shadow
            p-6
            "

          >


            <div className="flex justify-between">


              <h2 className="text-xl font-bold">

                {item.title}

              </h2>



              <span className="
              bg-blue-100
              text-blue-700
              px-3
              py-1
              rounded-full
              text-sm
              ">

                {item.category}

              </span>


            </div>




            <p className="text-gray-600 mt-3">

              {item.message}

            </p>




            <p className="text-sm text-gray-400 mt-4">

              Posted: {item.date}

            </p>



          </div>


        ))}


      </div>



    </div>

  );

}