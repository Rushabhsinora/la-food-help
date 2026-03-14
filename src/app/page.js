import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { mockRestaurants, mockLocations } from "@/lib/data";
import foodSpots from "@/lib/la_food_banks.json";

function haversine(lat1, lon1, lat2, lon2) {
  const R = 3958.8;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dlat = toRad(lat2 - lat1);
  const dlon = toRad(lon2 - lon1);
  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dlon / 2) ** 2;
  return (R * 2 * Math.asin(Math.sqrt(a))).toFixed(1);
}

const userLocation = mockLocations.find((l) => l.id === "loc1"); // Venice

export default function HomePage() {
  const spots = foodSpots.los_angeles_food_resources;

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black">Free Food Pickup Spots</h1>
        <p className="text-xl text-gray-600">Find food near you in LA</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {spots.map((spot) => {
          const tags = mockRestaurants
            .filter((r) => r.pickupSpotId === spot.id)
            .map((r) => r.name);

          const milesAway = haversine(
            userLocation.lat,
            userLocation.lng,
            spot.coordinates.latitude,
            spot.coordinates.longitude
          );

          return (
            <Card
              key={spot.id}
              title={spot.name}
              description={`${spot.address.city} • ${spot.address.street}`}
              href={`/spots/${spot.id}`}
              tags={tags}
              milesAway={milesAway}
            />
          );
        })}
      </div>
    </Layout>
  );
}