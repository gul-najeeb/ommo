import axios from "axios";
import { baseUrl } from "../constants";

export const axiosInstance = axios.create({
  baseURL: baseUrl, // further soon will come through .env
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Return the response if it's successful
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // If 401 error, redirect the user
      console.log('shankar' )
      window.location.href = '/login'; // Change to your login route
    }
    // Reject other errors to handle them later
    return Promise.reject(error);
  }
);