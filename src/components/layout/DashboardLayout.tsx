import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type DashboardLayoutProps = {
  children: ReactNode;
};

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "🏠",
  },
  {
    name: "Marketplace",
    path: "/marketplace",
    icon: "🛒",
  },
  {
    name: "Visitors",
    path: "/visitors",
    icon: "🚗",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "👤",
  },
];

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="hidden w-72 bg-blue-700 text-white md:block">

        <div className="border-b border-blue-600 p-6">
          <h1 className="text-3xl font-bold">
            EstateHub
          </h1>

          <p className="mt-1 text-sm text-blue-200">
            Estate Management Platform
          </p>
        </div>


        <nav className="space-y-2 p-5">

          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                location.pathname === item.path
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-blue-600"
              }`}
            >
              <span className="text-xl">
                {item.icon}
              </span>

              {item.name}
            </Link>
          ))}


          <Link
            to="/login"
            className="mt-10 flex items-center gap-3 rounded-xl bg-red-500 px-4 py-3 hover:bg-red-600"
          >
            <span>🚪</span>
            Logout
          </Link>

        </nav>

      </aside>


      {/* Main Section */}
      <div className="flex-1">


        {/* Header */}
        <header className="flex items-center justify-between bg-white px-6 py-5 shadow">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Dashboard
            </h2>

            <p className="text-sm text-gray-500">
              Welcome back to EstateHub
            </p>
          </div>


          <div className="flex items-center gap-5">

            <button className="rounded-full bg-gray-100 p-3 text-xl">
              🔔
            </button>


            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                D
              </div>

              <div>
                <p className="font-semibold">
                  Daniel
                </p>

                <p className="text-xs text-gray-500">
                  Resident
                </p>
              </div>

            </div>

          </div>

        </header>


        {/* Page Content */}
        <main className="p-6 md:p-8">
          {children}
        </main>


      </div>

    </div>
  );
}