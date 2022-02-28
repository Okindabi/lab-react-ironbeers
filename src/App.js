import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Homepage from "./components/Homepage";
import Beers from "./components/Beers";
import BeerDetails from "./components/BeerInfo";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  const [beers, setBeers] = React.useState([]);
  const [randomBeer, setRandomBeer] = React.useState({});

  React.useEffect(() => {
    axios({
      method: "GET",
      url: "https://ih-beers-api2.herokuapp.com/beers",
    })
      .then((res) => {
        setBeers(res.data);
      })
      .catch((err) => {
        console.log("something went wrong, ", err);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beer/:beerId" element={<BeerDetails beers={beers} />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
