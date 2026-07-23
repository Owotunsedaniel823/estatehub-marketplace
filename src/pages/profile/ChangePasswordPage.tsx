import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";


export default function ChangePasswordPage() {


  const navigate = useNavigate();


  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();



    if (!currentPassword || !newPassword || !confirmPassword) {

      toast.error("Please fill all password fields");

      return;

    }



    if (newPassword !== confirmPassword) {

      toast.error("New passwords do not match");

      return;

    }



    toast.success("Password changed successfully!");


    setTimeout(()=>{

      navigate("/profile");

    },1000);


  };



  return (

    <DashboardLayout>


      <div className="max-w-xl mx-auto">


        <div className="bg-white rounded-xl shadow p-8">


          <h1 className="text-3xl font-bold mb-2">
            Change Password
          </h1>


          <p className="text-gray-500 mb-8">
            Keep your account secure by updating your password.
          </p>



          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >



            <input

              type="password"

              placeholder="Current Password"

              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"

              value={currentPassword}

              onChange={(e)=>setCurrentPassword(e.target.value)}

            />




            <input

              type="password"

              placeholder="New Password"

              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"

              value={newPassword}

              onChange={(e)=>setNewPassword(e.target.value)}

            />




            <input

              type="password"

              placeholder="Confirm New Password"

              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"

              value={confirmPassword}

              onChange={(e)=>setConfirmPassword(e.target.value)}

            />




            <button

              type="submit"

              className="
              w-full
              rounded-lg
              bg-blue-600
              py-3
              text-white
              font-semibold
              hover:bg-blue-700
              transition
              "

            >

              Update Password

            </button>



          </form>


        </div>


      </div>


    </DashboardLayout>


  );

}