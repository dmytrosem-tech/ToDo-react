import { useEffect, useState } from "react";
import { useToggle } from "./hooks/useToggle";
import ToDoForm from "./Components/ToDoForm";
import Container from "./Components/Container";
import Filter from "./Components/Filter";
import ToDosList from "./Components/ToDosList";
import ImportantToDosList from "./Components/ImportantTodoList/ImportantTodoList";
import Modal from "./Components/Modal";

export default function App() {
  const [showModal, setShowModal] = useToggle(false);
  const [inputFilter, setInputFilter] = useState("");
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem("todos")) ?? []
  );
  const [iTodos, setITodos] = useState(
    () => JSON.parse(window.localStorage.getItem("iTodos")) ?? []
  );

  const onSubmit = (todo) => {
    console.log(todo);
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todoId !== todo.id));
  };

  const onFilterSearch = (e) => {
    setInputFilter(e.currentTarget.value);
  };

  const getFilteredTodos = () => {
    const filteredInputSerach = inputFilter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filteredInputSerach)
    );
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Container title="What you wanna to do? ;)">
      {showModal && (
        <Modal toggleModal={setShowModal}>
          <ToDoForm toggleModal={setShowModal} onSubmit={onSubmit} />
        </Modal>
      )}
      <button type="button" onClick={setShowModal}>
        Add todo
      </button>
      <Filter onChange={onFilterSearch} inputFilter={inputFilter} />
      <ToDosList todos={getFilteredTodos()} deleteTodo={deleteTodo} />
    </Container>
  );
}
