import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoTitle: "",
      status: "all",
    };
    this.submitForm = this.submitForm.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.todoTitleHandler = this.todoTitleHandler.bind(this);
    this.statusHandler = this.statusHandler.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          title: this.state.todoTitle,
          completed: false,
        },
      ],
      todoTitle: "",
    });
  }

  todoTitleHandler(e) {
    this.setState({ todoTitle: e.target.value });
  }

  editTodo(id) {
    let newTodos = [...this.state.todos];
    newTodos.forEach((todo) => {
      todo.id === id && (todo.completed = !todo.completed);
    });
    this.setState({ todos: [...newTodos] });
  }

  removeTodo(id) {
    let newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({ todos: newTodos });
  }

  statusHandler(e) {
    this.setState({ status: e.target.value });
  }

  render() {
    return (
      <>
        <Header />
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            className="todo-input"
            maxLength="40"
            value={this.state.todoTitle}
            onChange={this.todoTitleHandler}
          />
          <button className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select
              name="todos"
              className="filter-todo"
              value={this.state.status}
              onChange={this.statusHandler}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>

        <div className="todo-container">
          <ul className="todo-list">
            {this.state.status === "completed" &&
              this.state.todos
                .filter((todo) => todo.completed)
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    {...todo}
                    editTodo={this.editTodo}
                    removeTodo={this.removeTodo}
                  />
                ))}

            {this.state.status === "uncompleted" &&
              this.state.todos.filter((todo) => !todo.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  editTodo={this.editTodo}
                  removeTodo={this.removeTodo}
                />
              ))}
            {this.state.status === "all" &&
              this.state.todos.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  editTodo={this.editTodo}
                  removeTodo={this.removeTodo}
                />
              ))}
          </ul>
        </div>
      </>
    );
  }
}
