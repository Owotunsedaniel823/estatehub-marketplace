export default function ChangePasswordPage() {


  return (

    <div className="
    min-h-screen
    flex
    items-center
    justify-center
    bg-gray-100
    ">


      <div className="
      w-full
      max-w-md
      rounded-xl
      bg-white
      p-8
      shadow-lg
      ">


        <h1 className="
        text-2xl
        font-bold
        text-gray-800
        ">

          Change Password

        </h1>


        <p className="
        mt-2
        text-gray-500
        ">

          Update your account password

        </p>





        <input

          type="password"

          placeholder="New Password"

          className="
          mt-6
          w-full
          rounded-lg
          border
          p-3
          "

        />




        <input

          type="password"

          placeholder="Confirm Password"

          className="
          mt-4
          w-full
          rounded-lg
          border
          p-3
          "

        />






        <button

          className="
          mt-6
          w-full
          rounded-lg
          bg-blue-600
          p-3
          font-semibold
          text-white
          hover:bg-blue-700
          "

        >

          Update Password

        </button>




      </div>


    </div>

  );

}