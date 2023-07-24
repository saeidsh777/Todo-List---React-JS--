import React, { useState } from "react";
import Header from "./Header";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [status, setStatus] = useState("all");

  function submitForm(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: todoTitle,
        completed: false,
      },
    ]);
    setTodoTitle("");
  }

  function todoTitleHandler(e) {
    setTodoTitle(e.target.value);
  }

  function editTodo(id) {
    let newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.id === id && (todo.completed = !todo.completed);
    });
    setTodos([...newTodos]);
  }

  function removeTodo(id) {
    let newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos([...newTodos]);
  }

  function statusHandler(e) {
    setStatus(e.target.value);
  }

  return (
    <>
      <Header />
      <form onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          className="todo-input"
          maxLength="40"
          value={todoTitle}
          onChange={(e) => todoTitleHandler(e)}
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            value={status}
            onChange={(e) => statusHandler(e)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          {status === "completed" &&
            todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  editTodo={editTodo}
                  removeTodo={removeTodo}
                />
              ))}

          {status === "uncompleted" &&
            todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  editTodo={editTodo}
                  removeTodo={removeTodo}
                />
              ))}
          {status === "all" &&
            todos.map((todo) => (
              <Todo
                key={todo.id}
                {...todo}
                editTodo={editTodo}
                removeTodo={removeTodo}
              />
            ))}
        </ul>
      </div>
    </>
  );
}
