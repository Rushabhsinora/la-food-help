import { Layout } from "@/components/Layout";
import { SpotList } from "@/components/SpotList";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { fetchEntry } from "../../public/services/entryService.jsx";
import { mockLocations } from "@/lib/data";

export default async function HomePage() {
  const spots = await fetchEntry('Spots');
  const restaurants = await fetchEntry('Restaurants');

  return (
    <Layout>
      <ParticleBackground />
      <div className="relative z-10">
        <div className="mb-16 text-center">
          <h1 className="font-titillium text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
            Free Food Pickup Spots
          </h1>
          <p className="font-inter text-2xl md:text-3xl text-gray-700 max-w-2xl mx-auto mb-20">
            Find food near you in LA - No ID required
          </p>
        </div>
        <SpotList
          spots={spots ?? []}
          restaurants={restaurants ?? []}
          locations={mockLocations}
        />
      </div>
    </Layout>
  );
}