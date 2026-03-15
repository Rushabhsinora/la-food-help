import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { fetchEntry } from "../../../../public/services/entryService.jsx";

export default async function SpotPage({ params }) {
  const { spotId } = await params;

  const restaurants = await fetchEntry('Restaurants');
  const spotRestaurants = restaurants.filter(r => r.spotId === spotId);

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="font-titillium text-4xl text-black mb-4">
          Restaurants at this Pickup Spot : 
        </h1>
      </div>

      {spotRestaurants.length > 0 ? (
        <div className="space-y-4">
          {spotRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              title={restaurant.name}
              description={restaurant.description}
              href={`/restaurants/${restaurant.id}`}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">
          No partner restaurants added yet for this spot.
        </p>
      )}
    </Layout>
  );
}
