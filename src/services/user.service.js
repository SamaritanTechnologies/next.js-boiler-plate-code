import { axiosWithCredentials } from "@/lib/axios";

export const getUsers = async (params) => {
  const { data } = await axiosWithCredentials.get("/users", { params });
  return data;
};

export const getUserData = async (id) => {
  const { data } = await axiosWithCredentials.get(`/users/${id}`);
  return data;
};

export const updateUser = async (id, payload) => {
  const { data } = await axiosWithCredentials.patch(`/users/${id}`, payload);
  return data;
};

export const deleteUser = async (id) => {
  const { data } = await axiosWithCredentials.delete(`/users/${id}`);
  return data;
};
