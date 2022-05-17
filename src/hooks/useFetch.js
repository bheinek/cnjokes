import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetch(slug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.chucknorris.io/jokes/${slug}`,
        );
        setData(response.data);
        //         setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [slug]);

  return { data, loading, error };
}
