import React from "react";

const TodoItem = ({ todo, toggleDone }) => {
  return (
    <li
      className={`todo-item ${todo.done ? "done" : ""}`}
      onClick={() => toggleDone(todo.id)}
    >
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Deadline: {todo.deadline}</p>
      <p>Status: {todo.done ? "Completed" : "Pending"}</p>
    </li>
  );
};

export default TodoItem;
