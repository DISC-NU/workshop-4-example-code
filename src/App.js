import React, { useState } from "react";
import { dummyTodos } from "./data/dummy-data";
import "./App.css";
import TodoItem from "./Components/TodoItem/TodoItem";

// Northwestern University DISC Fall Workshop Series 2024
// Workshop 4: Introduction to JavaScript, React, and JSX
// Created by Amy Liao & Ethan Pineda

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState([...dummyTodos]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Todo List App</h1>
      <h2>My Tasks for Today</h2>

      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleDone={toggleDone} />
        ))}
      </ul>
    </div>
  );
};

export default App;
