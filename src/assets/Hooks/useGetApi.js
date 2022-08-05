import { useState, useEffect } from "react";
import { getApi } from "../Helpers/api";

export const useGetApi = (url) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("TOKEN");
      const data = await getApi(url, { "x-access-token": token });
      setResponse(data);
    };
    getData();
  }, [response.length, url]);

  return response;
};