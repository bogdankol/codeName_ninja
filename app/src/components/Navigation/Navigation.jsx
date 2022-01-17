import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/listOfHeroes" className={({ isActive }) => isActive ? s.activeLink : s.link}>
        Heroes
      </NavLink>
      <NavLink
        to="/editHeroes"
        className={({ isActive }) => isActive ? s.activeLink : s.link}
      >
        Edit heroes info or add new hero
      </NavLink>
    </nav>
  )
};

export default Navigation;
