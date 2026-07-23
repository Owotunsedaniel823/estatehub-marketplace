import DashboardLayout from "../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";

export default function RequestDetailsPage() {
  const request = {
    id: 1,
    title: "Broken Street Light",
    category: "Maintenance",
    status: "Open",
    description:
      "The street light near Block C has not been working for the past three days. It makes the area very dark at night.",
    submittedBy: "Daniel",
    date: "22 July 2026",
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">

        <div className="mb-6 flex items-center justify-between">

          <h1 className="text-3xl font-bold">
            Request Details
          </h1>

          <Link
            to="/service-requests"
            className="rounded-lg bg-gray-500 px-5 py-2 text-white hover:bg-gray-600"
          >
            Back
          </Link>

        </div>

        <div className="space-y-6">

          <div>

            <h2 className="text-lg font-semibold">
              Request Title
            </h2>

            <p>{request.title}</p>

          </div>

          <div>

            <h2 className="text-lg font-semibold">
              Category
            </h2>

            <p>{request.category}</p>

          </div>

          <div>

            <h2 className="text-lg font-semibold">
              Status
            </h2>

            <span className="rounded-full bg-red-100 px-4 py-2 text-red-600">
              {request.status}
            </span>

          </div>

          <div>

            <h2 className="text-lg font-semibold">
              Description
            </h2>

            <p>{request.description}</p>

          </div>

          <div>

            <h2 className="text-lg font-semibold">
              Submitted By
            </h2>

            <p>{request.submittedBy}</p>

          </div>

          <div>

            <h2 className="text-lg font-semibold">
              Date Submitted
            </h2>

            <p>{request.date}</p>

          </div>

        </div>

        <div className="mt-10 rounded-lg border bg-gray-50 p-6">

          <h2 className="mb-4 text-xl font-bold">
            Timeline
          </h2>

          <ul className="space-y-3">

            <li>✅ Request Submitted</li>

            <li>🛠 Awaiting Staff Review</li>

            <li>⏳ Work Yet to Begin</li>

          </ul>

        </div>

      </div>
    </DashboardLayout>
  );
}