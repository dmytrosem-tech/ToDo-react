import PropTypes from "prop-types";
import TodoCom from "../TodoCompleted/TodoCompleted";

export default function CompletedTodosList({ deleteTodo, cTodos }) {
  return (
    <div className="completedTodos">
      <h3 className="completedTodos__title">Completed todos</h3>
      <ul className="completedTodos__list">
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
