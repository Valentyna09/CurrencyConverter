import { useEffect, useState } from "react";
import axios from "axios";
 
export function useApi(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (
      async function () {
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    )()
  }, [url])

  return {data, error, loading}
};