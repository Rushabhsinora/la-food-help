import { db, DatabaseName } from "../firebaseConfig";
import { collection, query, getDocs, addDoc, orderBy, limit, doc, deleteDoc, where } from "firebase/firestore";

export async function createRestaurant(data = {}) {
  console.log("Creating resturant with data:", data);
  try {
    const docRef = await addDoc(collection(db, 'Restaurants'), data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Restaurant add error:", error.message);
    return null;
  }
}

export async function createFood(data = {}) {
  console.log("Creating foodbank with data:", data);
  try {
    const docRef = await addDoc(collection(db, 'Foods'), data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Foodbank add error:", error.message);
    return null;
  }
}

export async function createFoodbank(data = {}) {
  console.log("Creating foodbank with data:", data);
  try {
    const docRef = await addDoc(collection(db, 'Foodbank'), data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Foodbank add error:", error.message);
    return null;
  }
}

export async function deleteRestaurant(entryName) {
  try {
    await deleteDoc(doc(db, 'Restaurants', entryName));
  } catch (error) {
    console.error("Delete error:", error.message);
  }
}

export async function deleteFoodbank(entryName) {
  try {
    await deleteDoc(doc(db, 'Foodbank', entryName));
  } catch (error) {
    console.error("Delete error:", error.message);
  }
}

/**
 * @param {DatabaseName} collection the collection name to fetch the entries from
 * @returns map of the entries in the collection
 */
export async function fetchEntry(collection) {
  try {
    const snapshot = await getDocs(query(collection(db, collection), orderBy("name", "desc"), limit(5)));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Entry fetch error:", error.message);
    return null;
  }
}
