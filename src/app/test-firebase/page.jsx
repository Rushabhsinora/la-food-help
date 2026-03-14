import { fetchEntry } from "../../../public/services/entryService";

export default async function TestFirebase() {
  const spots = await fetchEntry('Spots');
  
  return (
    <div className="p-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-titillium font-black mb-8">🔥 Firebase Connection Test</h1>
      <div className="space-y-6">
        <div className={`p-6 rounded-2xl ${spots && spots.length > 0 ? 'bg-green-100 border-2 border-green-400' : 'bg-gray-100'}`}>
          <h2 className="text-2xl font-bold mb-4">
            Spots Collection: <span className="font-black text-3xl">{spots?.length || 0}</span>
          </h2>
          {spots && spots.length > 0 && (
            <div className="grid gap-4">
              {spots.slice(0, 3).map(spot => (
                <div key={spot.id} className="p-4 bg-white rounded-xl border-l-4 border-green-500">
                  <h3 className="font-semibold">{spot.name}</h3>
                  <p className="text-sm text-gray-600">{spot.address}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
