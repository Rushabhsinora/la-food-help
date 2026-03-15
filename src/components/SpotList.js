"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";

function haversine(lat1, lon1, lat2, lon2) {
  const R = 3958.8;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dlat = toRad(lat2 - lat1);
  const dlon = toRad(lon2 - lon1);
  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dlon / 2) ** 2;
  return parseFloat((R * 2 * Math.asin(Math.sqrt(a))).toFixed(1));
}

const RANGE_OPTIONS = [
  { label: "Any distance", value: null },
  { label: "Within 1 mile", value: 1 },
  { label: "Within 5 miles", value: 5 },
  { label: "Within 10 miles", value: 10 },
  { label: "Within 25 miles", value: 25 },
];

export function SpotList({ spots, restaurants, locations }) {
  const [selectedLocationId, setSelectedLocationId] = useState(locations[0].id);
  const [maxRange, setMaxRange] = useState(null);

  const userLocation = locations.find((l) => l.id === selectedLocationId);

  const sortedSpots = spots
    .map((spot) => ({
      ...spot,
      milesAway: haversine(
        userLocation.lat,
        userLocation.lng,
        spot.lat ?? spot.coordinates?.latitude,
        spot.lng ?? spot.coordinates?.longitude
      ),
    }))
    .filter((spot) => maxRange === null || spot.milesAway <= maxRange)
    .sort((a, b) => a.milesAway - b.milesAway);

  return (
    <>
      <div className="flex flex-wrap gap-4 my-6">
        <div>
          <label className="text-sm font-medium text-gray-600 mr-3">Your location:</label>
          <select
            value={selectedLocationId}
            onChange={(e) => setSelectedLocationId(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600 mr-3">Distance:</label>
          <select
            value={maxRange ?? ""}
            onChange={(e) => setMaxRange(e.target.value ? parseFloat(e.target.value) : null)}
            className="border border-gray-300 rounded-xl px-4 py-2 text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {RANGE_OPTIONS.map((opt) => (
              <option key={opt.label} value={opt.value ?? ""}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {sortedSpots.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedSpots.map((spot) => {
            const tags = restaurants
              .filter((r) => r.pickupSpotId === spot.id)
              .map((r) => r.name);

            return (
              <Card
                key={spot.id}
                title={spot.name}
                description={`${spot.area ?? spot.address?.city} • ${spot.address?.street ?? ""}`}
                href={`/spots/${spot.id}`}
                tags={tags}
                milesAway={spot.milesAway}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 mt-8">No spots found within this distance. Try expanding your range.</p>
      )}
    </>
  );
}