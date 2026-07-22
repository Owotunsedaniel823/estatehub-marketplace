import DashboardLayout from "../../components/layout/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Welcome to EstateHub 👋
        </h1>

        <p className="mb-8 text-gray-500">
          Manage your estate activities from one place.
        </p>

        {/* Statistics Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-gray-500">
              Total Residents
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              1,245
            </h2>

            <p className="mt-2 text-sm text-green-600">
              +12% this month
            </p>
          </div>


          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-gray-500">
              Active Listings
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              89
            </h2>

            <p className="mt-2 text-sm text-green-600">
              Marketplace
            </p>
          </div>


          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-gray-500">
              Open Requests
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              23
            </h2>

            <p className="mt-2 text-sm text-orange-600">
              Need attention
            </p>
          </div>


          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-gray-500">
              Visitors Today
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              14
            </h2>

            <p className="mt-2 text-sm text-blue-600">
              Security tracking
            </p>
          </div>

        </div>


        {/* Lower Sections */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Announcements */}
          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-4 text-xl font-bold">
              Recent Announcements
            </h2>

            <div className="space-y-4">

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold">
                  Estate Security Update
                </h3>

                <p className="text-sm text-gray-500">
                  New visitor rules have been added.
                </p>
              </div>


              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold">
                  Community Meeting
                </h3>

                <p className="text-sm text-gray-500">
                  Meeting scheduled for Saturday.
                </p>
              </div>

            </div>

          </div>


          {/* Chart Placeholder */}
          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-4 text-xl font-bold">
              Activity Overview
            </h2>

            <div className="flex h-56 items-center justify-center rounded-xl bg-gray-100">
              <p className="text-gray-400">
                Chart Placeholder
              </p>
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}