import { useState } from "react";


export default function EstateManagementPage() {


  const [residents, setResidents] = useState(()=>{

    const saved = localStorage.getItem("residents");

    return saved ? JSON.parse(saved) : [];

  });



  const [requests, setRequests] = useState(()=>{

    const saved = localStorage.getItem("requests");

    return saved ? JSON.parse(saved) : [

      {
        id:1,
        title:"Broken street light",
        status:"Pending",
      }

    ];

  });




  const [residentName,setResidentName] = useState("");

  const [residentPhone,setResidentPhone] = useState("");

  const [requestTitle,setRequestTitle] = useState("");

  const [search,setSearch] = useState("");





  const addResident = ()=>{


    if(!residentName) return;



    const newResident = {

      id:Date.now(),

      name:residentName,

      phone:residentPhone,

      status:"Active",

    };



    const updated=[

      ...residents,

      newResident,

    ];



    setResidents(updated);



    localStorage.setItem(

      "residents",

      JSON.stringify(updated)

    );



    setResidentName("");

    setResidentPhone("");

  };






  const addRequest = ()=>{


    if(!requestTitle) return;



    const newRequest={

      id:Date.now(),

      title:requestTitle,

      status:"Pending",

    };



    const updated=[

      ...requests,

      newRequest,

    ];



    setRequests(updated);



    localStorage.setItem(

      "requests",

      JSON.stringify(updated)

    );



    setRequestTitle("");

  };







  const completeRequest=(id:number)=>{


    const updated=requests.map((item:any)=>

      item.id===id

      ?

      {

        ...item,

        status:"Completed"

      }

      :

      item

    );



    setRequests(updated);



    localStorage.setItem(

      "requests",

      JSON.stringify(updated)

    );


  };







  const deleteResident=(id:number)=>{


    const updated=residents.filter(

      (item:any)=>item.id!==id

    );



    setResidents(updated);



    localStorage.setItem(

      "residents",

      JSON.stringify(updated)

    );


  };






  const filteredResidents=residents.filter(

    (item:any)=>

    item.name

    .toLowerCase()

    .includes(search.toLowerCase())

  );






  return (

    <div className="space-y-8">



      <div>

        <h1 className="text-3xl font-bold text-gray-800">

          Estate Management

        </h1>


        <p className="text-gray-500">

          Manage residents and estate operations.

        </p>


      </div>







      <div className="grid md:grid-cols-3 gap-6">


        <div className="bg-white rounded-xl shadow p-6">

          <p className="text-gray-500">

            Total Residents

          </p>

          <h2 className="text-4xl font-bold">

            {residents.length}

          </h2>

        </div>




        <div className="bg-white rounded-xl shadow p-6">

          <p className="text-gray-500">

            Maintenance Requests

          </p>

          <h2 className="text-4xl font-bold">

            {requests.length}

          </h2>

        </div>




        <div className="bg-white rounded-xl shadow p-6">

          <p className="text-gray-500">

            Estate Status

          </p>

          <h2 className="text-green-600 font-bold">

            Active

          </h2>

        </div>


      </div>







      <div className="bg-white rounded-xl shadow p-6 space-y-4">


        <h2 className="text-xl font-bold">

          Add Resident

        </h2>



        <input

          value={residentName}

          onChange={(e)=>setResidentName(e.target.value)}

          placeholder="Resident name"

          className="w-full border rounded-lg p-3"

        />



        <input

          value={residentPhone}

          onChange={(e)=>setResidentPhone(e.target.value)}

          placeholder="Phone number"

          className="w-full border rounded-lg p-3"

        />



        <button

          onClick={addResident}

          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          "

        >

          Add Resident

        </button>


      </div>








      <div className="bg-white rounded-xl shadow p-6">


        <input

          placeholder="Search residents..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          className="w-full border rounded-lg p-3 mb-5"

        />



        {filteredResidents.map((resident:any)=>(


          <div

            key={resident.id}

            className="
            border
            rounded-lg
            p-4
            mb-3
            flex
            justify-between
            "

          >

            <div>

              <h3 className="font-bold">

                {resident.name}

              </h3>

              <p>

                {resident.phone}

              </p>

            </div>



            <button

              onClick={()=>deleteResident(resident.id)}

              className="
              bg-red-500
              text-white
              px-4
              rounded-lg
              "

            >

              Remove

            </button>


          </div>


        ))}


      </div>








      <div className="bg-white rounded-xl shadow p-6 space-y-4">


        <h2 className="text-xl font-bold">

          Maintenance Requests

        </h2>



        <input

          value={requestTitle}

          onChange={(e)=>setRequestTitle(e.target.value)}

          placeholder="Request title"

          className="w-full border rounded-lg p-3"

        />



        <button

          onClick={addRequest}

          className="
          bg-orange-500
          text-white
          px-6
          py-3
          rounded-lg
          "

        >

          Create Request

        </button>





        {requests.map((item:any)=>(


          <div

            key={item.id}

            className="border rounded-lg p-4 flex justify-between"

          >

            <span>

              {item.title}

            </span>


            <button

              onClick={()=>completeRequest(item.id)}

              className="
              text-blue-600
              "

            >

              {item.status}

            </button>


          </div>


        ))}



      </div>




    </div>

  );

}