import PropTypes from "prop-types";
import TodoCom from "../TodoCompleted/TodoCompleted";
import styles from "./CompletedTodosList.module.css";

const { cTodosSt__list, cTodosSt, cTodosSt__title } = styles;

export default function CompletedTodosList({ deleteTodo, cTodos }) {
  return (
    <div className={cTodosSt}>
      <h3 className={cTodosSt__title}>Completed todos</h3>
      <ul className={cTodosSt__list}>
        {cTodos.map((todo) => (
          <TodoCom
            key={todo.id}
            text={todo.text}
            deleteTodo={deleteTodo}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

CompletedTodosList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
};
