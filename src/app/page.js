import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { fetchEntry } from "../../public/services/entryService.jsx";

function haversine(lat1, lon1, lat2, lon2) {
  const R = 3958.8; // Earth radius in miles
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dlat = toRad(lat2 - lat1);
  const dlon = toRad(lon2 - lon1);
  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dlon / 2) ** 2;
  return (R * 2 * Math.asin(Math.sqrt(a))).toFixed(1);
}

export default async function HomePage() {
  // 🔥 Get REAL data from Firebase
  const spots = await fetchEntry('Spots');
  const restaurants = await fetchEntry('Restaurants');
  
  // Default user location (Venice)
  const userLocation = { lat: 33.9850, lng: -118.4695 };

  return (
    <Layout>
      <div className="mb-16 text-center">
        <h1 className="font-titillium text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
          Free Food Pickup Spots
        </h1>
        <p className="font-inter text-2xl md:text-3xl text-gray-700 max-w-2xl mx-auto mb-20">
          Find food near you in LA - No ID required
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {spots?.map((spot) => {
          const tags = restaurants
            .filter((r) => r.pickupSpotId === spot.id)
            .map((r) => r.name);

          const milesAway = haversine(
            userLocation.lat,
            userLocation.lng,
            spot.lat || spot.coordinates?.latitude,
            spot.lng || spot.coordinates?.longitude
          );

          return (
            <Card
              key={spot.id}
              title={spot.name}
              description={`${spot.area || spot.address?.city} • ${milesAway} miles`}
              href={`/spots/${spot.id}`}
              tags={tags}
              milesAway={milesAway}
            />
          );
        }) || <p>Loading spots...</p>}
      </div>
    </Layout>
  );
}
