import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

export default function ToDoForm({ onSubmit }) {
  const todoId = uuid();
  const [inputTodo, setInputTodo] = useState("");

  const handleChange = (e) => {
    setInputTodo(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      text: inputTodo,
      id: uuid(),
    };
    onSubmit(todo);
    setInputTodo("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor={todoId}>
        <input
          id={todoId}
          className="todo__input"
          type="text"
          value={inputTodo}
          onChange={handleChange}
        ></input>
      </label>
    </form>
  );
}

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};
