import { createSlice } from "@reduxjs/toolkit";
import {
  clearAuthCookies,
  getAuthToken,
  getAuthUser,
  setAuthToken,
  setAuthUser,
} from "@/lib/auth-cookies";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    hydrateAuth: (state) => {
      const token = getAuthToken();
      const user = getAuthUser();

      if (token) {
        state.token = token;
        state.user = user;
        state.isAuthenticated = true;
      }
    },
    setCredentials: (state, action) => {
      const { user, token } = action.payload;

      state.user = user ?? null;
      state.token = token;
      state.isAuthenticated = Boolean(token);

      if (token) {
        setAuthToken(token);
      }

      if (user) {
        setAuthUser(user);
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      clearAuthCookies();
    },
  },
});

export const { hydrateAuth, setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
