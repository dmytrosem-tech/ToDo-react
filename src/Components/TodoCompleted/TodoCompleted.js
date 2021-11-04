import PropTypes from "prop-types";
import styles from "./TodoCompleted.module.css";

export default function TodoCom({ text, id, deleteTodo, removeTodo }) {
  const { todoList__item } = styles;
  return (
    <li className={todoList__item} id={id}>
      <p className="todoList__text">{text}</p>
      <button className="delBtn" type="button" onClick={() => deleteTodo(id)}>
        Del
      </button>
    </li>
  );
}

TodoCom.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  deleteTodo: PropTypes.func,
};
