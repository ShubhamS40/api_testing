import { useState,useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [data, setData] = useState([]);
  const apikey=String(import.meta.env.VITE_API_KEY)
  const id=nanoid()
  const apiKey='a00271610f9b4f9f8b398a3ea94e1c69'

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
   
    try {
     
     
      const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-03-04&sortBy=publishedAt&apiKey=a00271610f9b4f9f8b398a3ea94e1c69`);
      const jsonData = await  response.json() 
      setData(jsonData.articles);
      console.log(jsonData.posts);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
  
    <div>
      <ul>
        {data.map((item)=>{
          return <div>
            <li key={id}>{item.title}</li>
            <img src={item.urlToImage} alt="" />
          </div>
        })}
      </ul>
    </div>
  );
}

export default App;