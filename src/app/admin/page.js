import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { mockSpots } from "@/lib/data";

export default function AdminPage() {
  return (
    <Layout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-xl text-gray-600">Add pickup spots, restaurants, and food items</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Add Pickup Spot */}
        <Card title="1. Add Pickup Spot">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Spot Name</label>
              <input type="text" placeholder="Venice Beach Pickup" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Area</label>
              <input type="text" placeholder="Venice" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <input type="text" placeholder="123 Ocean Front Walk" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500" />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
              Add Spot
            </button>
          </form>
        </Card>

        {/* Add Restaurant */}
        <Card title="2. Add Restaurant">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Restaurant Name</label>
              <input type="text" placeholder="Taco Haven" className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pickup Spot</label>
              <select className="w-full p-3 border rounded-lg">
                {mockSpots.map(spot => (
                  <option key={spot.id} value={spot.id}>{spot.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Hours</label>
              <input type="text" placeholder="11am-3pm" className="w-full p-3 border rounded-lg" />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
              Add Restaurant
            </button>
          </form>
        </Card>
      </div>

      {/* Add Food - Full width */}
      <Card title="3. Add Food Item">
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Food Name</label>
            <input type="text" placeholder="Chicken Tacos" className="w-full p-3 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Restaurant</label>
            <select className="w-full p-3 border rounded-lg">
              <option>Taco Haven</option>
              <option>Sandwich Spot</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Available Until</label>
            <input type="time" className="w-full p-3 border rounded-lg" />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <label className="block text-sm font-medium mb-2">Type</label>
            <select className="w-full p-3 border rounded-lg">
              <option>Hot meal</option>
              <option>Sandwich</option>
              <option>Snack</option>
            </select>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <label className="block text-sm font-medium mb-2">Notes</label>
            <input type="text" placeholder="Vegetarian, kid-friendly" className="w-full p-3 border rounded-lg" />
          </div>
          <div className="md:col-span-3">
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 text-lg">
              Add Food Item
            </button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}
