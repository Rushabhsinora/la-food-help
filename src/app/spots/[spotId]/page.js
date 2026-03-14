import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { mockRestaurants } from "@/lib/data";
import foodSpots from "@/lib/la_food_banks.json";

export default async function SpotPage({ params }) {
  const { spotId } = await params;

  console.log("=== SpotPage Debug ===");
  console.log("1. spotId from URL params:", spotId);

  const spot = foodSpots.los_angeles_food_resources.find(s => s.id === spotId);
  console.log("2. Matched spot from JSON:", spot ? spot.name : "NOT FOUND");

  console.log("3. All mockRestaurant pickupSpotIds:", mockRestaurants.map(r => r.pickupSpotId));

  const spotRestaurants = mockRestaurants.filter(r => r.pickupSpotId === spotId);
  console.log("4. Matched restaurants:", spotRestaurants.length, spotRestaurants.map(r => r.name));

  // Helps catch whitespace or encoding mismatches
  if (spotRestaurants.length === 0) {
    mockRestaurants.forEach(r => {
      console.log(
        `5. Comparing "${r.pickupSpotId}" === "${spotId}" →`,
        r.pickupSpotId === spotId,
        `| lengths: ${r.pickupSpotId.length} vs ${spotId.length}`
      );
    });
  }

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