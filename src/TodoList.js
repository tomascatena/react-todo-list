import React, { Component } from 'react';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  addTodo(newTodo) {
    const id = uuidv4();
    newTodo = { ...newTodo, id, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  removeTodo(id) {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }

  updateTodo(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
          toggleTodo={this.toggleCompletion}
        />
      );
    });

    return (
      <div className="TodoList">
        <h1>
          Todo List <span>A Simple React Todo List App</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
