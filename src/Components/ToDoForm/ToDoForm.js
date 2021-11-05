import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import styles from "./ToDoForm.module.css";

export default function ToDoForm({ onSubmit, toggleModal, takeTodo }) {
  const todoId = uuid();
  const todoChek = uuid();
  const todoCheckImp = uuid();
  const [inputTodo, setInputTodo] = useState("");
  const [checkedTodo, setCheckedTodo] = useState(true);
  const [checkedImp, setCheckedImp] = useState(false);
  const todo = {
    importantTodo: {
      text: inputTodo,
      importance: "high",
      id: uuid(),
    },
    notImportantTodo: {
      text: inputTodo,
      importance: "low",
      id: uuid(),
    },
  };

  const handleChange = (e) => {
    setInputTodo(e.currentTarget.value.toLowerCase());
  };

  const handleChecChange = (e) => {
    switch (e.target.name) {
      case "important":
        setCheckedImp(!checkedImp);
        setCheckedTodo(checkedImp);
        break;
      case "notImportant":
        setCheckedTodo(!checkedTodo);
        setCheckedImp(checkedTodo);
        break;
      default:
        return "lol";
    }
  };

  const onFormSubmit = (e) => {
    // e.preventDefault();
    const { importantTodo, notImportantTodo } = todo;

    switch (checkedTodo) {
      case false:
        onSubmit(importantTodo);
        takeTodo(importantTodo);
        setInputTodo("");
        toggleModal();
        break;
      case true:
        onSubmit(notImportantTodo);
        takeTodo(notImportantTodo);
        setInputTodo("");
        toggleModal();
        break;
      default:
        alert("in progress...");
    }
  };
  const onClickCloseBtn = () => {
    toggleModal();
  };

  /* ---------------------------Вариант с кнопками---------------------------- */
  // const onBtnsClick = (e) => {
  //   e.preventDefault();
  //   const { importantTodo, notImportantTodo } = todo;

  //   switch (e.target.name) {
  //     case "important":
  //       onSubmit(importantTodo);
  //       takeTodo(importantTodo);
  //       setInputTodo("");
  //       toggleModal();
  //       break;
  //     case "notImportant":
  //       onSubmit(notImportantTodo);
  //       takeTodo(notImportantTodo);
  //       setInputTodo("");
  //       toggleModal();
  //       break;
  //     default:
  //       alert("in progress...");
  //   }
  // };
  const {
    modal__closeBtn,
    form,
    form__input,
    form__label,
    form__btnAdd,
    form__checkBox,
    form__checkTodo,
    form__checked,
  } = styles;
  return (
    <form className={form} onSubmit={onFormSubmit}>
      <button
        className={modal__closeBtn}
        type="button"
        onClick={onClickCloseBtn}
      >
        X
      </button>
      <label className="form__label" htmlFor={todoId}></label>
      <input
        id={todoId}
        className={form__input}
        type="text"
        value={inputTodo}
        placeholder="write a task"
        onChange={handleChange}
      ></input>
      <div className={form__checkBox}>
        <div className={form__checkTodo}>
          <label className={form__label} htmlFor={todoChek}>
            Todo
          </label>
          <input
            className={form__checked}
            type="checkbox"
            name="notImportant"
            value="important"
            id={todoChek}
            checked={checkedTodo}
            onChange={handleChecChange}
          />
        </div>

        <div className={form__checkTodo}>
          <label className={form__label} htmlFor={todoCheckImp}>
            Important Todo!
          </label>
          <input
            className={form__checked}
            type="checkbox"
            name="important"
            value="notImportatnt"
            id={todoCheckImp}
            checked={checkedImp}
            onChange={handleChecChange}
          />
        </div>
      </div>

      {/* <button
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
      </button> */}
      <button className={form__btnAdd} type="submit">
        Add
      </button>
    </form>
  );
}

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};
