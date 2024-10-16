import axios from "axios";

// Create an Axios instance
export const axiosInstance = axios.create({
  baseURL: "https://your-api-base-url.com", // Replace with your API base URL
  timeout: 10000, // Optional: Set a timeout (in milliseconds)
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need here
  },
});
