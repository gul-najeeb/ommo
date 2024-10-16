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
