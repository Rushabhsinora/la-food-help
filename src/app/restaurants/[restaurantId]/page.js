import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { mockFoods } from "@/lib/data";

export default async function RestaurantPage({ params }) {
  const { restaurantId } = await params;
  
  const restaurantFoods = mockFoods.filter(f => f.restaurantId === restaurantId);

  return (
    <Layout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-black">Available Foods</h1>
        <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-8">
          <h2 className="font-semibold text-green-800 mb-2 text-black">📍 Available Now</h2>
          <p className="text-green-700 text-black">No ID required • First come, first served</p>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {restaurantFoods.map((food) => (
          <Card key={food.id} title={food.name}>
            <div className="space-y-2 text-sm">
              <p className="text-black"><span className="font-medium text-black">Type:</span> {food.type}</p>
              <p className="text-black"><span className="font-medium text-black">Notes:</span> {food.notes}</p>
              <p className="text-orange-600 font-semibold text-black">Available until {food.availableUntil}</p>
            </div>
          </Card>
        ))}
      </div>
      
      {restaurantFoods.length === 0 && (
        <div className="text-center py-12 text-gray-500 text-black">
          <p>No food available right now. Check back later!</p>
        </div>
      )}
    </Layout>
  );
}
