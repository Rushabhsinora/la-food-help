export const mockLocations = [
  { id: "loc1", name: "Venice", area: "Venice", lat: 33.9850, lng: -118.4695 },
  { id: "loc2", name: "Culver City", area: "Culver City", lat: 34.0211, lng: -118.3965 },
  { id: "loc3", name: "West Hollywood", area: "West Hollywood", lat: 34.0900, lng: -118.3617 },
  { id: "loc4", name: "Silver Lake", area: "Silver Lake", lat: 34.0869, lng: -118.2698 },
  { id: "loc5", name: "Koreatown", area: "Koreatown", lat: 34.0587, lng: -118.3006 },
  { id: "loc6", name: "Inglewood", area: "Inglewood", lat: 33.9617, lng: -118.3531 },
  { id: "loc7", name: "Echo Park", area: "Echo Park", lat: 34.0782, lng: -118.2606 },
  { id: "loc8", name: "Palms", area: "Palms", lat: 34.0094, lng: -118.4068 },
  { id: "loc9", name: "Los Feliz", area: "Los Feliz", lat: 34.1050, lng: -118.2864 },
  { id: "loc10", name: "Leimert Park", area: "Leimert Park", lat: 33.9839, lng: -118.3341 },
];

export const mockSpots = [
  { id: "venice", name: "Venice Beach Pickup", area: "Venice", address: "123 Ocean Front Walk, Venice, CA" },
  { id: "overland", name: "Overland Ave Pickup", area: "Overland", address: "456 Overland Ave, Los Angeles, CA" },
  { id: "downtown", name: "Downtown LA Pickup", area: "Downtown", address: "789 S Main St, Los Angeles, CA" }
];

// ✅ MORE RESTAURANTS!
export const mockRestaurants = [
  // Venice
  { id: "rest1", name: "Taco Haven", pickupSpotId: "aids-project-los-angeles-vance-north-necessities-o", description: "Fresh Mexican food daily", hours: "11am-3pm" },
  { id: "rest2", name: "Veggie Bowl", pickupSpotId: "aids-project-los-angeles-vance-north-necessities-o", description: "Healthy vegan bowls", hours: "10am-2pm" },
  { id: "rest3", name: "Pizza Slice", pickupSpotId: "aids-project-los-angeles-vance-north-necessities-o", description: "Hot pizza slices", hours: "12pm-4pm" },
  
  // Overland
  { id: "rest4", name: "Sandwich Spot", pickupSpotId: "overland", description: "Daily sandwich specials", hours: "12pm-4pm" },
  { id: "rest5", name: "Soup Kitchen", pickupSpotId: "overland", description: "Hot soup and bread", hours: "11am-5pm" },
  
  // Downtown
  { id: "rest6", name: "Burger Barn", pickupSpotId: "downtown", description: "Fresh burgers", hours: "1pm-6pm" }
];

export const mockFoods = [
  // Taco Haven (rest1)
  { id: "food1", restaurantId: "rest1", name: "Chicken Tacos", type: "Hot meal", notes: "Gluten-free option", availableUntil: "15:00" },
  { id: "food2", restaurantId: "rest1", name: "Veggie Burritos", type: "Hot meal", notes: "Vegetarian", availableUntil: "14:30" },
  
  // Veggie Bowl (rest2)
  { id: "food3", restaurantId: "rest2", name: "Quinoa Bowl", type: "Healthy meal", notes: "Vegan", availableUntil: "14:00" },
  
  // Sandwich Spot (rest4)
  { id: "food4", restaurantId: "rest4", name: "Turkey Sandwiches", type: "Sandwich", notes: "Kid-friendly", availableUntil: "16:00" },
  { id: "food5", restaurantId: "rest4", name: "Fruit Cups", type: "Snack", notes: "Fresh fruit", availableUntil: "15:30" },
  
  // Soup Kitchen (rest5)
  { id: "food6", restaurantId: "rest5", name: "Chicken Noodle Soup", type: "Soup", notes: "Warm & hearty", availableUntil: "17:00" }
];