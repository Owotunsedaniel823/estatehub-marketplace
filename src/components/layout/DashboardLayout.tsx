import type { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Megaphone,
  Bell,
  User,
  Building2,
  Users,
  Store,
  Settings,
  LogOut,
  BriefcaseBusiness,
  ClipboardList,
} from "lucide-react";

interface DashboardLayoutProps {
  children?: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {

  const navigate = useNavigate();

  const handleLogout = () => {

    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    navigate("/login");

  };



  const menu = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Marketplace",
      path: "/marketplace",
      icon: Store,
    },

    {
      name: "Service Requests",
      path: "/service-requests",
      icon: ClipboardList,
    },

    {
      name: "Business Directory",
      path: "/business-directory",
      icon: BriefcaseBusiness,
    },

    {
      name: "Announcements",
      path: "/announcements",
      icon: Megaphone,
    },

    {
      name: "Notifications",
      path: "/notifications",
      icon: Bell,
    },

    {
      name: "Visitors",
      path: "/visitors",
      icon: Users,
    },

    {
      name: "Estate Management",
      path: "/estate-management",
      icon: Building2,
    },

    {
      name: "Profile",
      path: "/estate-profile",
      icon: User,
    },

    {
      name: "Settings",
      path: "/estate-settings",
      icon: Settings,
    },

  ];



  return (

    <div className="flex min-h-screen bg-gray-100">

      <aside
        className="
        w-72
        bg-white
        shadow-lg
        p-6
        min-h-screen
        flex
        flex-col
        "
      >

        <h1
          className="
          text-2xl
          font-bold
          text-blue-600
          mb-8
          "
        >
          EstateHub
        </h1>

        <nav className="space-y-2 flex-1">

          {menu.map((item) => {

            const Icon = item.icon;

            return (

              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >

                <Icon size={20} />

                <span>{item.name}</span>

              </NavLink>

            );

          })}

        </nav>

        <button
          onClick={handleLogout}
          className="
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-lg
          text-red-500
          hover:bg-red-50
          hover:text-red-700
          "
        >

          <LogOut size={20} />

          Logout

        </button>

      </aside>

      <main className="flex-1 p-8">

        {children}

      </main>

    </div>

  );

}