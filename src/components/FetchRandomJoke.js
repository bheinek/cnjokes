import axios from "axios";
import { useEffect, useState } from "react";

export function FetchRandomJoke () {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `https://api.chucknorris.io/jokes/random`
            );
            setData(response.data.value);
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
        <div >
          {loading && <div>A moment please...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
       <p>{data}</p>
        </div>
      );


}