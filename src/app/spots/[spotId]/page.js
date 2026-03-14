import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { mockRestaurants } from "@/lib/data";

export default function SpotPage({ params }) {
  const spotRestaurants = mockRestaurants.filter(r => r.pickupSpotId === params.spotId);

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Restaurants at {params.spotId}</h1>
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
          <p>No restaurants yet for this spot.</p>
        )}  
      </div>
    </Layout>
  );
}
