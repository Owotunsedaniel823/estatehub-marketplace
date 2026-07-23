import { useState } from "react";


interface Notification {

  id: number;
  title: string;
  message: string;
  type:
    | "Visitor"
    | "Announcement"
    | "Service Request"
    | "Marketplace";
  read: boolean;
  time: string;

}



export default function NotificationsPage() {


  const [notifications, setNotifications] =
    useState<Notification[]>(() => {


      const saved =
        localStorage.getItem("notifications");


      return saved
        ? JSON.parse(saved)
        : [

          {
            id: 1,
            title: "Visitor Checked In",
            message:
              "A visitor has entered the estate today.",
            type: "Visitor",
            read: false,
            time: "10 minutes ago",
          },


          {
            id: 2,
            title: "New Announcement",
            message:
              "New community announcement has been posted.",
            type: "Announcement",
            read: false,
            time: "1 hour ago",
          },


          {
            id: 3,
            title: "Service Request Update",
            message:
              "Your maintenance request has been updated.",
            type: "Service Request",
            read: true,
            time: "Yesterday",
          },


          {
            id: 4,
            title: "New Marketplace Listing",
            message:
              "A new item has been listed in your estate marketplace.",
            type: "Marketplace",
            read: false,
            time: "Today",
          }

        ];

    });



  const markAsRead = (id:number)=>{


    const updated =
      notifications.map((item)=>


        item.id === id

        ? {
            ...item,
            read:true
          }

        : item


      );


    setNotifications(updated);


    localStorage.setItem(
      "notifications",
      JSON.stringify(updated)
    );


  };



  const unread =
    notifications.filter(
      (item)=>!item.read
    ).length;



  return (

    <div className="space-y-8">


      <div>

        <h1 className="text-3xl font-bold">
          Notifications
        </h1>


        <p className="text-gray-500 mt-2">
          You have {unread} unread notifications.
        </p>

      </div>




      <div className="space-y-5">


        {notifications.map((item)=>(


          <div

            key={item.id}

            className={`
              bg-white
              rounded-xl
              shadow
              p-6
              border-l-4

              ${
                item.read
                ? "border-gray-300"
                : "border-blue-600"
              }
            `}

          >


            <div className="flex justify-between">


              <div>

                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>


                <p className="text-gray-600 mt-2">
                  {item.message}
                </p>

              </div>



              <span className="
                bg-blue-100
                text-blue-700
                px-3
                py-1
                rounded-full
                text-sm
              ">

                {item.type}

              </span>


            </div>



            <div className="flex justify-between items-center mt-5">


              <p className="text-sm text-gray-400">
                {item.time}
              </p>



              {!item.read && (

                <button

                  onClick={()=>markAsRead(item.id)}

                  className="
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded-lg
                  "

                >

                  Mark as Read

                </button>

              )}


            </div>


          </div>


        ))}


      </div>


    </div>

  );

}