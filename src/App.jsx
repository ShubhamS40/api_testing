import { useState,useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const apikey=String(import.meta.env.VITE_API_KEY)

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
            
            <div>
              <img height="100px" src={item.urlToImage} />
            <li>{item.title}</li>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;