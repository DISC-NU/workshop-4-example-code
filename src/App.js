import React, { useState } from "react";
import { dummyTodos } from "./data/dummy-data";
import "./App.css";
import TodoItem from "./Components/TodoItem/TodoItem";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [todos] = useState([...dummyTodos]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <h1>Todo List App</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
