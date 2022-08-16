import axios from "../Utils/axios";


export const getOrders = async () => {
  const { data } = await axios.get(`/orders/all`);
  return data
}

export const getAnOrder = async (orderId) => {
  try {
    const response = await axios.get(`/orders/${orderId}`)
    return response.data
  } catch (err) {
    return err.response.data
  }
}