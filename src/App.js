import { useEffect, useState } from "react";
import { useToggle } from "./hooks/useToggle";
import ToDoForm from "./Components/ToDoForm";
import Container from "./Components/Container";
import Filter from "./Components/Filter";
import ToDosList from "./Components/ToDosList";
import ImportantToDosList from "./Components/ImportantTodoList/ImportantTodoList";
import ComletedTodosList from "./Components/CompletedTodosList";
import Modal from "./Components/Modal";

export default function App() {
  const [showModal, setShowModal] = useToggle(false);
  const [inputFilter, setInputFilter] = useState("");
  const [iTodos, setITodos] = useState(
    () => JSON.parse(window.localStorage.getItem("iTodos")) ?? []
  );
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem("todos")) ?? []
  );
  const [cTodos, setCTodos] = useState(
    () => JSON.parse(window.localStorage.getItem("cTodos")) ?? []
  );
  const [defaultTodos, setDefaultTodos] = useState(
    () => JSON.parse(window.localStorage.getItem("defaultTodos")) ?? []
  );

  const onSubmit = (todo) => {
    switch (todo.importance) {
      case "high":
        setITodos((prev) => [todo, ...prev]);
        break;
      case "low":
        setTodos((prevTodos) => [todo, ...prevTodos]);
        break;
      default:
        return "not bad";
    }
  };
  const takeDefaultTodo = (todo) => {
    setDefaultTodos((prev) => [todo, ...prev]);
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todoId !== todo.id));
    setITodos(iTodos.filter((todo) => todoId !== todo.id));
    setCTodos(cTodos.filter((todo) => todoId !== todo.id));
    setDefaultTodos(defaultTodos.filter((todo) => todoId !== todo.id));
  };
  const removeToCompleted = (todoId) => {
    setTodos(todos.filter((todo) => todoId !== todo.id));
    setITodos(iTodos.filter((todo) => todoId !== todo.id));
    setCTodos((prev) => [
      defaultTodos.filter((todo) => todoId === todo.id)[0],
      ...prev,
    ]);
  };

  const onFilterSearch = (e) => {
    setInputFilter(e.currentTarget.value);
  };

  const getFilteredTodos = () => {
    const filteredInputSearch = inputFilter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filteredInputSearch)
    );
  };
  const getFilteredITodos = () => {
    const filteredInputSearch = inputFilter.toLowerCase();
    return iTodos.filter((todo) =>
      todo.text.toLowerCase().includes(filteredInputSearch)
    );
  };
  const getFilteredCTodos = () => {
    console.log(cTodos);
    const filteredInputSearch = inputFilter.toLowerCase();
    return cTodos.filter((todo) => {
      console.log(todo);
      // return todo.text.toLowerCase().includes(filteredInputSearch);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
    window.localStorage.setItem("iTodos", JSON.stringify(iTodos));
    window.localStorage.setItem("cTodos", JSON.stringify(cTodos));
    window.localStorage.setItem("defaultTodos", JSON.stringify(defaultTodos));
  }, [todos, iTodos, cTodos, defaultTodos]);

  return (
    <Container title="What you wanna to do? ;)">
      {showModal && (
        <Modal toggleModal={setShowModal}>
          <ToDoForm
            toggleModal={setShowModal}
            onSubmit={onSubmit}
            takeTodo={takeDefaultTodo}
          />
        </Modal>
      )}
      <button type="button" onClick={setShowModal}>
        Add todo
      </button>
      <Filter onChange={onFilterSearch} inputFilter={inputFilter} />
      <ImportantToDosList
        iTodos={getFilteredITodos()}
        deleteTodo={deleteTodo}
        removeTodo={removeToCompleted}
      />
      <ToDosList
        todos={getFilteredTodos()}
        deleteTodo={deleteTodo}
        removeTodo={removeToCompleted}
      />
      <ComletedTodosList
        cTodos={cTodos}
        deleteTodo={deleteTodo}
        removeTodo={removeToCompleted}
      />
    </Container>
  );
}
