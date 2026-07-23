import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginPage() {


  const navigate = useNavigate();


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");





  const handleLogin = (e: React.FormEvent) => {

    e.preventDefault();


    setError("");



    if (!email || !password) {

      setError("Please enter email and password");

      return;

    }






    if (
      email === "owotunsedaniel25@gmail.com" &&
      password === "Danzy1234"
    ) {


      localStorage.setItem(
        "estatehub_user",
        JSON.stringify({
          email: email,
          role: "admin",
        })
      );



      navigate("/dashboard");



    } else {



      setError("Invalid email or password");



    }


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
        text-center
        text-blue-600
        ">

          EstateHub

        </h1>



        <p className="
        text-center
        text-gray-500
        mt-2
        ">

          Login to your account

        </p>






        <form

          onSubmit={handleLogin}

          className="mt-8 space-y-5"

        >





          {error && (

            <div className="
            bg-red-100
            text-red-600
            p-3
            rounded-lg
            ">

              {error}

            </div>

          )}








          <input


            type="email"


            placeholder="Email Address"


            value={email}


            onChange={(e)=>setEmail(e.target.value)}


            className="
            w-full
            border
            rounded-lg
            p-3
            "


          />









          <input


            type="password"


            placeholder="Password"


            value={password}


            onChange={(e)=>setPassword(e.target.value)}


            className="
            w-full
            border
            rounded-lg
            p-3
            "


          />









          <div className="text-right">


            <a

              href="/forgot-password"

              className="
              text-sm
              text-blue-600
              hover:underline
              "

            >

              Forgot Password?

            </a>


          </div>









          <button


            type="submit"


            className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-lg
            font-semibold
            hover:bg-blue-700
            "


          >

            Login


          </button>





        </form>







        <div className="
        mt-6
        text-center
        text-sm
        text-gray-500
        ">


          Demo Login


          <br />


          owotunsedaniel25@gmail.com


          <br />


          Danzy1234



        </div>






      </div>



    </div>

  );

}





export default LoginPage;