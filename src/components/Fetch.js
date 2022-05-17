import axios from "axios";
import { useEffect, useState } from "react";
import { Menu } from "./Menu";

export function Fetch ({slug,}) {
    const [data, setData] = useState(null);
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
      }, [slug]);

      if(loading) return "A moment please...";
      else if(error) return`There is a problem fetching the post data - ${error}`
      else {
      if(slug ==="random"){
      return (
        
          data.value
        
      );}
      else if (!loading && slug === "categories" && data) {
        return (
          
          <Menu categories={data} />
        );
      }
      else if (!loading && regexSlug.test(slug)) {
        return (
          data.value
        );
      }

}
}