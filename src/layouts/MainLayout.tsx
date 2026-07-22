import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white">
        <div className="border-b border-blue-600 p-6">
          <h1 className="text-2xl font-bold">
            EstateHub
          </h1>
        </div>

        <nav className="space-y-2 p-4">

          <Link
            to="/dashboard"
            className="block rounded-lg px-4 py-3 hover:bg-blue-600"
          >
            Dashboard
          </Link>

          <Link
            to="/marketplace"
            className="block rounded-lg px-4 py-3 hover:bg-blue-600"
          >
            Marketplace
          </Link>

          <Link
            to="/visitors"
            className="block rounded-lg px-4 py-3 hover:bg-blue-600"
          >
            Visitors
          </Link>

          <Link
            to="/announcements"
            className="block rounded-lg px-4 py-3 hover:bg-blue-600"
          >
            Announcements
          </Link>

          <Link
            to="/businesses"
            className="block rounded-lg px-4 py-3 hover:bg-blue-600"
          >
            Businesses
          </Link>

          <Link
            to="/profile"
            className="block rounded-lg px-4 py-3 hover:bg-blue-600"
          >
            Profile
          </Link>

        </nav>
      </aside>


      {/* Main Content */}
      <div className="flex-1">

        <header className="flex h-16 items-center justify-between border-b bg-white px-8 shadow-sm">

          <h2 className="text-xl font-semibold">
            EstateHub
          </h2>

          <div className="font-medium">
            Welcome 👋
          </div>

        </header>


        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}