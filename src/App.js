import React, { useState, useEffect } from "react";
import Nav from "./Component/component1.jsx";
import Card from "./Component/component2.jsx";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <Card data={data} />
    </div>
  );
}

export default App;
