import { Navbar } from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaUserFriends, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";

// Static dropdown options based on the user profile and scenarios described in the report.
const staticBudgetOptions = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

const staticTravellerOptions = [
  { label: "Solo", value: "solo" },
  { label: "Family", value: "family" },
  { label: "Friends", value: "friends" },
];

// This static itinerary is for demo purposes only.
const exampleTrip = {
  location: "Malang, East Java",
  noOfDays: 3,
  budget: "Medium",
  traveller: "Family",
  itinerary: [
    {
      day: 1,
      activities: [
        "Arrive in Malang, check in to hotel",
        "City tour: Tugu Monument, Jodipan Village",
        "Dinner at local restaurant"
      ]
    },
    {
      day: 2,
      activities: [
        "Visit Museum Angkut",
        "Visit Batu Night Spectacular",
        "Shopping at Batu"
      ]
    },
    {
      day: 3,
      activities: [
        "Nature trip to Coban Rondo Waterfall",
        "Lunch at eco park cafe",
        "Departure"
      ]
    },
  ]
};

export const CreateTrip = () => {
  // Model: Form state management
  const [formData, setFormData] = useState({
    location: "",
    noOfDays: "",
    budget: "",
    traveller: "",
  });
  const [showResult, setShowResult] = useState(false);

  // Controller: Handles input changes
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Controller: Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 px-2">
        <section className="w-full max-w-lg bg-white rounded-3xl shadow-xl px-6 md:px-10 py-8 md:py-12 mt-8 mb-16">
          
          <header className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">Plan Your Trip</h2>
            <p className="text-gray-600 text-base md:text-lg">
              Fill in the form below to create your custom trip itinerary.<br />
              <span className="text-xs italic text-gray-400">(Demo UI with static data, not connected to backend)</span>
            </p>
          </header>

          {/* View: Trip Creation Form */}
          <form
            className="flex flex-col gap-6"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            {/* Location */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1 flex items-center gap-1" htmlFor="location">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Destination <span className="text-red-500">*</span></span>
              </label>
              <Input
                id="location"
                type="text"
                placeholder="e.g. Malang, East Java"
                value={formData.location}
                onChange={e => handleInputChange("location", e.target.value)}
                required
              />
            </div>
            {/* Days */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1 flex items-center gap-1" htmlFor="days">
                <FaCalendarAlt className="text-blue-400" />
                <span>Number of Days <span className="text-red-500">*</span></span>
              </label>
              <Input
                id="days"
                type="number"
                min={1}
                max={10}
                placeholder="1 - 10"
                value={formData.noOfDays}
                onChange={e => handleInputChange("noOfDays", e.target.value)}
                required
              />
            </div>
            {/* Budget */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1 flex items-center gap-1" htmlFor="budget">
                <FaMoneyBillWave className="text-blue-400" />
                <span>Budget <span className="text-red-500">*</span></span>
              </label>
              <select
                id="budget"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                value={formData.budget}
                onChange={e => handleInputChange("budget", e.target.value)}
                required
              >
                <option value="">Select budget</option>
                {staticBudgetOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            {/* Traveller */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1 flex items-center gap-1" htmlFor="traveller">
                <FaUserFriends className="text-blue-400" />
                <span>Traveller Type <span className="text-red-500">*</span></span>
              </label>
              <select
                id="traveller"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                value={formData.traveller}
                onChange={e => handleInputChange("traveller", e.target.value)}
                required
              >
                <option value="">Select type</option>
                {staticTravellerOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full py-3 rounded-xl mt-4 text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition text-white"
            >
              Generate My Trip Plan
            </Button>
          </form>

          {/* View: Example Trip Result (static) */}
          {showResult && (
            <section className="mt-10 border-t pt-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-700 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" /> Example Trip Itinerary
              </h3>
              <div className="mb-2 text-gray-700 text-base">
                <strong>Destination:</strong> {exampleTrip.location}<br />
                <strong>Days:</strong> {exampleTrip.noOfDays}<br />
                <strong>Budget:</strong> {exampleTrip.budget}<br />
                <strong>Traveller Type:</strong> {exampleTrip.traveller}
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {exampleTrip.itinerary.map(day => (
                  <div key={day.day} className="bg-blue-50 rounded-lg px-4 py-2 shadow-sm">
                    <div className="font-semibold text-blue-700 mb-1">Day {day.day}</div>
                    <ul className="list-disc ml-6 text-gray-700">
                      {day.activities.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
        </section>
      </main>
    </>
  );
};