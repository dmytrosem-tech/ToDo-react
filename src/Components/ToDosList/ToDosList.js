import PropTypes from "prop-types";
import Todo from "../Todo";
import styles from "./ToDosList.module.css";

const { dTodosSt__list, dTodosSt, dTodosSt__title } = styles;

export default function ToDosList({ todos, deleteTodo, removeTodo }) {
  return (
    <div className={dTodosSt}>
      <h3 className={dTodosSt__title}>Todos</h3>
      <ul className={dTodosSt__list}>
        {todos.map((todo) => (
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

ToDosList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
};
