import { api, axiosWithCredentials } from "@/lib/axios";

export const login = async (data) => {
  const response = await api.post("/auth/login", { data });
  return response.data;
};

export const register = async (data) => {
  const response = await api.post("/auth/register", { data });
  return response.data;
};

export const logout = async () => {
  const response = await axiosWithCredentials.post("/auth/logout");
  return response.data;
};

export const getMe = async () => {
  const response = await axiosWithCredentials.get("/auth/me");
  return response.data;
};
