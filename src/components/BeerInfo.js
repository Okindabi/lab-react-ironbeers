import React from "react";
import { useParams } from "react-router-dom";
import BeerCard from "./Beercard";

const BeerDetails = ({ beers }) => {
  const { beerId } = useParams();

  let foundBeer = beers.find((beer) => {
    return beer._id === beerId;
  });

  return <BeerCard beer={foundBeer} />;
};

export default BeerDetails;
