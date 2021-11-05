import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/todo-react"
        className="link"
        activeclassname="active__link"
      >
        Important todos
      </NavLink>
      <NavLink
        exact="true"
        to="/todo-react/daily"
        className="link"
        activeclassname="active__link"
      >
        Daily todos
      </NavLink>
      <NavLink
        exact="true"
        to="/todo-react/completed"
        className="link"
        activeclassname="active__link"
      >
        Completed todos
      </NavLink>
    </nav>
  );
}
