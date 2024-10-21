import React from "react";

// TODO: Add a prop to handle the 'done' status of a todo item
const TodoItem = ({ todo }) => {
  // TODO: Add 'done' property to todo object in dummy data
  // TODO: Change background color based on 'done' status
  return (
    <li className={`todo-item ${todo.done ? "done" : ""}`}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Deadline: {todo.deadline}</p>
      <p>Status: {todo.done ? "Completed" : "Pending"}</p>
    </li>
  );
};

export default TodoItem;
