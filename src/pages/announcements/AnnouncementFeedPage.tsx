import { useEffect, useState } from "react";

interface Announcement {
  id: number;
  title: string;
  body: string;
  expiryDate: string;
  createdAt: string;
}

const AnnouncementFeedPage = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);


  useEffect(() => {
    const data = localStorage.getItem("announcements");

    if (data) {
      setAnnouncements(JSON.parse(data));
    }
  }, []);


  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-bold">
          Announcement Feed
        </h1>

        <a
          href="/create-announcement"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Create Announcement
        </a>

      </div>


      {announcements.length === 0 ? (

        <div className="text-gray-500">
          No announcements yet.
        </div>

      ) : (

        <div className="grid gap-5">

          {announcements.map((item) => (

            <div
              key={item.id}
              className="border rounded-xl p-5 shadow-sm bg-white"
            >

              <h2 className="text-xl font-semibold">
                {item.title}
              </h2>


              <p className="mt-3 text-gray-600">
                {item.body}
              </p>


              <div className="mt-4 text-sm text-gray-500">
                Posted: {item.createdAt}
              </div>


              <div className="text-sm text-red-500">
                Expiry: {item.expiryDate}
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};


export default AnnouncementFeedPage;