import React from "react";

const TodoItem = ({ todo, toggleDone }) => {
  return (
    <li className={`todo-item ${todo.done ? "done" : ""}`}>
      <div className="todo-content">
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <p>Deadline: {todo.deadline}</p>
        <p>Status: {todo.done ? "Completed" : "Pending"}</p>
      </div>
      <button onClick={() => toggleDone(todo.id)}>
        {todo.done ? "Mark as Undone" : "Mark as Done"}
      </button>
    </li>
  );
};

export default TodoItem;
