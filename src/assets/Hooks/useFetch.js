import { useEffect, useState } from "react";
import axios from "../Utils/axios";


export default function useFetch(url) {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (
      async function () {
        try {
          setLoading(true)
          const { data } = await axios.get(url)
          setData(data)
        } catch (err) {
          setError(err.response.data)
        } finally {
          setLoading(false)
        }
      }
    )()
  }, [url])

  return { data, error, loading }

}