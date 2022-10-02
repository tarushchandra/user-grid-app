import React from "react";

const Navbar = ({ handleClick }) => {
  return (
    <div className="navbar">
      <div className="heading">
        <i className="fa-solid fa-user"></i>
        <h1>Users</h1>
      </div>
      <button onClick={() => handleClick()}>Get Users</button>
    </div>
  );
};

export default Navbar;
