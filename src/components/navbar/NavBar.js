import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <header className="navbar__container">
    <div className="navbar__navlinks container">
    <NavLink
      to="/"
      className="navlink"
      activeClassName="is-active"
      exact={true}
    >
      Home
    </NavLink>
    <NavLink to="/help" className="navlink" activeClassName="is-active">
      About Us
    </NavLink>
    <NavLink to="/help" className="navlink" activeClassName="is-active">
      Services
    </NavLink>
    <NavLink to="/help" className="navlink" activeClassName="is-active">
      Experties
    </NavLink>
    <NavLink to="/help" className="navlink" activeClassName="is-active">
      Contact Us
    </NavLink>
    </div>
  </header>
);

export default NavBar;
