import axios from "../Utils/axios";

export const getOrders = async () => {
  const { data } = await axios.get("/orders/count/all")
  return data
}

export const getProducts = async () => {
  const { data } = await axios.get("/products/count/all")
  return data
}

export const getCustomers = async () => {
  const { data } = await axios.get("/admin/users/count/all")
  return data
}

export const getTotalSales = async () => {
  const { data } = await axios.get("/orders/purchases/all")
  return data
}

