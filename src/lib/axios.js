import axios from "axios";
import { clearAuthCookies, getAuthToken } from "@/lib/auth-cookies";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "/api";

let onUnauthorized = null;

export function setUnauthorizedHandler(handler) {
  onUnauthorized = handler;
}

// Public requests (login, register, etc.)
export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Authenticated requests — attaches Bearer token from cookies
export const axiosWithCredentials = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosWithCredentials.interceptors.request.use(
  (config) => {
    const token = getAuthToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosWithCredentials.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearAuthCookies();
      onUnauthorized?.();
    }

    return Promise.reject(error);
  },
);

export default axiosWithCredentials;
