import axios from "axios";
import { baseUrl } from "../constants";

export const axiosInstance = axios.create({
  baseURL: baseUrl, // further soon will come through .env
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
