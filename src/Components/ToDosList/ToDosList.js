import PropTypes from "prop-types";
import Todo from "../Todo";

export default function ToDosList({ todos, deleteTodo, removeTodo }) {
  return (
    <div className="todos">
      <h3 className="todos__title">Todos</h3>
      <ul className="todos__list">
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
