import { useState,useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [data, setData] = useState([]);
  const apikey=String(import.meta.env.VITE_API_KEY)
  const id=nanoid()

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    
   
    try {
     
     
      const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=a00271610f9b4f9f8b398a3ea94e1c69`);
      const jsonData = await  response.json() 
      setData(jsonData.articles);
      console.log(jsonData.articles);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
  
    <div>
      <ul>
        {data.map((item)=>{
          return (
            
            <div key={id}>
            <li>{item.title}</li>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;