import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { mockRestaurants } from "@/lib/data";
import foodSpots from "@/lib/la_food_banks.json";

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