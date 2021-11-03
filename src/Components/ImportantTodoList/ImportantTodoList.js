import PropTypes from "prop-types";
import Todo from "../Todo";

export default function ImportantToDosList({ todos, deleteTodo }) {
  return (
    <ul className="todosList">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          deleteTodo={deleteTodo}
          id={todo.id}
        />
      ))}
    </ul>
  );
}

ImportantToDosList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
};
