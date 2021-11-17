import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const { nav, nav__link, nav__linkActive } = styles;

export default function Navigation() {
  return (
    <nav className={nav}>
      <NavLink
        exact="true"
        to="/todo-react"
        className={nav__link}
        activeclassname={nav__linkActive}
      >
        Important todos
      </NavLink>
      <NavLink
        exact="true"
        to="/todo-react/daily"
        className={nav__link}
        activeclassname={nav__linkActive}
      >
        Daily todos
      </NavLink>
      <NavLink
        exact="true"
        to="/todo-react/completed"
        className={nav__link}
        activeclassname={nav__linkActive}
      >
        Completed todos
      </NavLink>
    </nav>
  );
}
