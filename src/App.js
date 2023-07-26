import React, { useState, useEffect } from "react";
import ProductDetails from "./components/productDetails";
import Header from "./components/Header";


const App = () => {
  const [deals, setDeals] = useState(null);
  const [search, setSearch ] = useState("deal of the day") ; 

  const getDeals = async () => {
    try {
      const response = await fetch("http://localhost:8000/deals", {
        method: "GET",
      });
      const data = await response.json();
      setDeals(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDeals();
  }, []);


  return (
    <div className="app">
      <Header />
      <nav>
        <button className="primary">Amazon</button>
      </nav>
      <div>
        <h2>Best Deal!</h2>
        <div className="feed">
          {deals?.map(deal => 
            <ProductDetails key={deal.pos} item={deal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
