import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";

// Static demo data for user trips
const trips = [
  {
    id: 1,
    title: "Family Adventure in Malang",
    description:
      "Explore Malang's nature and city attractions with your family. Includes visits to Museum Angkut, Jodipan, and Coban Rondo Waterfall.",
    image:
      "https://images.unsplash.com/photo-1698139603263-f3b35e56abdd?auto=format&fit=crop&w=600&q=80", // nature/forest
  },
  {
    id: 2,
    title: "Backpacking to Bandung",
    description:
      "A solo journey discovering cafes, art, and shopping in Bandung. Perfect for those who love urban exploration and culinary experiences.",
    image:
      "https://images.unsplash.com/photo-1611638281871-1063d3e76e1f?auto=format&fit=crop&w=600&q=80", // city/urban
  },
  {
    id: 3,
    title: "Bali Beach Getaway",
    description:
      "A relaxing trip to Bali's best beaches, local markets, and famous temples. Ideal for groups of friends seeking sun and culture.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", // beach
  },
];

export const MyTrips = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 px-2">
        <section className="w-full max-w-5xl py-12">
          <header className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
              My Trips & Workspaces
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Here are your trip plans and workspaces. Click a trip to see more details or edit your itinerary.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition hover:shadow-xl"
              >
                <div className="h-40 w-full bg-gray-100">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-blue-700 mb-1">
                    {trip.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {trip.description}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full w-full mt-auto"
                    // onClick={() => navigate(`/my-trips/${trip.id}`)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};