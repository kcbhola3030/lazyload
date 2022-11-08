import React, { Suspense } from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./component/card/card";
import { getData } from "./component/about/About";
const LazyAbout = React.lazy(() => import("./component/about/About.js"));

function App() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0.`
  //       );
  //       setData(response.data);

  //     console.log(response.data);
  //     } catch (err) {
  //       setData(null);
  //     }
  //   };

  // }, []);
  useEffect(() => {
    // fetch(
    //   "https://pokeapi.co/api/v2/pokemon/"
    // ).then((data) => {
    //   console.log(data)
    //   setData(data);
    // });
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((data)=>{
      console.log(data.data.results);
      setData(data.data.results);
    }
    )

  }, []);

  return (
    <div className="note-list">
      {/* <Suspense fallback={<div>Loading...</div>}>

      <LazyAbout/>
      </Suspense> */}
      {/* <About/> */}
      {data.map((item) => (
        <>
        <Card name = {item.name} link = {item.url} />
        </>
      ))}
    </div>
  );
}

export default App;
