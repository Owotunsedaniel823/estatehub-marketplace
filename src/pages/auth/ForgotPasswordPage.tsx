import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ChangePasswordPage() {


  const navigate = useNavigate();


  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");






  const handleChangePassword = (e: React.FormEvent) => {

    e.preventDefault();



    if (!currentPassword || !newPassword || !confirmPassword) {

      setMessage("Please fill all fields");

      return;

    }




    if (newPassword !== confirmPassword) {

      setMessage("New passwords do not match");

      return;

    }




    if (currentPassword !== "Danzy1234") {

      setMessage("Current password is incorrect");

      return;

    }




    setMessage("Password changed successfully");



    setTimeout(()=>{

      navigate("/profile");

    },1500);



  };







  return (

    <div className="
    min-h-screen
    flex
    items-center
    justify-center
    bg-gray-100
    ">


      <div className="
      bg-white
      rounded-xl
      shadow-lg
      p-8
      w-full
      max-w-md
      ">


        <h1 className="
        text-3xl
        font-bold
        text-blue-600
        text-center
        ">

          Change Password

        </h1>



        <p className="
        text-center
        text-gray-500
        mt-2
        ">

          Update your account password

        </p>






        {message && (

          <div className="
          mt-5
          bg-blue-100
          text-blue-600
          p-3
          rounded-lg
          ">

            {message}

          </div>

        )}








        <form

          onSubmit={handleChangePassword}

          className="mt-6 space-y-4"

        >




          <input

            type="password"

            placeholder="Current Password"

            value={currentPassword}

            onChange={(e)=>setCurrentPassword(e.target.value)}

            className="w-full border rounded-lg p-3"

          />






          <input

            type="password"

            placeholder="New Password"

            value={newPassword}

            onChange={(e)=>setNewPassword(e.target.value)}

            className="w-full border rounded-lg p-3"

          />







          <input

            type="password"

            placeholder="Confirm New Password"

            value={confirmPassword}

            onChange={(e)=>setConfirmPassword(e.target.value)}

            className="w-full border rounded-lg p-3"

          />







          <button

            className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-lg
            font-semibold
            "

          >

            Update Password

          </button>





        </form>



      </div>



    </div>

  );

}