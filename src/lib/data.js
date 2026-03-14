export const mockSpots = [
  { id: "venice", name: "Venice Beach Pickup", area: "Venice", address: "123 Ocean Front Walk, Venice, CA" },
  { id: "overland", name: "Overland Ave Pickup", area: "Overland", address: "456 Overland Ave, Los Angeles, CA" },
  { id: "downtown", name: "Downtown LA Pickup", area: "Downtown", address: "789 S Main St, Los Angeles, CA" }
];

// ✅ MORE RESTAURANTS!
export const mockRestaurants = [
  // Venice
  { id: "rest1", name: "Taco Haven", pickupSpotId: "venice", description: "Fresh Mexican food daily", hours: "11am-3pm" },
  { id: "rest2", name: "Veggie Bowl", pickupSpotId: "venice", description: "Healthy vegan bowls", hours: "10am-2pm" },
  { id: "rest3", name: "Pizza Slice", pickupSpotId: "venice", description: "Hot pizza slices", hours: "12pm-4pm" },
  
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
