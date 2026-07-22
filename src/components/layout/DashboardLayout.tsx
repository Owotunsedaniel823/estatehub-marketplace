import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Store,
  Users,
  UserCircle,
  LogOut,
  Bell,
} from "lucide-react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="flex w-72 flex-col bg-slate-900 text-white shadow-xl">
        <div className="border-b border-slate-700 p-6">
          <h1 className="text-3xl font-bold text-blue-400">
            EstateHub
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Marketplace Portal
          </p>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/marketplace"
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
          >
            <Store size={20} />
            Marketplace
          </Link>

          <Link
            to="/visitors"
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
          >
            <Users size={20} />
            Visitors
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
          >
            <UserCircle size={20} />
            Profile
          </Link>
        </nav>

        <div className="border-t border-slate-700 p-4">
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 font-medium transition hover:bg-red-700"
          >
            <LogOut size={18} />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b bg-white px-8 py-5 shadow-sm">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Dashboard
            </h2>

            <p className="text-sm text-slate-500">
              Welcome back to EstateHub
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button className="rounded-full bg-slate-100 p-3 hover:bg-slate-200">
              <Bell size={20} />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                D
              </div>

              <div>
                <p className="font-semibold">Daniel</p>
                <p className="text-sm text-slate-500">
                  Resident
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}