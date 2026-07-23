import { useEffect, useState } from "react";

import {
  Users,
  Store,
  Car,
  Wrench,
} from "lucide-react";



export default function DashboardPage() {



  const [stats,setStats] = useState({

    residents:0,

    listings:0,

    visitors:0,

    requests:0,

  });





  const [activities,setActivities] = useState<string[]>([]);






  useEffect(()=>{


    const residents = JSON.parse(

      localStorage.getItem("residents") || "[]"

    );


    const listings = JSON.parse(

      localStorage.getItem("listings") || "[]"

    );


    const visitors = JSON.parse(

      localStorage.getItem("visitors") || "[]"

    );


    const requests = JSON.parse(

      localStorage.getItem("requests") || "[]"

    );




    setStats({

      residents: residents.length,

      listings: listings.length + 3,

      visitors: visitors.length,

      requests: requests.length,

    });






    setActivities([

      "🛠 New maintenance request submitted",

      "📢 New announcement posted",

      "🚗 Visitor checked in today",

    ]);



  },[]);







  const cards = [

    {

      title:"Total Residents",

      value:stats.residents,

      icon:Users,

    },


    {

      title:"Active Listings",

      value:stats.listings,

      icon:Store,

    },


    {

      title:"Visitors Today",

      value:stats.visitors,

      icon:Car,

    },


    {

      title:"Open Requests",

      value:stats.requests,

      icon:Wrench,

    },


  ];






  return (

    <div className="space-y-8">



      <div>


        <h1 className="text-3xl font-bold text-gray-800">

          Welcome back, Daniel 👋

        </h1>



        <p className="text-gray-500 mt-2">

          Here is what is happening in your estate today.

        </p>


      </div>







      <div className="grid md:grid-cols-4 gap-6">



        {cards.map((card)=>{


          const Icon = card.icon;



          return (


            <div

              key={card.title}

              className="
              bg-white
              rounded-xl
              shadow
              p-6
              "

            >


              <div className="
              flex
              justify-between
              items-center
              ">


                <div>

                  <p className="text-gray-500">

                    {card.title}

                  </p>


                  <h2 className="text-4xl font-bold mt-3">

                    {card.value}

                  </h2>


                </div>



                <div className="
                bg-blue-100
                text-blue-600
                p-3
                rounded-lg
                ">

                  <Icon size={28}/>

                </div>



              </div>



            </div>


          );


        })}



      </div>









      <div className="grid md:grid-cols-2 gap-6">



        <div className="
        bg-white
        rounded-xl
        shadow
        p-6
        ">


          <h2 className="text-xl font-bold mb-5">

            Estate Activity

          </h2>



          <div className="space-y-4">


            <div className="flex justify-between">

              <span>Marketplace</span>

              <b>{stats.listings}</b>

            </div>


            <div className="flex justify-between">

              <span>Visitors</span>

              <b>{stats.visitors}</b>

            </div>


            <div className="flex justify-between">

              <span>Residents</span>

              <b>{stats.residents}</b>

            </div>



          </div>



        </div>






        <div className="
        bg-white
        rounded-xl
        shadow
        p-6
        ">


          <h2 className="text-xl font-bold mb-5">

            Recent Updates

          </h2>



          <div className="space-y-4">


            {activities.map((item,index)=>(


              <p key={index} className="text-gray-600">

                {item}

              </p>


            ))}



          </div>



        </div>





      </div>




    </div>

  );

}