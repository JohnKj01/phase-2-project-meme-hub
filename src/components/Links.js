import React from "react";
import { NavLink } from "react";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/memelist">MemeList</NavLink>
      <NavLink to="/memeimage">Meme Images</NavLink>
    </div>
  );
}

export default NavBar;