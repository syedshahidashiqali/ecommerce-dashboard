import axios from "axios";

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