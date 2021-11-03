import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

export default function ToDoForm({ onSubmit, toggleModal }) {
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
    toggleModal();
  };

  const onBtnsClick = (e) => {
    e.preventDefault();

    const importantTodo = {
      text: inputTodo,
      importance: "high",
      id: uuid(),
    };
    const notImportantTodo = {
      text: inputTodo,
      importance: "low",
      id: uuid(),
    };

    switch (e.target.name) {
      case "important":
        onSubmit(importantTodo);
        setInputTodo("");
        toggleModal();
        break;
      case "notImportant":
        onSubmit(notImportantTodo);
        setInputTodo("");
        toggleModal();
        break;
      default:
        alert("in progress...");
    }
  };

  return (
    <form className="form">
      <label className="form__label" htmlFor={todoId}>
        <input
          id={todoId}
          className="todo__input"
          type="text"
          value={inputTodo}
          onChange={handleChange}
        ></input>
      </label>
      <button
        type="button"
        name="important"
        className="btnImportant"
        onClick={onBtnsClick}
      >
        Important tasks
      </button>
      <button
        type="button"
        name="notImportant"
        className="btnSoso"
        onClick={onBtnsClick}
      >
        Not importatnt tasks
      </button>
    </form>
  );
}

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};
