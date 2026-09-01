import { STORAGE_KEY } from "../constants/storage";

export function getStoredExpenses() {
  try {
    //Check stored expenses
    const storedExpenses = localStorage.getItem(STORAGE_KEY);

    //If local stored expenses are present then parse it and return else initiate with blank
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  } catch (error) {
    console.log("Failed to load expenses from local storage", error);
    return [];
  }
}

export function saveExpenses(expenses) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  } catch (error) {
    console.log("Failed to save expenses to local storage", error);
  }
}
