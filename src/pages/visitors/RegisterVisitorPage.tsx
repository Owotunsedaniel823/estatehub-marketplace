import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RegisterVisitorPage() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleNumber: "",
    date: "",
    time: ""
  });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();


    const visitors = JSON.parse(
      localStorage.getItem("visitors") || "[]"
    );


    const newVisitor = {
      id: Date.now(),
      ...formData,
      status: "Expected"
    };


    localStorage.setItem(
      "visitors",
      JSON.stringify([
        ...visitors,
        newVisitor
      ])
    );


    navigate("/visitors");

  };



  return (

    <div className="max-w-3xl mx-auto">


      <h1 className="text-3xl font-bold mb-6">
        Register Visitor
      </h1>



      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 space-y-5"
      >


        <input
          name="name"
          placeholder="Visitor Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />


        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />


        <input
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={formData.vehicleNumber}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />


        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />


        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />



        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Register Visitor
        </button>


      </form>


    </div>

  );
}