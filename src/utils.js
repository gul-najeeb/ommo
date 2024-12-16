// utilities.js

// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  // Function to format a date in a specific format
  export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  
  // Function to shuffle an array
  export const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
  
  // Function to debounce a function call
  export const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };
  
  // Function to check if a value is present in an array
  export const isInArray = (array, value) => {
    return array.includes(value);
  };
  
  // Function to deep clone an object
  export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };
  
  // Function to calculate the average of an array of numbers
  export const calculateAverage = (numbers) => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  };
  
  // Function to generate a random ID
  export const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  
  // Function to check if a string is a palindrome
  export const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  // Add more utility functions as needed