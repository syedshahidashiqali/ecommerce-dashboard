import axios from "../Utils/axios";

export const getProducts = async (filterValue) => {
  if (filterValue !== null) {
    const { data } = await axios.get(`/products/?name=${filterValue}`);
    return data;
  }

  const { data } = await axios.get(`/products`);
  return data

}

export const getProduct = async (productId) => {
  const { data } = await axios.get(`/products/product/${productId}`);
  return data
}

export const updateProduct = async (productId, data) => {
  try {
    let body = {}
    if (data.name !== "") {
      body.name = data.name;
    }
    if (data.description !== "") {
      body.description = data.description;
    }
    if (data.price !== "") {
      body.price = data.price;
    }
    const response = await axios.put(`/products/product/${productId}`, body)

    return response.data
  } catch (err) {
    return err.response.data;
  }
}

export const getReviews = async (productId) => {
  const { data } = await axios.get(`/reviews/product/${productId}`);
  return data
}

export const getAvgRating = async (productId) => {
  const { data } = await axios.get(`/reviews/averageRating/single/${productId}`);
  return data
}

export const getAllRatings = async (productId) => {
  const { data } = await axios.get(`/reviews/allRatings/single/${productId}`);
  return data
}
