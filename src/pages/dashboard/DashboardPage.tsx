import {
  Users,
  Store,
  Car,
  ClipboardList,
  Megaphone,
  CalendarDays,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Residents",
      value: "1,245",
      icon: Users,
      description: "+12% this month",
    },
    {
      title: "Active Listings",
      value: "89",
      icon: Store,
      description: "+5 new listings",
    },
    {
      title: "Visitors Today",
      value: "14",
      icon: Car,
      description: "3 currently inside",
    },
    {
      title: "Open Requests",
      value: "23",
      icon: ClipboardList,
      description: "8 pending review",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Welcome */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome back, Daniel 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Here's what's happening in your estate today.
          </p>
        </div>


        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      {item.title}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-slate-800">
                      {item.value}
                    </h2>

                    <p className="mt-2 text-sm text-green-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="rounded-xl bg-blue-100 p-4 text-blue-600">
                    <Icon size={28} />
                  </div>

                </div>
              </div>
            );
          })}

        </div>


        {/* Bottom Sections */}
        <div className="grid gap-6 lg:grid-cols-2">


          {/* Announcements */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-5 flex items-center gap-3">
              <Megaphone className="text-blue-600" />

              <h2 className="text-xl font-bold">
                Recent Announcements
              </h2>
            </div>


            <div className="space-y-4">

              <div className="rounded-xl bg-slate-50 p-4">
                <h3 className="font-semibold">
                  Estate Security Update
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  New visitor verification rules are now active.
                </p>
              </div>


              <div className="rounded-xl bg-slate-50 p-4">
                <h3 className="font-semibold">
                  Community Meeting
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Meeting scheduled for Saturday 5PM.
                </p>
              </div>

            </div>

          </div>



          {/* Visitors */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-5 flex items-center gap-3">
              <CalendarDays className="text-blue-600" />

              <h2 className="text-xl font-bold">
                Upcoming Visitors
              </h2>
            </div>


            <div className="space-y-4">

              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

                <div>
                  <h3 className="font-semibold">
                    John Smith
                  </h3>

                  <p className="text-sm text-slate-500">
                    Tomorrow • 10:00 AM
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                  Approved
                </span>

              </div>


              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

                <div>
                  <h3 className="font-semibold">
                    Sarah Williams
                  </h3>

                  <p className="text-sm text-slate-500">
                    Today • 3:00 PM
                  </p>
                </div>

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                  Pending
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}