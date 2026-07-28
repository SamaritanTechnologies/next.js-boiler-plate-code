import { getCookie, removeCookie, setCookie } from "@/lib/cookies";

export const AUTH_TOKEN_KEY = "access_token";
export const AUTH_USER_KEY = "auth_user";

export function getAuthToken() {
  return getCookie(AUTH_TOKEN_KEY);
}

export function setAuthToken(token, options) {
  setCookie(AUTH_TOKEN_KEY, token, options);
}

export function clearAuthToken() {
  removeCookie(AUTH_TOKEN_KEY);
}

export function getAuthUser() {
  const raw = getCookie(AUTH_USER_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setAuthUser(user, options) {
  setCookie(AUTH_USER_KEY, JSON.stringify(user), options);
}

export function clearAuthUser() {
  removeCookie(AUTH_USER_KEY);
}

export function clearAuthCookies() {
  clearAuthToken();
  clearAuthUser();
}
