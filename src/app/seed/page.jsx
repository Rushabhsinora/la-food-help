'use client';
import { createSpot } from "../../../public/services/entryService";
import foodSpots from "@/lib/la_food_banks.json";


export default function SeedPage() {
  const spots = foodSpots.los_angeles_food_resources;

  const handleSeedAllSpots = async () => {
    try {
      console.log(`Seeding ${spots.length} food spots...`);
      
      for (const spot of spots) {
        // Transform JSON to match your Spots collection
        const spotData = {
          id: spot.id,
          name: spot.name,
          area: spot.address.city,
          address: `${spot.address.street}, ${spot.address.city}, ${spot.address.state} ${spot.address.zip_code}`,
          fullAddress: {
            street: spot.address.street,
            city: spot.address.city,
            state: spot.address.state,
            zip_code: spot.address.zip_code,
            county: spot.address.county
          },
          phone: spot.phone,
          resource_type: spot.resource_type,
          description: spot.description,
          web_link: spot.web_link,
          lat: spot.coordinates.latitude,
          lng: spot.coordinates.longitude
        };

        // Use createSpot (your friend's service)
        const result = await createSpot(spotData);
        console.log(`✅ Added: ${spot.name}`);
      }
      
      alert(`✅ SUCCESS! Added ${spots.length} food spots to Firebase!`);
    } catch (error) {
      console.error("Seed error:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-titillium font-black mb-8 text-gray-900">
        🚀 Bulk Seed Firebase - LA Food Banks
      </h1>
      
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">What this does:</h2>
        <ul className="space-y-2 text-lg">
          <li>✅ Imports ALL {spots.length} food spots from JSON</li>
          <li>✅ Adds to Firebase "Spots" collection</li>
          <li>✅ Includes lat/lng, phone, addresses, descriptions</li>
          <li>⚠️  **Run ONCE only** (will create duplicates if run twice)</li>
        </ul>
      </div>

      <button 
        onClick={handleSeedAllSpots}
        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white text-2xl font-bold py-8 px-12 rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 mb-8"
      >
        💾 SEED ALL {spots.length} SPOTS TO FIREBASE
      </button>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-2xl">
          <h3 className="font-bold text-xl mb-4">Sample data:</h3>
          <pre className="text-sm overflow-auto max-h-40">
{JSON.stringify(spots[0], null, 2)}
          </pre>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl">
          <h3 className="font-bold text-xl mb-4 text-yellow-800">After seeding:</h3>
          <ul className="space-y-2 text-lg">
            <li>Visit <code className="bg-yellow-200 px-2 py-1 rounded">/test-firebase</code></li>
            <li>Check Firebase Console → Firestore → Spots</li>
            <li>Home page will show real data!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
