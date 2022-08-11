import axios from "axios";

export const postApi = async (url, body, headers = {}) => {
  try {
    const response = await axios({
      method: "POST",
      url: url,
      headers: headers,
      data: body,
    })
    return response.data
  } catch (err) {
    return err.response.data;
  }
}

export const updateApi = async (url, body, headers = {}) => {
  try {
    const response = await axios({
      method: "PUT",
      url: url,
      headers: headers,
      data: body,
    })
    return response.data
  } catch (err) {
    return err.response.data;
  }
}

export const getApi = async (url, headers = {}) => {
  try {
    const response = await axios({
      method: "GET",
      url: url,
      headers: headers,
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
}

export const deleteApi = async (url, method, headers = {}) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      headers: headers,
    })
    return response.data
  } catch (err) {
    return err.response.data;
  }
}