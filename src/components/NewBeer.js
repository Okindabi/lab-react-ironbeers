import axios from "axios";
import React from "react";

const NewBeer = () => {
  const [name, setName] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [firstBrewed, setFirstBrewed] = React.useState("");
  const [brewersTips, setBrewersTips] = React.useState("");
  const [attenuationLevel, setAttenuationLevel] = React.useState("");
  const [contributedBy, setContributedBy] = React.useState("");

  const addNewBeer = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: name,
        tagline: tagline,
        description: description,
        firstBrewed: firstBrewed,
        brewersTips: brewersTips,
        attenuationLevel: attenuationLevel,
        contributedBy: contributedBy,
      })
      .then((res) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel("");
        setContributedBy("");
      });
  };
  return (
    <form onSubmit={addNewBeer}>
      <label>Name</label>
      <input
        value={name}
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Tagline</label>
      <input
        value={tagline}
        type="text"
        name="tagline"
        onChange={(e) => setTagline(e.target.value)}
      />
      <label>Description</label>
      <input
        value={description}
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>First Brewed</label>
      <input
        value={firstBrewed}
        type="date"
        name="firstBrewed"
        onChange={(e) => setFirstBrewed(e.target.value)}
      />
      <label>Brewers Tips</label>
      <input
        value={brewersTips}
        type="text"
        name="brewersTips"
        onChange={(e) => setBrewersTips(e.target.value)}
      />
      <label>Attenuation Level</label>
      <input
        value={attenuationLevel}
        type="text"
        name="attenuation_level"
        onChange={(e) => setAttenuationLevel(e.target.value)}
      />
      <label>Contributed By</label>
      <input
        value={contributedBy}
        type="text"
        name="contributed_by"
        onChange={(e) => setContributedBy(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewBeer;
