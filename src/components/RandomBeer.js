import React from "react";
import BeerCard from "./Beercard";
import axios from "axios";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = React.useState({});

  React.useEffect(() => {
    axios({
      method: "GET",
      url: "https://ih-beers-api2.herokuapp.com/beers/random",
    })
      .then((res) => {
        setRandomBeer(res.data);
      })
      .catch((err) => {
        console.log("something went wrong, ", err);
      });
  }, []);

  return <BeerCard beer={randomBeer} />;
};
export default RandomBeer;
