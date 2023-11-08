import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink style={navStyles} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={navStyles} to="/movies">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink style={navStyles} to="/directors">
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink style={navStyles} to="/actors">
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;