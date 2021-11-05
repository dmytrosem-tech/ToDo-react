import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useToggle } from "./hooks/useToggle";
import ToDoForm from "./Components/ToDoForm";
import Container from "./Components/Container";
import Navigation from "./Components/Navigation";
import Filter from "./Components/Filter";
import Modal from "./Components/Modal";
// import ToDosList from "./Components/ToDosList";
// import ImportantToDosList from "./Components/ImportantTodoList/ImportantTodoList";
// import ComletedTodosList from "./Components/CompletedTodosList";

const ImportantToDosList = lazy(() =>
  import(
    "./Components/ImportantTodoList" /* webpackChunkName: "ImportantTodos" */
  )
);
const ToDosList = lazy(() =>
  import("./Components/ToDosList" /* webpackChunkName: "ToDosList" */)
);
const ComletedTodosList = lazy(() =>
  import(
    "./Components/CompletedTodosList" /* webpackChunkName: "CompletedTodos" */
  )
);

export default function App() {
  /* -------------------------------------------state-------------------------------------------------- */
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

  /*---------------------------------------------metods------------------------------------------------------ */
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
  const getFilteredTD = (arrayOfTodos) => {
    const filteredInputSearch = inputFilter.toLowerCase();
    return arrayOfTodos.filter((todo) =>
      todo.text.toLowerCase().includes(filteredInputSearch)
    );
  };
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
    window.localStorage.setItem("iTodos", JSON.stringify(iTodos));
    window.localStorage.setItem("cTodos", JSON.stringify(cTodos));
    window.localStorage.setItem("defaultTodos", JSON.stringify(defaultTodos));
  }, [todos, iTodos, cTodos, defaultTodos]);

  /*-------------------------------------------render-------------------------------------------------------*/
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

      <Navigation />

      <h3>TODOS</h3>

      <Filter onChange={onFilterSearch} inputFilter={inputFilter} />

      <Suspense fallback="Do not be so fast :)">
        <Routes>
          <Route
            exact
            path="/todo-react"
            element={
              <ImportantToDosList
                iTodos={getFilteredTD(iTodos)}
                deleteTodo={deleteTodo}
                removeTodo={removeToCompleted}
              />
            }
          />

          <Route
            path="/todo-react/daily"
            element={
              <ToDosList
                todos={getFilteredTD(todos)}
                deleteTodo={deleteTodo}
                removeTodo={removeToCompleted}
              />
            }
          />

          <Route
            path="/todo-react/completed"
            element={
              <ComletedTodosList
                cTodos={getFilteredTD(cTodos)}
                deleteTodo={deleteTodo}
                removeTodo={removeToCompleted}
              />
            }
          />

          <Route element={<p>sorry</p>} />
        </Routes>
      </Suspense>
    </Container>
  );
}

/*-----------------------------------variant of render without routes--------------------------*/
/* <ImportantToDosList
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
      /> */
