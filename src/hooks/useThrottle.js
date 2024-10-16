import { useState, useEffect } from "react";

/**
 * useThrottle
 * @param {function} callback - The function to throttle
 * @param {number} delay - The time interval in milliseconds
 * @returns {function} - A throttled version of the callback
 */
const useThrottle = (callback, delay) => {
  const [lastRun, setLastRun] = useState(0);

  const throttledFunction = (...args) => {
    const now = Date.now();
    if (now - lastRun >= delay) {
      setLastRun(now);
      callback(...args);
    }
  };

  return throttledFunction;
};

export default useThrottle;
