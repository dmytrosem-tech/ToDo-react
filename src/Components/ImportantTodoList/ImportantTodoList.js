import PropTypes from "prop-types";
import Todo from "../Todo";

export default function ImportantToDosList({ iTodos, deleteTodo, removeTodo }) {
  return (
    <div className="importantTodos">
      <h3 className="importantTodos__title">Important todos</h3>
      <ul className="importantTodos__list">
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
