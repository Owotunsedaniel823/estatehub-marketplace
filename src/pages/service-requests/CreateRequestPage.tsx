import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateRequestPage() {

  const navigate = useNavigate();

  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({

    title: "",
    description: "",
    category: "Maintenance",
    priority: "Medium",
    status: "Pending",

  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

      setImage(reader.result as string);

    };

    reader.readAsDataURL(file);

  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!form.title || !form.description) {

      alert("Please complete all required fields.");

      return;

    }

    setLoading(true);

    const requests = JSON.parse(

      localStorage.getItem("serviceRequests") || "[]"

    );

    requests.push({

      id: Date.now(),

      ...form,

      image,

      createdAt: new Date().toLocaleString(),

      timeline: [

        {

          status: "Pending",

          date: new Date().toLocaleString(),

        },

      ],

      comments: [],

    });

    localStorage.setItem(

      "serviceRequests",

      JSON.stringify(requests)

    );

    setTimeout(() => {

      navigate("/service-requests");

    }, 500);

  };

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">

          Create Service Request

        </h1>

        <p className="text-gray-500 mt-2">

          Submit maintenance or estate related issues.

        </p>

      </div>

      <form

        onSubmit={handleSubmit}

        className="bg-white rounded-xl shadow p-6 space-y-5"

      >

        <input

          name="title"

          placeholder="Request Title"

          value={form.title}

          onChange={handleChange}

          className="w-full border rounded-lg p-3"

        />

        <textarea

          name="description"

          placeholder="Describe the issue..."

          value={form.description}

          onChange={handleChange}

          rows={5}

          className="w-full border rounded-lg p-3"

        />

        <div className="grid md:grid-cols-2 gap-4">

          <select

            name="category"

            value={form.category}

            onChange={handleChange}

            className="border rounded-lg p-3"

          >

            <option>Maintenance</option>
            <option>Security</option>
            <option>Cleaning</option>
            <option>Electricity</option>
            <option>Water</option>
            <option>Other</option>

          </select>

          <select

            name="priority"

            value={form.priority}

            onChange={handleChange}

            className="border rounded-lg p-3"

          >

            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Emergency</option>

          </select>

        </div>

        <div>

          <label className="font-medium">

            Upload Image

          </label>

          <input

            type="file"

            accept="image/*"

            onChange={handleImage}

            className="mt-2"

          />

        </div>

        {image && (

          <img

            src={image}

            className="h-48 rounded-xl object-cover"

          />

        )}

        <button

          disabled={loading}

          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"

        >

          {loading ? "Submitting..." : "Submit Request"}

        </button>

      </form>

    </div>

  );

}