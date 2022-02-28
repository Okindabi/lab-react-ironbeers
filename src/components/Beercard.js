import React from "react";

const BeerCard = ({ beer }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img
          src={beer.image_url}
          alt="beer-picture"
          style={{ height: "150px" }}
        />
        <h2>{beer.name}</h2>
      </div>
      <h4>{beer.tagline}</h4>
      <h5>{beer.first_brewed}</h5>
      <h5>{beer.attenuation_level}</h5>
      <h5>{beer.description}</h5>
      <h5>{beer.contributed_by}</h5>
    </div>
  );
};

export default BeerCard;
