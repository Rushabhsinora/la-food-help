'use client';
import { useState } from "react";
import { fetchEntry, createRestaurant, createFood } from "../../../public/services/entryService.jsx";
import { FOOD_IMAGES } from "@/lib/foodImages";

const RESTAURANT_TYPES = [
  "Community Kitchen", "Food Rescue Hub", "Hot Meals Station", "Volunteer Prep Center", 
  "Partner Restaurant", "Neighborhood Pantry", "Daily Distribution", "Meal Assembly",
  "Surplus Food Hub", "Chef Volunteer Station"
];

const EXPANDED_FOODS = [
  { name: "Chicken Tacos", type: "Hot meal", notes: "With rice & beans", availableUntil: "15:00", image: "Chicken Tacos" },
  { name: "Veggie Burritos", type: "Hot meal", notes: "Vegetarian", availableUntil: "14:30", image: "Veggie Burritos" },
  { name: "Turkey Sandwiches", type: "Sandwich", notes: "Kid-friendly", availableUntil: "16:00", image: "Turkey Sandwiches" },
  { name: "Fruit Cups", type: "Snack", notes: "Fresh fruit", availableUntil: "17:00", image: "Fruit Cups" },
  { name: "Chicken Noodle Soup", type: "Soup", notes: "Warm & hearty", availableUntil: "15:30", image: "Chicken Noodle Soup" },
  { name: "Quinoa Bowl", type: "Healthy meal", notes: "Vegan option", availableUntil: "14:00", image: "Quinoa Bowl" },
  { name: "Fresh Salad", type: "Salad", notes: "Dressing on side", availableUntil: "16:30", image: "Fresh Salad" },
  { name: "Pizza Slice", type: "Hot meal", notes: "Cheese or pepperoni", availableUntil: "15:45", image: "Pizza Slice" },
  { name: "Granola Bars", type: "Snack", notes: "Protein-packed", availableUntil: "18:00", image: "Granola Bars" },
  { name: "Yogurt Parfait", type: "Snack", notes: "With granola", availableUntil: "16:00", image: "Yogurt Parfait" }
];

export default function SeedRestaurantsPage() {
  const [isSeeding, setIsSeeding] = useState(false);
  const [log, setLog] = useState([]);
  const [stats, setStats] = useState({ restaurants: 0, foods: 0 });

  const appendLog = (msg) => setLog(prev => [...prev.slice(-20), msg]); // Keep last 20

  const handleSeedRestaurants = async () => {
    try {
      setIsSeeding(true);
      setLog([]);
      setStats({ restaurants: 0, foods: 0 });
      
      const spots = await fetchEntry('Spots');
      appendLog(`Found ${spots.length} spots. Seeding restaurants...`);

      // Seed for ALL spots (not limited anymore!)
      for (let i = 0; i < spots.length; i++) {
        const spot = spots[i];
        
        // Create 1-3 restaurants per spot
        const restaurantCount = 1 + Math.floor(Math.random() * 3);
        for (let r = 0; r < restaurantCount; r++) {
          const restaurantName = RESTAURANT_TYPES[Math.floor(Math.random() * RESTAURANT_TYPES.length)];
          const restaurantData = {
            spotId: spot.id,
            name: `${restaurantName} @ ${spot.area || spot.address?.city || 'LA'}`,
            type: "Community Partner",
            hours: "Daily 11AM-3PM",
            description: `Provides fresh meals for the ${spot.area || 'community'}. Updated today.`
          };

          const restaurant = await createRestaurant(restaurantData);
          if (restaurant) {
            stats.restaurants++;
            appendLog(`✅ R${stats.restaurants}: ${restaurant.name}`);
            
            // Add 3-6 foods per restaurant
            const foodCount = 3 + Math.floor(Math.random() * 4);
            for (let f = 0; f < foodCount; f++) {
              const baseFood = EXPANDED_FOODS[Math.floor(Math.random() * EXPANDED_FOODS.length)];
              const foodData = {
                restaurantId: restaurant.id,
                name: baseFood.name,
                type: baseFood.type,
                notes: baseFood.notes,
                availableUntil: baseFood.availableUntil,
                image: baseFood.image
              };
              await createFood(foodData);
              stats.foods++;
            }
          }
        }
        
        // Progress indicator
        if (i % 10 === 0) appendLog(`Progress: ${i + 1}/${spots.length} spots...`);
      }

      setStats(stats);
      appendLog(`🎉 COMPLETE! ${stats.restaurants} restaurants + ${stats.foods} foods seeded!`);
      alert(`SUCCESS! Added ${stats.restaurants} restaurants & ${stats.foods} foods!`);
    } catch (err) {
      appendLog(`❌ ERROR: ${err.message}`);
      alert("Error: " + err.message);
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <h1 className="text-5xl font-titillium font-black mb-8 bg-gradient-to-r from-orange-600 to-emerald-600 bg-clip-text text-transparent">
        🍽️ Generate Demo Restaurants + Foods
      </h1>
      
      <div className="grid gap-6 mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border">
        <div>
          <h2 className="text-2xl font-bold mb-4">What this creates:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <li>✅ <strong>1-3 restaurants per spot</strong> (211+ total!)</li>
            <li>✅ <strong>3-6 foods per restaurant</strong> (1000+ total!)</li>
            <li>✅ <strong>25+ unique food images</strong> (Unsplash)</li>
            <li>✅ Full data: hours, descriptions, availability</li>
          </ul>
        </div>
        <div className="text-center p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
          <h3 className="text-3xl font-bold text-emerald-800 mb-2">📊 Expected Result</h3>
          <p className="text-4xl font-black text-emerald-700 mb-2">~500 restaurants</p>
          <p className="text-3xl font-bold text-emerald-600">~2000 foods</p>
        </div>
      </div>

      <button
        onClick={handleSeedRestaurants}
        disabled={isSeeding}
        className={`w-full py-8 px-12 rounded-3xl text-2xl font-bold shadow-2xl transition-all duration-300 ${
          isSeeding 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-emerald-600 to-orange-600 hover:shadow-3xl hover:scale-[1.02] hover:from-emerald-700 hover:to-orange-700'
        }`}
      >
        {isSeeding ? (
          <>
            <span className="animate-spin mr-3">⏳</span>
            Seeding {stats.restaurants} restaurants...
          </>
        ) : (
          "🚀 GENERATE 500+ RESTAURANTS + 2000 FOODS WITH IMAGES"
        )}
      </button>

      {/* Live log */}
      <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-green-300 rounded-3xl h-80 overflow-auto font-mono text-sm border-2 border-green-900">
        {log.length === 0 ? (
          <div className="text-center py-12 text-green-400">
            <p className="text-xl mb-4">Ready to generate demo data!</p>
            <p>Click the button above to create realistic restaurants + foods for every spot.</p>
          </div>
        ) : (
          log.map((line, idx) => <div key={idx}>{line}</div>)
        )}
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>⚠️ Run once only (creates demo data for hackathon)</p>
      </div>
    </div>
  );
}
