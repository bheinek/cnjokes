import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

export function useFetch(slug, numberOfCycles) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dataArray = useMemo(
    () =>
      Array(numberOfCycles)
        .fill(null)
        .map((_, i) =>
          axios
            .get(`https://api.chucknorris.io/jokes/${slug}`)
            .then((response) => response.data),
        ),
    [slug, numberOfCycles],
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Promise.all(dataArray);
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [dataArray]);

  return { data, loading, error };
}
