import MainLayout from "../../layouts/MainLayout";

export default function DashboardPage() {
  return (
    <MainLayout>
      <h1 className="mb-6 text-3xl font-bold">
        Dashboard Overview
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Properties</h3>
          <p className="mt-3 text-4xl font-bold">128</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Visitors</h3>
          <p className="mt-3 text-4xl font-bold">57</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Businesses</h3>
          <p className="mt-3 text-4xl font-bold">34</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Announcements</h3>
          <p className="mt-3 text-4xl font-bold">12</p>
        </div>
      </div>
    </MainLayout>
  );
}