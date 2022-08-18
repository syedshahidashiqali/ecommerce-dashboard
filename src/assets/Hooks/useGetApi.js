import { useState, useEffect } from "react";
import axios from "../Utils/authHeader";

export const useGetApi = (url) => {
  const [response, setResponse] = useState({});

  const getData = async () => {
    try {
      const { data } = await axios.get('/products/add');
      setResponse(data);
      return response
    } catch (err) {
      return err.response.data;
    }
  };

  useEffect(() => {
    getData();
  }, [response.status, response.message, url]);
  return response
};