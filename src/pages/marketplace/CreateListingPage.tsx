export default function CreateListingPage() {
  return (
    <div className="max-w-xl rounded-xl bg-white p-8 shadow">

      <h1 className="mb-6 text-3xl font-bold">
        Create Listing
      </h1>


      <form className="space-y-5">

        <input
          placeholder="Title"
          className="w-full rounded-lg border p-3"
        />

        <textarea
          placeholder="Description"
          className="w-full rounded-lg border p-3"
        />


        <select className="w-full rounded-lg border p-3">
          <option>
            Select Category
          </option>
          <option>
            Furniture
          </option>
          <option>
            Electronics
          </option>
          <option>
            Services
          </option>
        </select>


        <input
          placeholder="Price"
          className="w-full rounded-lg border p-3"
        />


        <button
          className="w-full rounded-lg bg-blue-600 py-3 text-white"
        >
          Publish Listing
        </button>

      </form>

    </div>
  );
}