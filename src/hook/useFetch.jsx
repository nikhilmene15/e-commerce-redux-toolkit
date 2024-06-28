import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true); // Default to true since we're loading initially
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(url);
        setProduct(response.data);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { products, loading, error };
};

export default useFetch;
