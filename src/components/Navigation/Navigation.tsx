import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const activeClassName = {
  color: "var(--mintGreen)",
};

const Navigation = () => {
  return (
    <nav className={s.navigahionNav}>
      <NavLink
        className={s.navigahionA}
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
        to={"/home"}
      >
        Home
      </NavLink>
      <NavLink
        className={s.navigahionA}
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
        to={"/psychologists"}
      >
        Psychologists
      </NavLink>
      <NavLink
        className={s.navigahionA}
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
        to={"/favorites"}
      >
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;
