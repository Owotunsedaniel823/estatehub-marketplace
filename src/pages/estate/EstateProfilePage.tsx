import { useState } from "react";


export default function EstateProfilePage() {


  const savedProfile = JSON.parse(
    localStorage.getItem("profile") || "{}"
  );


  const [profile, setProfile] = useState({

    name: savedProfile.name || "Daniel",

    email: savedProfile.email || "daniel@email.com",

    phone: savedProfile.phone || "",

    photo: savedProfile.photo || "",

    estate: savedProfile.estate || "EstateHub Gardens",

    house: savedProfile.house || "Block A - 102",

    residentId: savedProfile.residentId || "EH-2026-001",

    moveIn: savedProfile.moveIn || "January 2026",

    emergency: savedProfile.emergency || "",

  });



  const [password, setPassword] = useState({

    current: "",

    newPassword: "",

    confirm: ""

  });



  const update = (
    field:string,
    value:string
  ) => {

    setProfile({

      ...profile,

      [field]: value

    });

  };



  const handlePhoto = (
    e:React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];


    if(file){

      const image =
        URL.createObjectURL(file);


      update("photo", image);

    }

  };



  const saveProfile = () => {

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );


    alert("Profile saved successfully");

  };



  const changePassword = () => {


    if(
      !password.newPassword ||
      password.newPassword !== password.confirm
    ){

      alert("Passwords do not match");

      return;

    }


    alert("Password changed successfully");


    setPassword({

      current:"",

      newPassword:"",

      confirm:""

    });


  };




  return (

    <div className="space-y-8">


      <div>

        <h1 className="text-3xl font-bold">
          My Profile
        </h1>


        <p className="text-gray-500 mt-2">
          Manage your personal information.
        </p>

      </div>




      {/* PROFILE HEADER */}

      <div className="bg-white rounded-xl shadow p-6 flex items-center gap-5">


        {
          profile.photo ?

          <img

            src={profile.photo}

            className="w-24 h-24 rounded-full object-cover"

          />

          :

          <div className="
            w-24
            h-24
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            text-4xl
            font-bold
          ">

            {profile.name.charAt(0)}

          </div>

        }



        <div>

          <h2 className="text-2xl font-bold">
            {profile.name}
          </h2>


          <p className="text-gray-500">
            Resident
          </p>


          <label className="
            mt-3
            inline-block
            cursor-pointer
            text-blue-600
          ">

            Upload Photo

            <input

              type="file"

              hidden

              accept="image/*"

              onChange={handlePhoto}

            />

          </label>


        </div>


      </div>





      {/* PERSONAL INFORMATION */}

      <div className="bg-white rounded-xl shadow p-6">


        <h2 className="text-xl font-bold mb-5">
          Personal Information
        </h2>



        <div className="grid md:grid-cols-2 gap-5">


          <input

            value={profile.name}

            onChange={(e)=>update("name",e.target.value)}

            className="border rounded-lg p-3"

            placeholder="Full Name"

          />



          <input

            value={profile.email}

            onChange={(e)=>update("email",e.target.value)}

            className="border rounded-lg p-3"

            placeholder="Email"

          />



          <input

            value={profile.phone}

            onChange={(e)=>update("phone",e.target.value)}

            className="border rounded-lg p-3"

            placeholder="Phone Number"

          />



          <input

            value={profile.emergency}

            onChange={(e)=>update("emergency",e.target.value)}

            className="border rounded-lg p-3"

            placeholder="Emergency Contact"

          />


        </div>


      </div>






      {/* PASSWORD CHANGE */}

      <div className="bg-white rounded-xl shadow p-6">


        <h2 className="text-xl font-bold mb-5">
          Change Password
        </h2>



        <div className="space-y-4">


          <input

            type="password"

            placeholder="Current Password"

            value={password.current}

            onChange={(e)=>
              setPassword({
                ...password,
                current:e.target.value
              })
            }

            className="w-full border rounded-lg p-3"

          />



          <input

            type="password"

            placeholder="New Password"

            value={password.newPassword}

            onChange={(e)=>
              setPassword({
                ...password,
                newPassword:e.target.value
              })
            }

            className="w-full border rounded-lg p-3"

          />



          <input

            type="password"

            placeholder="Confirm Password"

            value={password.confirm}

            onChange={(e)=>
              setPassword({
                ...password,
                confirm:e.target.value
              })
            }

            className="w-full border rounded-lg p-3"

          />



          <button

            onClick={changePassword}

            className="bg-green-600 text-white px-6 py-3 rounded-lg"

          >

            Change Password

          </button>


        </div>


      </div>






      {/* ESTATE INFORMATION */}

      <div className="bg-white rounded-xl shadow p-6">


        <h2 className="text-xl font-bold mb-5">
          Estate Information
        </h2>



        <div className="grid md:grid-cols-2 gap-5">


          <input

            value={profile.estate}

            onChange={(e)=>update("estate",e.target.value)}

            className="border rounded-lg p-3"

          />



          <input

            value={profile.house}

            onChange={(e)=>update("house",e.target.value)}

            className="border rounded-lg p-3"

          />



          <input

            value={profile.residentId}

            disabled

            className="border rounded-lg p-3 bg-gray-100"

          />



          <input

            value={profile.moveIn}

            onChange={(e)=>update("moveIn",e.target.value)}

            className="border rounded-lg p-3"

          />


        </div>


      </div>





      <button

        onClick={saveProfile}

        className="
          bg-blue-600
          text-white
          px-8
          py-3
          rounded-lg
        "

      >

        Save Profile Changes

      </button>



    </div>

  );

}