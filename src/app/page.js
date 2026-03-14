import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { mockRestaurants } from "@/lib/data";
import foodSpots from "@/lib/la_food_banks.json";


export default function HomePage() {
  const spots = foodSpots.los_angeles_food_resources;

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


      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {spots.map((spot) => {
          const tags = mockRestaurants
            .filter((r) => r.pickupSpotId === spot.id)
            .map((r) => r.name);

          return (
            <Card
              key={spot.id}
              title={spot.name}
              description={`${spot.address.city} • ${spot.address.street}`}
              href={`/spots/${spot.id}`}
              tags={tags}
            />
          );
        })}
      </div>
    </Layout>
  );
}
