import { useEffect, useState } from 'react';
import axios from 'axios';

import { useFetch } from './hooks/useFetch';

export function Fetch({ slug }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const regexSlug = /random\?category=.*/;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.chucknorris.io/jokes/${slug}`,
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return 'A moment please...';
  else if (error) return `There is a problem fetching the post data - ${error}`;
  else {
    if (slug === 'random') {
      return data.value;
    } else if (!loading && slug === 'categories' && data) {
      console.log(data);
      return data;
    } else if (!loading && regexSlug.test(slug)) {
      return data.value;
    }
  }
}
