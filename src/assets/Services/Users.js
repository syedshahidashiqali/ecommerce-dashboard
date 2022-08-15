import axios from "../Utils/axios";

export const getUsers = async (page, limit, filterValue) => {
  if (filterValue !== null) {
    const { data } = await axios.get(`/admin/users/all/?page=${page}&limit=${limit}&username=${filterValue}`);
    return data;
  }

  const { data } = await axios.get(`/admin/users/all/?page=${page}&limit=${limit}`);
  return data;
};