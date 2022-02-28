import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.png";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#1596d0",
      }}
    >
      <Link to="/">
        <img src={home} style={{ width: "40px" }} />
      </Link>
    </div>
  );
};

export default Navbar;
