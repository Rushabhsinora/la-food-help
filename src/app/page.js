import { Layout } from "@/components/Layout";
import { SpotList } from "@/components/SpotList";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { mockRestaurants, mockLocations } from "@/lib/data";
import foodSpots from "@/lib/la_food_banks.json";

export default function HomePage() {
  return (
    <Layout>
      <ParticleBackground />
      <div className="relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-black">Free Food Pickup Spots</h1>
          <p className="text-xl text-gray-600">Find food near you in LA</p>
        </div>
        <SpotList
          spots={foodSpots.los_angeles_food_resources}
          restaurants={mockRestaurants}
          locations={mockLocations}
        />
      </div>
    </Layout>
  );
}