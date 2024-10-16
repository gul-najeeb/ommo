import { useState, useCallback } from "react";
import axios from "axios";
 
/**
 * Custom hook for handling mutations.
 * @param {Function} asyncFunction The asynchronous function to perform the mutation.
 * @returns {Object} An object containing data, loading state, error state, and mutate function.
 */
const useMutation = (asyncFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);
      try {
        const result = await asyncFunction(...args);
        setData(result);
        return result; // Optionally return the result for further processing
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction]
  );

  const handleError = (err) => {
    if (err.response) {
      setError(
        `Error ${err.response.status}: ${
          err.response.data.message || "Failed to perform mutation."
        }`
      );
    } else if (err.request) {
      setError("No response from the server. Please try again later.");
    } else {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return { data, loading, error, mutate };
};

export default useMutation;
