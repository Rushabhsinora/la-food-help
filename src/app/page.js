import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { mockSpots } from "@/lib/data";

export default function HomePage() {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black">Free Food Pickup Spots</h1>
        <p className="text-xl text-gray-600">Find food near you in LA</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
