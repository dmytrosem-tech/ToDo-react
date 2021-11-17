import PropTypes from "prop-types";
import Todo from "../Todo";
import styles from "./ImportantTodoList.module.css";

const { iTodosSt__list, iTodosSt, iTodoSt__title } = styles;

export default function ImportantToDosList({ iTodos, deleteTodo, removeTodo }) {
  return (
    <div className={iTodosSt}>
      <h3 className={iTodoSt__title}>Important todos</h3>
      <ul className={iTodosSt__list}>
        {iTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            deleteTodo={deleteTodo}
            removeTodo={removeTodo}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

ImportantToDosList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
};
