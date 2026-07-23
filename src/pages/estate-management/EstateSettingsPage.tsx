import { useState } from "react";


export default function EstateSettingsPage() {


  const saved = JSON.parse(

    localStorage.getItem("settings") || "{}"

  );



  const [settings, setSettings] = useState({

    notifications: saved.notifications ?? true,

    emailAlerts: saved.emailAlerts ?? true,

    securityAlerts: saved.securityAlerts ?? true,

    darkMode: saved.darkMode ?? false,

  });





  const updateSetting = (

    key:string,

    value:boolean

  )=>{


    setSettings({

      ...settings,

      [key]:value,

    });


  };





  const saveSettings = ()=>{


    localStorage.setItem(

      "settings",

      JSON.stringify(settings)

    );


    alert("Settings saved successfully");

  };





  return (

    <div className="space-y-8">



      <div>

        <h1 className="text-3xl font-bold text-gray-800">

          Settings

        </h1>


        <p className="text-gray-500 mt-2">

          Manage your account and estate preferences.

        </p>


      </div>







      {/* Notifications */}


      <div className="bg-white rounded-xl shadow p-6">


        <h2 className="text-xl font-bold mb-5">

          Notifications

        </h2>



        <div className="space-y-5">


          <SettingRow

            title="Push Notifications"

            description="Receive estate updates and alerts"

            checked={settings.notifications}

            onChange={(v)=>updateSetting("notifications",v)}

          />



          <SettingRow

            title="Email Alerts"

            description="Receive important emails"

            checked={settings.emailAlerts}

            onChange={(v)=>updateSetting("emailAlerts",v)}

          />



          <SettingRow

            title="Security Alerts"

            description="Get notified about account activity"

            checked={settings.securityAlerts}

            onChange={(v)=>updateSetting("securityAlerts",v)}

          />


        </div>


      </div>








      {/* Security */}


      <div className="bg-white rounded-xl shadow p-6">


        <h2 className="text-xl font-bold mb-3">

          Security

        </h2>


        <p className="text-gray-500 mb-5">

          Keep your account protected.

        </p>


        <button

          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          "

        >

          Change Password

        </button>


      </div>








      {/* Appearance */}


      <div className="bg-white rounded-xl shadow p-6">


        <h2 className="text-xl font-bold mb-5">

          Appearance

        </h2>



        <SettingRow

          title="Dark Mode"

          description="Change dashboard appearance"

          checked={settings.darkMode}

          onChange={(v)=>updateSetting("darkMode",v)}

        />


      </div>







      <button

        onClick={saveSettings}

        className="
        bg-green-600
        text-white
        px-8
        py-3
        rounded-lg
        "

      >

        Save Settings

      </button>




    </div>

  );

}






function SettingRow({

  title,

  description,

  checked,

  onChange,

}:{

  title:string;

  description:string;

  checked:boolean;

  onChange:(value:boolean)=>void;

}){


  return (

    <div className="flex justify-between items-center">


      <div>

        <h3 className="font-semibold">

          {title}

        </h3>


        <p className="text-gray-500 text-sm">

          {description}

        </p>


      </div>



      <input

        type="checkbox"

        checked={checked}

        onChange={(e)=>onChange(e.target.checked)}

        className="w-5 h-5"

      />


    </div>

  );

}