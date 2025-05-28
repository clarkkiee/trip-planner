import React, { useState } from "react";

// Ganti dengan import Navbar/Button asli jika sudah tersedia
// import { Navbar } from "@/components/common/Navbar";
// import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="p-4 bg-blue-600 text-white font-bold text-xl shadow">EasyTrip</nav>
);
const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-2 transition"
  >
    {children}
  </button>
);

const tabs = [
  { key: "eksplorasi", label: "Eksplorasi" },
  { key: "itinerary", label: "Itinerary" },
  { key: "budget", label: "Budget" },
  { key: "collaboration", label: "Kolaborasi" },
  { key: "notes", label: "Catatan" },
];

const tripDetail = {
  id: 1,
  title: "Family Adventure in Malang",
  description:
    "Explore Malang's nature and city attractions with your family. Includes visits to Museum Angkut, Jodipan, and Coban Rondo Waterfall.",
  image:
    "https://images.unsplash.com/photo-1653182771511-293eda6ab40b?auto=format&fit=crop&w=600&q=80",
};

const destinations = [
  {
    id: 1,
    name: "Museum Angkut",
    desc: "A transportation museum with unique vehicle collections and creative zones.",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1698139603263-f3b35e56abdd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Jodipan Colorful Village",
    desc: "A vibrant riverside village with colorful houses, murals, and photo spots.",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1702429619910-5c191cccce44?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Coban Rondo Waterfall",
    desc: "A beautiful natural waterfall surrounded by pine forest, perfect for relaxing.",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1653182771511-293eda6ab40b?auto=format&fit=crop&w=600&q=80",
  },
];

const itinerary = [
  {
    day: 1,
    activities: [
      "Arrive in Malang, check in to hotel",
      "City tour: Tugu Monument, Jodipan Village",
      "Dinner at local restaurant",
    ],
  },
  {
    day: 2,
    activities: [
      "Visit Museum Angkut",
      "Visit Batu Night Spectacular",
      "Shopping at Batu",
    ],
  },
  {
    day: 3,
    activities: [
      "Nature trip to Coban Rondo Waterfall",
      "Lunch at eco park cafe",
      "Departure",
    ],
  },
];

const budgetDetail = {
  accommodation: 900000,
  transportation: 700000,
  tickets: 500000,
  foods: 600000,
  others: 200000,
};

const collaborationList = [
  {
    name: "Aloysius Juan",
    email: "harlow@example.com",
    role: "Owner",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Billy Jonathan",
    email: "billy@example.com",
    role: "Collaborator",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Maruli Gilbert",
    email: "maruli@example.com",
    role: "Collaborator",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

const notes = [
  {
    id: 1,
    content: "Jangan lupa bawa jaket untuk perjalanan ke Coban Rondo.",
    author: "Billy Jonathan",
  },
  {
    id: 2,
    content: "Check ulang tiket Museum Angkut sebelum berangkat.",
    author: "Harlow Stockert",
  },
];

export const ViewTrip = () => {
  const [activeTab, setActiveTab] = useState("eksplorasi");

  const rupiah = (val) =>
    "Rp " +
    val.toLocaleString("id-ID", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 px-2">
        <section className="w-full max-w-4xl py-10">
          {/* Trip header */}
          <div className="flex flex-col md:flex-row gap-6 items-center mb-10">
            <img
              src={tripDetail.image}
              alt={tripDetail.title}
              className="w-full max-w-xs h-44 object-cover rounded-2xl shadow-lg"
            />
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                {tripDetail.title}
              </h2>
              <p className="text-gray-700 text-base mb-2">
                {tripDetail.description}
              </p>
              <Button>Edit Trip Info</Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b mb-7 gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`px-4 py-2 font-semibold rounded-t-lg transition-all ${
                  activeTab === tab.key
                    ? "bg-white border-l border-t border-r border-blue-200 text-blue-700"
                    : "bg-blue-50 text-blue-400"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-4">
            {activeTab === "eksplorasi" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {destinations.map((dest) => (
                  <div
                    key={dest.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="h-32 w-full object-cover"
                    />
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg font-semibold text-blue-700">
                          {dest.name}
                        </h4>
                        <span className="text-yellow-500 font-bold">
                          ★ {dest.rating}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm flex-1">{dest.desc}</p>
                      <Button size="sm" className="mt-3 w-full rounded-full">
                        Add to Itinerary
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "itinerary" && (
              <div className="flex flex-col gap-6">
                {itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="bg-white rounded-xl shadow p-5"
                  >
                    <div className="font-bold text-blue-700 mb-2">
                      Day {day.day}
                    </div>
                    <ul className="list-disc ml-6 text-gray-700">
                      {day.activities.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "budget" && (
              <div className="bg-white rounded-xl shadow p-5 max-w-md mx-auto">
                <h3 className="text-lg font-bold text-blue-700 mb-3">
                  Budget Estimation
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span>Accommodation</span>
                    <span>{rupiah(budgetDetail.accommodation)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transportation</span>
                    <span>{rupiah(budgetDetail.transportation)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tickets</span>
                    <span>{rupiah(budgetDetail.tickets)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Foods</span>
                    <span>{rupiah(budgetDetail.foods)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Others</span>
                    <span>{rupiah(budgetDetail.others)}</span>
                  </div>
                  <hr className="my-2"/>
                  <div className="flex justify-between font-bold text-blue-700">
                    <span>Total</span>
                    <span>
                      {rupiah(
                        budgetDetail.accommodation +
                          budgetDetail.transportation +
                          budgetDetail.tickets +
                          budgetDetail.foods +
                          budgetDetail.others
                      )}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "collaboration" && (
              <div className="bg-white rounded-xl shadow p-5 max-w-md mx-auto">
                <h3 className="text-lg font-bold text-blue-700 mb-3">
                  Kolaborator
                </h3>
                <ul className="flex flex-col gap-3">
                  {collaborationList.map((user, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                      <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                        {user.role}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full">Tambah Kolaborator</Button>
              </div>
            )}

            {activeTab === "notes" && (
              <div className="bg-white rounded-xl shadow p-5 max-w-md mx-auto">
                <h3 className="text-lg font-bold text-blue-700 mb-3">
                  Catatan Trip
                </h3>
                <ul className="flex flex-col gap-3">
                  {notes.map((note) => (
                    <li
                      key={note.id}
                      className="border p-3 rounded-md bg-blue-50"
                    >
                      <div className="text-gray-700">{note.content}</div>
                      <div className="text-xs text-right text-gray-500">
                        — {note.author}
                      </div>
                    </li>
                  ))}
                </ul>
                <form className="mt-5 flex flex-col gap-2">
                  <textarea
                    placeholder="Tulis catatan baru..."
                    className="border rounded px-3 py-2 text-sm resize-none"
                    rows={2}
                    disabled
                  />
                  <Button className="w-full" disabled>
                    Tambah Catatan (Demo)
                  </Button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};