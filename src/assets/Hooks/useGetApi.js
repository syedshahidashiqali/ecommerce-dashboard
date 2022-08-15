import { useState, useEffect } from "react";
import { getApi } from "../Helpers/api";

export const useGetApi = (url) => {
  const [response, setResponse] = useState({});

  const getData = async (page = 1) => {
    const token = localStorage.getItem("TOKEN");
    const data = await getApi(url, { "x-access-token": token });
    setResponse(data);
  };
  useEffect(() => {
    getData();
  }, [response.status, response.message, url]);
  return {
    ...response,
    getData
  };
};