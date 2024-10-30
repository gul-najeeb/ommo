/**
 * Checks if a given unit ID is valid.
 *
 * @param {number} unitId - The ID of the unit to validate
 * @returns {boolean} - Whether the unit ID is valid
 */
export const validateUnitId = (unitId) => {
  return Number.isInteger(unitId) && unitId > 0;
};


/**
 * Handles an error by logging it to the console and rethrowing it as a more
 * user-friendly error.
 *
 * @param {Error} error - The error to handle
 * @throws {Error} - A more user-friendly error
 */
export const handleError = (error) => {
  if (error.response) {
    console.error("Error fetching info:", error.response.data);
    throw new Error(
      `Error ${error.response.status}: ${
        error.response.data.message || "Failed to fetch info."
      }`
    );
  } else if (error.request) {
    console.error("No response received:", error.request);
    throw new Error("No response from the server. Please try again later.");
  } else {
    console.error("Error:", error.message);
    throw new Error("An unexpected error occurred. Please try again.");
  }
};

// utils/index.js

// Debounce - Limits the rate at which a function is called
export const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

// Throttle - Ensures a function is called at most once in a specified time period
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Capitalize - Capitalizes the first letter of a string
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Format Currency - Formats a number as currency
export const formatCurrency = (amount, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount);
};

// Is Empty - Checks if an object or array is empty
export const isEmpty = (value) =>
  value == null || (typeof value === "object" && !Object.keys(value).length);

// Deep Clone - Creates a deep clone of an object
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

// Random Integer in Range - Returns a random integer within a specified range
export const randomIntInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Get Query Param - Retrieves a URL query parameter by name
export const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

// Local Storage Set - Stores a value in localStorage
export const setLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

// Local Storage Get - Retrieves a value from localStorage
export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

// Local Storage Remove - Removes an item from localStorage
export const removeLocalStorage = (key) => localStorage.removeItem(key);

// Generate UUID - Generates a unique identifier (UUID)
export const generateUUID = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

// Sleep - Pauses execution for a set amount of time
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Flatten Array - Flattens a nested array
export const flattenArray = (arr) =>
  arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);

// Get Random Element - Returns a random element from an array
export const getRandomElement = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

// Format Date - Formats a Date object to a readable string
export const formatDate = (date) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(date));

// Group By - Groups an array of objects by a specified property
export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const group = item[key];
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});

// Is Valid Email - Validates email format
export const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Truncate - Truncates a string to a specified length
export const truncate = (str, length) =>
  str.length > length ? `${str.slice(0, length)}...` : str;

// Unique Array - Removes duplicates from an array
export const uniqueArray = (arr) => [...new Set(arr)];



