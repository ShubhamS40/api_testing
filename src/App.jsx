import { useState,useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [data, setData] = useState([]);
  const apikey=String(import.meta.env.VITE_API_KEY)
  const id=nanoid()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
   
    try {
     
     
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const jsonData = await  response.json() 
      setData(jsonData);
      console.log(jsonData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
  
    <div>
      <ul>
        {data.map((item)=>{
          return <li key={id}>{item.title}</li>
        })}
      </ul>
    </div>
  );
}

export default App;