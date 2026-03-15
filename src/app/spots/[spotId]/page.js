import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { SpotMap } from "@/components/SpotMap";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { mockRestaurants } from "@/lib/data";
import foodSpots from "@/lib/la_food_banks.json";

export default async function SpotPage({ params }) {
  const { spotId } = await params;

  const spot = foodSpots.los_angeles_food_resources.find(s => s.id === spotId);
  const spotRestaurants = mockRestaurants.filter(r => r.pickupSpotId === spotId);

  return (
    <Layout>
      <ParticleBackground />
      <div className="relative z-10">
        {spot ? (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2 text-black">{spot.name}</h1>
              <p className="text-sm text-orange-600 font-medium uppercase tracking-wide mb-6">{spot.resource_type}</p>

              <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-lg p-8 mb-8">
                <div className="flex flex-col lg:flex-row gap-8">

                  <div className="flex-1 space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm w-24 shrink-0 pt-0.5">Address</span>
                      <p className="text-gray-800">
                        {spot.address.street}, {spot.address.city}, {spot.address.state} {spot.address.zip_code}
                      </p>
                    </div>

                    {spot.phone && (
                      <div className="flex items-start gap-3">
                        <span className="text-gray-400 text-sm w-24 shrink-0 pt-0.5">Phone</span>
                        <a href={`tel:${spot.phone}`} className="text-orange-600 hover:underline">{spot.phone}</a>
                      </div>
                    )}

                    {spot.description && (
                      <div className="flex items-start gap-3">
                        <span className="text-gray-400 text-sm w-24 shrink-0 pt-0.5">About</span>
                        <p className="text-gray-800">{spot.description}</p>
                      </div>
                    )}

                    {spot.web_link && (
                      <div className="flex items-start gap-3">
                        <span className="text-gray-400 text-sm w-24 shrink-0 pt-0.5">Website</span>
                        <a href={spot.web_link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline break-all">
                          {spot.web_link}
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="w-full lg:w-80 h-64 rounded-2xl overflow-hidden shrink-0">
                    <SpotMap
                      latitude={spot.coordinates.latitude}
                      longitude={spot.coordinates.longitude}
                      name={spot.name}
                    />
                  </div>

                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-black">Restaurants at this spot</h2>
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
                <p className="text-gray-500">No restaurants yet for this spot.</p>
              )}
            </div>
          </>
        ) : (
          <p className="text-black">Spot not found.</p>
        )}
      </div>
    </Layout>
  );
}