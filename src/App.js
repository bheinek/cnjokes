import { useState, useEffect } from 'react';
import './App.css';

function App() {
fetch(`https://api.chucknorris.io/jokes/categories`,"GET" )
const [data, setData] = useState(null);
const [error, setError] = useState(null);
  
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
        setData(actualData);
        setError(null)})
      .catch((err)=>{
        setError(err.message);
        setData(null);
      })
     }, [])
    

     return (
       <div>
         <ul>
        {data &&
          data.map((category) => (
            <li>
              <h3>{category}</h3>
            </li>
          ))}
      </ul>

       </div>
     )
}

export default App;
