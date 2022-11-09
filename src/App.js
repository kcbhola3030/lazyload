import React, { Suspense } from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./component/card/card";
import { getData } from "./component/about/About";
import { Pagination } from "./component/Pagination";
const LazyAbout = React.lazy(() => import("./component/about/About.js"));

function App() {
  const [data, setData] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [dataPerPage,setDataPerPage] = useState(28);

  useEffect(() => {
    const getData = async () => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=800&offset=0.`
        );
        setData(response.data.results);
        // console.log(response.data.results)
    };
    getData();

  }, []);

  const indexofLastPage = dataPerPage * currentPage;
  const indexofFirstPage = indexofLastPage - dataPerPage;
  const currentData = data.slice(indexofFirstPage,indexofLastPage);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  }


  return (
    <>
    <div className="d-flex title justify-content-center text-white">
      Pokemon Cards
    </div>
    <div className="note-list mt-2">
      {/* <Suspense fallback={<div>Loading...</div>}>

      <LazyAbout/>
      </Suspense> */}
      {/* <About/> */}
      {currentData.map((item) => (
        <>
        <Card name = {item.name} link = {item.url} />
        </>
      ))}
    </div>
    <div className="d-flex justify-content-center">
    <Pagination totalPage={data.length} dataPerPage={dataPerPage} paginate={paginate} />
    </div>
    </>
  );
}

export default App;
