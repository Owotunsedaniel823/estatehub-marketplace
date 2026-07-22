import DashboardLayout from "../../components/layout/DashboardLayout";

export default function EstateProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <h1 className="text-3xl font-bold">
          Estate Profile
        </h1>

        <div className="rounded-xl bg-white p-8 shadow">

          <div className="flex items-center gap-6">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
              EH
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Green Valley Estate
              </h2>

              <p className="text-gray-500">
                Lagos, Nigeria
              </p>
            </div>

          </div>

        </div>


        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="mb-4 text-lg font-bold">
              Contact Information
            </h3>

            <p>
              Email: admin@greenvalley.com
            </p>

            <p>
              Phone: +234 800 000 0000
            </p>
          </div>


          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="mb-4 text-lg font-bold">
              Estate Address
            </h3>

            <p>
              15 Unity Road,
              Ikeja, Lagos
            </p>
          </div>

        </div>


        <div className="rounded-xl bg-white p-8 shadow">

          <h3 className="mb-6 text-xl font-bold">
            Estate Settings
          </h3>


          <div className="grid gap-5 md:grid-cols-2">

            <input
              placeholder="Estate Name"
              className="rounded-lg border p-3"
            />

            <input
              placeholder="Address"
              className="rounded-lg border p-3"
            />

            <input
              placeholder="Email"
              className="rounded-lg border p-3"
            />

            <input
              placeholder="Phone Number"
              className="rounded-lg border p-3"
            />

          </div>


          <button
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Save Changes
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}