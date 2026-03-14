import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { mockRestaurants } from "@/lib/data";
import foodSpots from "@/lib/la_food_banks.json";

export default async function SpotPage({ params }) {
  const { spotId } = await params;

  const spot = foodSpots.los_angeles_food_resources.find(s => s.id === spotId);
  const spotRestaurants = mockRestaurants.filter(r => r.pickupSpotId === spotId);

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-black">
          Restaurants at {spot?.name ?? spotId}
        </h1>
        {spot && (
          <p className="text-gray-600">{spot.address.street}, {spot.address.city}</p>
        )}
      </div>

      <div className="space-y-4">
        {spotRestaurants.length > 0 ? (
          spotRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              title={restaurant.name}
              description={restaurant.description}
              href={`/restaurants/${restaurant.id}`}
            />
          ))
        ) : (
          <p className="text-black">No restaurants yet for this spot.</p>
        )}
      </div>
    </Layout>
  );
}