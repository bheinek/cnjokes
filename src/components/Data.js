import { useState, useEffect } from 'react';

export function Data () {
    const [categories, setCategories] = useState();
    const [error, setError] = useState();
      
        useEffect(() => {
          fetch(`https://api.chucknorris.io/jokes/categories`)
          .then((response) => {
            if(!response){
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json()})
          .then((actualData) => {
            setCategories(actualData);
            setError(null)})
          .catch((err)=>{
            setError(err.message);
            setCategories(null);
          })
         }, )
        return(
            <div>

    <div className="App">
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {categories &&
          categories.map((category) => (
            <li key={category}>
              <h3>{category}</h3>
            </li>
          ))}
      </ul>
    </div>
  );

            </div>

        )
        
}