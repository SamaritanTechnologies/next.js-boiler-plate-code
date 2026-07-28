import { api, axiosWithCredentials } from "@/lib/axios";

export const login = async (payload) => {
  const { data } = await api.post("/auth/login", payload);
  return data;
};

export const register = async (payload) => {
  const { data } = await api.post("/auth/register", payload);
  return data;
};

export const logout = async () => {
  const { data } = await axiosWithCredentials.post("/auth/logout");
  return data;
};

export const getMe = async () => {
  const { data } = await axiosWithCredentials.get("/auth/me");
  return data;
};
