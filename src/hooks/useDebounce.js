import { useState, useEffect } from "react";

/**
 * useDebounce
 * @param {any} value - The value to debounce
 * @param {number} delay - The debounce delay in milliseconds
 * @returns {any} - The debounced value
 */
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Validate delay
    if (typeof delay !== "number" || delay < 0) {
      console.error(
        "Invalid delay value. Delay must be a non-negative number."
      );
      return;
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear timeout
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
