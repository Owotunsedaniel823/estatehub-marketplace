import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateAnnouncementPage = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    title: "",
    body: "",
    expiryDate: ""
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();


    const existingAnnouncements = JSON.parse(
      localStorage.getItem("announcements") || "[]"
    );


    const newAnnouncement = {
      id: Date.now(),
      title: formData.title,
      body: formData.body,
      expiryDate: formData.expiryDate,
      createdAt: new Date().toLocaleDateString()
    };


    localStorage.setItem(
      "announcements",
      JSON.stringify([
        newAnnouncement,
        ...existingAnnouncements
      ])
    );


    navigate("/announcements");

  };


  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Create Announcement
      </h1>


      <form
        onSubmit={handleSubmit}
        className="max-w-xl space-y-5"
      >

        <input
          name="title"
          placeholder="Announcement title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />


        <textarea
          name="body"
          placeholder="Announcement description"
          value={formData.body}
          onChange={handleChange}
          rows={5}
          className="w-full border rounded-lg p-3"
          required
        />


        <div>

          <label className="block mb-2 text-sm">
            Expiry Date
          </label>

          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

        </div>


        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Publish Announcement
        </button>


      </form>

    </div>

  );
};


export default CreateAnnouncementPage;