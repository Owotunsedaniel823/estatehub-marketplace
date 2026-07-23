import { Link } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";


export default function ProfilePage() {


  return (

    <DashboardLayout>


      <div className="max-w-5xl mx-auto space-y-8">



        {/* Profile Header */}


        <div className="bg-white rounded-xl shadow p-8">


          <div className="flex items-center gap-6">


            <div
              className="
              h-24
              w-24
              rounded-full
              bg-blue-600
              flex
              items-center
              justify-center
              text-white
              text-4xl
              font-bold
              "
            >

              D

            </div>




            <div>


              <h1 className="text-3xl font-bold">
                Daniel
              </h1>


              <p className="text-gray-500">
                Estate Resident
              </p>


              <p className="text-gray-400 mt-1">
                Member since 2026
              </p>


            </div>



          </div>



        </div>







        {/* Information */}


        <div className="grid md:grid-cols-2 gap-6">



          <div className="bg-white rounded-xl shadow p-6">


            <h2 className="text-xl font-bold mb-5">
              Personal Information
            </h2>



            <div className="space-y-4">


              <div>

                <p className="text-gray-500">
                  Full Name
                </p>

                <p className="font-semibold">
                  Daniel Owotunse
                </p>

              </div>



              <div>

                <p className="text-gray-500">
                  Email
                </p>

                <p className="font-semibold">
                  daniel@email.com
                </p>

              </div>




              <div>

                <p className="text-gray-500">
                  Phone
                </p>

                <p className="font-semibold">
                  +234 800 000 0000
                </p>

              </div>



            </div>



          </div>








          <div className="bg-white rounded-xl shadow p-6">


            <h2 className="text-xl font-bold mb-5">
              Account Settings
            </h2>




            <div className="space-y-4">


              <Link

                to="/change-password"

                className="
                block
                bg-blue-600
                text-white
                text-center
                py-3
                rounded-lg
                hover:bg-blue-700
                "

              >

                Change Password

              </Link>




              <button

                className="
                w-full
                bg-gray-100
                py-3
                rounded-lg
                hover:bg-gray-200
                "

              >

                Edit Profile

              </button>



            </div>



          </div>



        </div>







        {/* Activity */}


        <div className="bg-white rounded-xl shadow p-6">


          <h2 className="text-xl font-bold mb-5">
            Recent Activity
          </h2>



          <div className="space-y-4">


            <p className="text-gray-600">
              🛒 Created a marketplace listing
            </p>


            <p className="text-gray-600">
              🛠 Submitted a service request
            </p>


            <p className="text-gray-600">
              🚗 Registered a visitor
            </p>



          </div>



        </div>




      </div>



    </DashboardLayout>

  );

}