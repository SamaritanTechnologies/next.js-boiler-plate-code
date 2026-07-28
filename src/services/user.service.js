import { axiosWithCredentials } from "@/lib/axios";

export const getUsers = async (data) => {
  const response = await axiosWithCredentials.get("/users", { params: data });
  return response.data;
};

export const getUserData = async (id) => {
  const response = await axiosWithCredentials.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id, data) => {
  const response = await axiosWithCredentials.patch(`/users/${id}`, { data });
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axiosWithCredentials.delete(`/users/${id}`);
  return response.data;
};
