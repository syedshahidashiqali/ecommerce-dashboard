import axios from "../Utils/axios";
import { setAccessToken } from "../Utils/helpers";

export const login = async (bodyData) => {
  try {
    const { data } = await axios.post('/auth/login', bodyData);
    return data;
  } catch (err) {
    return err.response.data;
  }
};