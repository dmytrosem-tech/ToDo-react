import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className="link"
        activeclassname="active__link"
      >
        Important todos
      </NavLink>
      <NavLink
        exact="true"
        to="/daily"
        className="link"
        activeclassname="active__link"
      >
        Daily todos
      </NavLink>
      <NavLink
        exact="true"
        to="/completed"
        className="link"
        activeclassname="active__link"
      >
        Completed todos
      </NavLink>
    </nav>
  );
}
