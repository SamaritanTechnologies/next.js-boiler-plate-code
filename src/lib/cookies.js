const isBrowser = typeof document !== "undefined";

export function getCookie(name) {
  if (!isBrowser) return null;

  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`),
  );

  return match ? decodeURIComponent(match[1]) : null;
}

export function setCookie(name, value, options = {}) {
  if (!isBrowser) return;

  const {
    days = 7,
    path = "/",
    sameSite = "Lax",
    secure = process.env.NODE_ENV === "production",
  } = options;

  const maxAge = days * 24 * 60 * 60;
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  cookie += `; Path=${path}`;
  cookie += `; Max-Age=${maxAge}`;
  cookie += `; SameSite=${sameSite}`;
  if (secure) cookie += "; Secure";

  document.cookie = cookie;
}

export function removeCookie(name, options = {}) {
  if (!isBrowser) return;

  const { path = "/" } = options;
  document.cookie = `${encodeURIComponent(name)}=; Path=${path}; Max-Age=0; SameSite=Lax`;
}
