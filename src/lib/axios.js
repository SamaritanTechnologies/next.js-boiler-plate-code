import axios from "axios";
import { clearAuthCookies, getAuthToken } from "@/lib/auth-cookies";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "/api";

let onUnauthorized = null;

/** Register a callback (e.g. dispatch logout) for 401 responses. */
export function setUnauthorizedHandler(handler) {
  onUnauthorized = handler;
}

/** Public API client — no auth headers attached. */
export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Authenticated API client.
 * Reads the access token from cookies and attaches it as a Bearer header.
 * Also sends cookies via `withCredentials`.
 */
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
