import React, { Component } from "react";

export default class Todo extends Component {
  todoCheck(editTodo, id) {
    editTodo(id);
  }

  todoRemove(removeTodo,id) {
    removeTodo(id);
  }
  render() {
    return (
      // 'completed' class for completed todos
      <div
        className={`todo ${this.props.completed ? "completed " : ""}`}
        style={{ display: "flex" }}
      >
        <li className="todo-item">{this.props.title}</li>

        <button
          className="check-btn"
          onClick={() => this.todoCheck(this.props.editTodo, this.props.id)}
        >
          <i className="fas fa-check" aria-hidden="true"></i>
        </button>

        <button
          className="trash-btn"
          onClick={() => this.todoRemove(this.props.removeTodo, this.props.id)}
        >
          <i className="fas fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
