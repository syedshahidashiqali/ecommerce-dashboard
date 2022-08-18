import axios from "../Utils/axios";

export const login = async (bodyData) => {
  try {
    const { data } = await axios.post('/auth/login', bodyData);
    return data;
  } catch (err) {
    return err.response.data;
  }
};