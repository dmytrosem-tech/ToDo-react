import { useEffect, useState } from "react";
import ToDoForm from "./Components/ToDoForm";
import Container from "./Components/Container";
import Filter from "./Components/Filter";
import ToDosList from "./Components/ToDosList";

export default function App() {
  const [todos, setTodos] = useState(() =>
    JSON.parse(window.localStorage.getItem("todos"))
  );

  const onSubmit = (todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todoId !== todo.id));
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Container title="What you wanna to do? ;)">
      <ToDoForm onSubmit={onSubmit} />
      <Filter />
      <ToDosList todos={todos} deleteTodo={deleteTodo} />
    </Container>
  );
}
