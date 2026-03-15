import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { fetchEntry } from "../../../../public/services/entryService.jsx";
import { FOOD_IMAGES, DEFAULT_FOOD_IMAGE } from "@/lib/foodImages";

export default async function RestaurantPage({ params }) {
  const { restaurantId } = await params;

  const allFoods = await fetchEntry("Foods");
  const foods = allFoods.filter((f) => f.restaurantId === restaurantId);

  return (
    <Layout>
      <div className="mb-12">
        <h1 className="font-titillium text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Available Foods Today
        </h1>
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 max-w-2xl mx-auto">
          <h2 className="font-semibold text-2xl text-emerald-800 mb-2">
            📍 Ready Now
          </h2>
          <p className="text-emerald-700">
            No ID required • First come, first served
          </p>
        </div>
      </div>

      {foods.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((food) => {
            const imageUrl =
              FOOD_IMAGES[food.image || food.name] || DEFAULT_FOOD_IMAGE;

            return (
              <div
                key={food.id}
                className="group bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 max-w-sm"
              >
                {/* FIXED IMAGE - No cropping! */}
                <div className="relative w-full h-56 bg-gradient-to-br from-gray-50 to-orange-50 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={food.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 group-hover:rotate-1"
                    loading="lazy"
                  />
                  {/* Type badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-lg border text-black">
                    {food.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-titillium text-xl font-bold mb-3 text-gray-900 line-clamp-2 leading-tight">
                    {food.name}
                  </h3>

                  <div className="space-y-2 mb-6">
                    {food.notes && (
                      <p className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-4 h-4 bg-emerald-400 rounded-full mt-0.5 flex-shrink-0" />
                        {food.notes}
                      </p>
                    )}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-orange-600 font-bold text-lg bg-orange-100 px-3 py-1 rounded-full">
                        Until {food.availableUntil}
                      </span>
                      <div className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full text-black">
                        🍽️ Ready
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
            <span className="text-2xl">🍽️</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            No foods available right now
          </h3>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Check back later or contact restaurants directly. New items added
            daily.
          </p>
        </div>
      )}
    </Layout>
  );
}
