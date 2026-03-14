// Simple data shapes for reference
export const dataShapes = {
  pickupSpot: { id: "string", name: "string", area: "string", address: "string" },
  restaurant: { id: "string", name: "string", pickupSpotId: "string", description: "string?", hours: "string?" },
  food: { id: "string", restaurantId: "string", name: "string", type: "string?", notes: "string?", availableUntil: "string?" }
};

// Mock data
export const mockSpots = [
  { id: "venice", name: "Venice Beach Pickup", area: "Venice", address: "123 Ocean Front Walk, Venice, CA" },
  { id: "overland", name: "Overland Ave Pickup", area: "Overland", address: "456 Overland Ave, Los Angeles, CA" },
  { id: "downtown", name: "Downtown LA Pickup", area: "Downtown", address: "789 S Main St, Los Angeles, CA" }
];

export const mockRestaurants = [
  { id: "rest1", name: "Taco Haven", pickupSpotId: "venice", description: "Fresh Mexican food", hours: "11am-3pm" },
  { id: "rest2", name: "Sandwich Spot", pickupSpotId: "overland", description: "Daily specials", hours: "12pm-4pm" }
];
