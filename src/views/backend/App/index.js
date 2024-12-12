// utils.js

// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Function to format a date in a specific format
  export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  
  // Function to generate a random number within a range
  export const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to debounce a callback function
  export const debounce = (callback, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }
  
  // Function to check if a value is empty
  export const isEmpty = (value) => {
    return value === undefined || value === null || value === '';
  }