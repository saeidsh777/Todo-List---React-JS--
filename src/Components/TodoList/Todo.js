import React from "react";

export default function Todo(props) {
  function todoCheck(id) {
    props.editTodo(id);
  }

  function todoRemove(id) {
    props.removeTodo(id);
  }

  return (
    // 'completed' class for completed todos
    <div
      className={`todo ${props.completed ? "completed " : ""}`}
      style={{ display: "flex" }}
    >
      <li className="todo-item">{props.title}</li>

      <button className="check-btn" onClick={() => todoCheck(props.id)}>
        <i className="fas fa-check" aria-hidden="true"></i>
      </button>

      <button className="trash-btn" onClick={() => todoRemove(props.id)}>
        <i className="fas fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
}
