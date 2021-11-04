import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

export default function ToDoForm({ onSubmit, toggleModal, takeTodo }) {
  const todoId = uuid();
  const todoChek = uuid();
  const todoCheckImp = uuid();
  const [inputTodo, setInputTodo] = useState("");
  const [checkedTodo, setCheckedTodo] = useState(true);
  const [checkedImp, setCheckedImp] = useState(false);
  // const [value, setValue] = useState("");
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
    e.preventDefault();
    console.log(e.target);
    console.log(e.currentTarget);
    // const { importantTodo, notImportantTodo } = todo;

    // switch (e.currentTarget.value) {
    //   case "important":
    //     onSubmit(importantTodo);
    //     takeTodo(importantTodo);
    //     setInputTodo("");
    //     toggleModal();
    //     break;
    //   case "notImportant":
    //     onSubmit(notImportantTodo);
    //     takeTodo(notImportantTodo);
    //     setInputTodo("");
    //     toggleModal();
    //     break;
    //   default:
    //     alert("in progress...");
    // }
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

  return (
    <form className="form" onClick={onFormSubmit}>
      <label className="form__label" htmlFor={todoId}></label>
      <input
        id={todoId}
        className="todo__input"
        type="text"
        value={inputTodo}
        placeholder="write a task"
        onChange={handleChange}
      ></input>

      <label htmlFor={todoChek} className="checkImpLabel">
        Todo
      </label>
      <input
        type="checkbox"
        name="notImportant"
        value="important"
        id={todoChek}
        checked={checkedTodo}
        // disabled={checkedImp}
        onChange={handleChecChange}
      />

      <label htmlFor={todoCheckImp} className="checkImpLabel">
        Important Todo!
      </label>
      <input
        type="checkbox"
        name="important"
        value="notImportatnt"
        id={todoCheckImp}
        checked={checkedImp}
        // disabled={checkedTodo}
        onChange={handleChecChange}
      />

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
      <button type="submit" disabled={!checkedImp && !checkedTodo}>
        Add todo
      </button>
    </form>
  );
}

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};
