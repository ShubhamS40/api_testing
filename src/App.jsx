import { useState,useEffect } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.github.com/users/shubham2004-ux');
      const jsonData = await  response.json(); 
      setData(jsonData);
      console.log("sucessfully");
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Data from API</h1>
       <h1>{data.name}</h1>
       <h1>{data.bio}</h1>
       <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default App;