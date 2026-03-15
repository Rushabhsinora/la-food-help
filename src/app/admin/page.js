'use client';
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { 
  fetchEntry, 
  createSpot, createRestaurant, createFood,
  deleteSpot, deleteRestaurant, deleteFood 
} from "../../../public/services/entryService.jsx";

export default function AdminPage() {
  // Forms state
  const [spotForm, setSpotForm] = useState({ name: "", area: "", address: "" });
  const [restaurantForm, setRestaurantForm] = useState({ name: "", spotId: "", hours: "" });
  const [foodForm, setFoodForm] = useState({ name: "", restaurantId: "", availableUntil: "", type: "Hot meal", notes: "" });

  // Data state
  const [spots, setSpots] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 REAL-TIME DATA FETCHING
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [spotsData, restaurantsData, foodsData] = await Promise.all([
        fetchEntry('Spots'),
        fetchEntry('Restaurants'),
        fetchEntry('Foods')
      ]);
      setSpots(spotsData || []);
      setRestaurants(restaurantsData || []);
      setFoods(foodsData || []);
      setLoading(false);
    };

    loadData();
    
    // 🔥 REAL-TIME LISTENERS (updates every 5s)
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, []);

  // Form handlers
  const handleSpotSubmit = async (e) => {
    e.preventDefault();
    const result = await createSpot(spotForm);
    if (result) {
      setSpotForm({ name: "", area: "", address: "" });
      alert("✅ Spot added!");
    }
  };

  const handleRestaurantSubmit = async (e) => {
    e.preventDefault();
    const result = await createRestaurant(restaurantForm);
    if (result) {
      setRestaurantForm({ name: "", spotId: "", hours: "" });
      alert("✅ Restaurant added!");
    }
  };

  const handleFoodSubmit = async (e) => {
    e.preventDefault();
    const result = await createFood(foodForm);
    if (result) {
      setFoodForm({ name: "", restaurantId: "", availableUntil: "", type: "Hot meal", notes: "" });
      alert("✅ Food item added!");
    }
  };

  // Get spot name for restaurant dropdown
  const getSpotName = (spotId) => {
    const spot = spots.find(s => s.id === spotId);
    return spot ? spot.name : "Select spot";
  };

  // Get restaurant name for food dropdown
  const getRestaurantName = (restaurantId) => {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    return restaurant ? restaurant.name : "Select restaurant";
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Loading real-time data...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-12">
        <h1 className="font-titillium text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl">
          Admin Dashboard
        </h1>
        <p className="font-inter text-2xl text-gray-700 max-w-2xl">
          Real-time management • Live updates across app 🔥
        </p>
        <div className="mt-4 flex gap-4 text-sm text-gray-600">
          <span>🗺️ Spots: <strong className="text-orange-600">{spots.length}</strong></span>
          <span>🍽️ Restaurants: <strong className="text-emerald-600">{restaurants.length}</strong></span>
          <span>🍕 Foods: <strong className="text-blue-600">{foods.length}</strong></span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* 🔥 ADD PICKUP SPOT - Real Firebase */}
        <Card title="1. Add Pickup Spot">
          <form onSubmit={handleSpotSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800">Spot Name</label>
              <input 
                type="text" 
                placeholder="Venice Beach Pickup" 
                value={spotForm.name}
                onChange={(e) => setSpotForm({...spotForm, name: e.target.value})}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg font-medium shadow-sm transition-all text-black" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800">Area</label>
              <input 
                type="text" 
                placeholder="Venice" 
                value={spotForm.area}
                onChange={(e) => setSpotForm({...spotForm, area: e.target.value})}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg font-medium shadow-sm transition-all text-black" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800">Address</label>
              <input 
                type="text" 
                placeholder="123 Ocean Front Walk, Venice, CA" 
                value={spotForm.address}
                onChange={(e) => setSpotForm({...spotForm, address: e.target.value})}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg font-medium shadow-sm transition-all text-black" 
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-black"
            >
              🚀 Add Spot to Firebase
            </button>
          </form>
        </Card>

        {/* 🔥 ADD RESTAURANT - Real Firebase */}
        <Card title="2. Add Restaurant">
          <form onSubmit={handleRestaurantSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800">Restaurant Name</label>
              <input 
                type="text" 
                placeholder="Taco Haven" 
                value={restaurantForm.name}
                onChange={(e) => setRestaurantForm({...restaurantForm, name: e.target.value})}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg font-medium shadow-sm transition-all text-black" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800">Pickup Spot</label>
              <select 
                value={restaurantForm.spotId}
                onChange={(e) => setRestaurantForm({...restaurantForm, spotId: e.target.value})}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg font-medium shadow-sm transition-all text-black"
                required
              >
                <option value="">Select spot...</option>
                {spots.map(spot => (
                  <option key={spot.id} value={spot.id}>
                    {spot.name} ({spot.area})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800">Hours</label>
              <input 
                type="text" 
                placeholder="11am-3pm daily" 
                value={restaurantForm.hours}
                onChange={(e) => setRestaurantForm({...restaurantForm, hours: e.target.value})}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 text- black focus:ring-orange-300 focus:border-orange-500 text-lg font-medium shadow-sm transition-all text-black" 
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-black"
            >
              🍽️ Add Restaurant to Firebase
            </button>
          </form>
        </Card>
      </div>

      {/* 🔥 ADD FOOD - Full width */}
      <Card title="3. Add Food Item">
        <form onSubmit={handleFoodSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">Food Name</label>
            <input 
              type="text" 
              placeholder="Chicken Tacos" 
              value={foodForm.name}
              onChange={(e) => setFoodForm({...foodForm, name: e.target.value})}
              className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg font-medium shadow-sm transition-all text-black" 
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">Restaurant</label>
            <select 
              value={foodForm.restaurantId}
              onChange={(e) => setFoodForm({...foodForm, restaurantId: e.target.value})}
              className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg font-medium shadow-sm transition-all text-black"
              required
            >
              <option value="">Select restaurant...</option>
              {restaurants.map(restaurant => (
                <option key={restaurant.id} value={restaurant.id}>
                  {restaurant.name} ({getSpotName(restaurant.spotId)})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">Available Until</label>
            <input 
              type="time" 
              value={foodForm.availableUntil}
              onChange={(e) => setFoodForm({...foodForm, availableUntil: e.target.value})}
              className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg font-medium shadow-sm transition-all text-black" 
              required
            />
          </div>
          
          <div className="md:col-span-2 lg:col-span-1">
            <label className="block text-sm font-semibold mb-2 text-gray-800">Type</label>
            <select 
              value={foodForm.type}
              onChange={(e) => setFoodForm({...foodForm, type: e.target.value})}
              className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg font-medium shadow-sm transition-all text-black"
            >
              <option>Hot meal</option>
              <option>Sandwich</option>
              <option>Soup</option>
              <option>Snack</option>
              <option>Salad</option>
            </select>
          </div>
          
          <div className="md:col-span-2 lg:col-span-1">
            <label className="block text-sm font-semibold mb-2 text-gray-800">Notes</label>
            <input 
              type="text" 
              placeholder="Vegetarian, kid-friendly, gluten-free" 
              value={foodForm.notes}
              onChange={(e) => setFoodForm({...foodForm, notes: e.target.value})}
              className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg font-medium shadow-sm transition-all text-black" 
            />
          </div>
          
          <div className="md:col-span-3">
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-black"
            >
              🍕 Add Food Item to Firebase
            </button>
          </div>
        </form>
      </Card>

      {/* 🔥 LIVE COUNTERS */}
      <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl border-2 border-blue-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">📊 Live Database Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-orange-500">
            <div className="text-4xl font-black text-orange-600">{spots.length}</div>
            <div className="text-lg font-semibold text-gray-700 mt-2">Pickup Spots</div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-emerald-500">
            <div className="text-4xl font-black text-emerald-600">{restaurants.length}</div>
            <div className="text-lg font-semibold text-gray-700 mt-2">Restaurants</div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-blue-500">
            <div className="text-4xl font-black text-blue-600">{foods.length}</div>
            <div className="text-lg font-semibold text-gray-700 mt-2">Food Items</div>
          </div>
        </div>
        <p className="text-center mt-6 text-sm text-gray-600">
          🔄 Updates every 5 seconds • Fully real-time across app
        </p>
      </div>
    </Layout>
  );
}
