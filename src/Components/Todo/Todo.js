import PropTypes from "prop-types";
import styles from "./Todo.module.css";

export default function Todo({ text, deleteTodo, id }) {
  const { todoList__item } = styles;
  return (
    <li className={todoList__item} id={id}>
      <p className="todoList__text">{text}</p>
      <button type="button" onClick={() => deleteTodo(id)}>
        del
      </button>
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  deleteTodo: PropTypes.func,
};
