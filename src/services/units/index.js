import { axiosInstance } from "..";
import { validateUnitId } from "../../utils";

/**
 * Fetches unit info for a given status, set of IDs, and rating range
 *
 * @param {string} status - The status of the units to fetch (e.g. "Active", "Pending", etc.)
 * @param {number[]} ids - The IDs of the units to fetch
 * @param {number} minRating - The minimum rating of the units to fetch
 * @param {number} maxRating - The maximum rating of the units to fetch
 * @returns {Promise<Object>} - The unit info for the given parameters
 * @throws {Error} - If there's an error fetching the unit info
 */
export const getUnitInfo = async (status, ids, minRating, maxRating) => {
  try {
    const response = await axiosInstance.get("/api/units/get-unit-info", {
      params: {
        status,
        ids,
        minRating,
        maxRating,
      },
    });

    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching unit info:", error);
    throw error; // Rethrow the error if you want to handle it elsewhere
  }
};

/**
 * Fetches the truck info for a given unit ID
 *
 * @param {string} unitId - The ID of the unit to fetch truck info for
 * @returns {Promise<Object>} - The truck info for the given unit ID
 * @throws {Error} - If there's an error fetching the truck info
 */
export const getTruckInfo = async (unitId) => {
  if (!validateUnitId(unitId)) {
    throw new Error("Invalid unitId: must be a positive integer.");
  }
  try {
    const response = await axiosInstance.get(
      `/api/truck/get-truck-info/${unitId}`
    );
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching truck info:", error);
    throw error; // Rethrow the error if you want to handle it elsewhere
  }
};

/**
 * Fetches the trailer info for a given unit ID
 *
 * @param {string} unitId - The ID of the unit to fetch trailer info for
 * @returns {Promise<Object>} - The trailer info for the given unit ID
 * @throws {Error} - If there's an error fetching the trailer info
 */
export const getTrailerInfo = async (unitId) => {
  try {
    const response = await axiosInstance.get(
      `/api/trailer/get-trailer-info/${unitId}`
    );
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching trailer info:", error);
    throw error; // Rethrow the error if you want to handle it elsewhere
  }
};

/**
 * Fetches the driver info for a given unit ID
 *
 * @param {string} unitId - The ID of the unit to fetch driver info for
 * @returns {Promise<Object>} - The driver info for the given unit ID
 * @throws {Error} - If there's an error fetching the driver info
 */

// Enhanced function to fetch driver info with improved error handling
export const getDriverInfo = async (unitId) => {
  if (!validateUnitId(unitId)) {
    throw new Error("Invalid unitId: must be a positive integer.");
  }

  try {
    const response = await axiosInstance.get(
      `/api/driver/get-driver-info/${unitId}`
    );
    return response.data; // Return the data from the response
  } catch (error) {
    // Handle different error types
    if (error.response) {
      // Server responded with a status code outside of 2xx
      console.error("Error fetching driver info:", error.response.data);
      throw new Error(
        `Error ${error.response.status}: ${
          error.response.data.message || "Failed to fetch driver info."
        }`
      );
    } else if (error.request) {
      // Request was made but no response was received
      console.error("No response received:", error.request);
      throw new Error("No response from the server. Please try again later.");
    } else {
      // Something happened in setting up the request
      console.error("Error:", error.message);
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
};
