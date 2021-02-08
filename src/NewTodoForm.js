import React, { Component } from 'react';
import './NewTodoForm.css';

export class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ task: '' });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="New Todo"
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
