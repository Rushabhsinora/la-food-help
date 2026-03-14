import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { mockSpots } from "@/lib/data";

export default function HomePage() {
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
      
      {/* ALL SPOTS AS CARDS - Exactly what you want */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mockSpots.map((spot) => (
          <Card
            key={spot.id}
            title={spot.name}
            description={`${spot.area} • ${spot.address}`}
            href={`/spots/${spot.id}`}
          />
        ))}
      </div>
    </Layout>
  );
}
