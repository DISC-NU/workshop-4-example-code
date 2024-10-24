import React, { useState, useEffect } from "react";
import { dummyTodos } from "./data/dummy-data";
import "./App.css";
import TodoItem from "./Components/TodoItem/TodoItem";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [todos] = useState([...dummyTodos]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    console.log("useEffect called");
  }, [darkMode]);

  // TODO: Add a function to toggle the 'done' status of a todo item

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <h1>Todo List App</h1>

      {/* TODO: Add a title or button here */}

      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {/* TODO: Change color of foreground text based on dark mode */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            // TODO: Pass your handler to toggle the 'done' status of a todo item here as a prop to the TodoItem component
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
