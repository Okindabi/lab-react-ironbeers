import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeers from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

const Homepage = () => {
  return (
    <div>
      <img
        src={beers}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <Link to="/beers">All Beers</Link>
      <img
        src={randomBeers}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <Link to="/random-beer">Random Beer</Link>
      <img
        src={newBeer}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
};

export default Homepage;
