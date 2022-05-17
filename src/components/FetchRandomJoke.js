import axios from "axios";
import { useEffect, useState } from "react";

export function FetchRandomJoke ({slug,}) {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const regexSlug = /random\?category=.*/;

    
    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `https://api.chucknorris.io/jokes/${slug}`
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

      if(slug ==="random"){
      return (
        <div >
          {loading && <div>A moment please...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          {data.value}
        </div>
      );}
      else if (!loading && slug === "categories") {
        
        return (
          data.map((d,i)=><li key={i} >{d}</li>)
        );
      }
      else if (!loading && regexSlug.test(slug)) {
        return (
          data.value
        );
      }


}