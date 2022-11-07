import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import React from "react";
import Card from "./component/card/card"



function App() {
  const [data,setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0.`
        );
        setData(response.data);
      } catch (err) {
        setData(null);
      }
    };
    getData();
  }, []);

  return (
    <div>
     {/* <Card getData={getData}/>
     {
        arr.map((species)=>(
          <>
         <div>
         {species}
         </div>
          </>
        ))
     } */}
   Hello worlds
   {data.map((item)=>(
    <>
  <div>
    {item}
  </div>
    </>
   ))}
    </div>
  );
}

export default App;