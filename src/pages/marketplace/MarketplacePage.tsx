import MainLayout from "../../layouts/MainLayout";

export default function MarketplacePage() {
  return (
    <MainLayout>
      <h1 className="mb-6 text-3xl font-bold">
        Marketplace
      </h1>

      <div className="rounded-xl bg-white p-8 shadow">
        <p className="text-lg text-gray-600">
          Welcome to the EstateHub Marketplace.
        </p>

        <p className="mt-4 text-gray-500">
          This is where properties will be listed.
        </p>
      </div>
    </MainLayout>
  );
}