import { useState, useEffect } from 'react';
import axios from 'axios';

export function FetchData () {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get(
            `https://api.chucknorris.io/jokes/categories`
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
    return (
      <div>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
          {data &&
            data.map((category) => (
              <li key={category}>
                <h3>{category}</h3>
              </li>
            ))}
        </ul>
      </div>
    );
        
}