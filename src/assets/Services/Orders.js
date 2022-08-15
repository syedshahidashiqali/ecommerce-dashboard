import axios from "../Utils/axios";


export const getOrders = async () => {
  const { data } = await axios.get(`/orders/all`);
  return data
}