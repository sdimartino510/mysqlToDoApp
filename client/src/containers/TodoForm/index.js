import React, { Component } from 'react';
import axios from 'axios';
import RenderTodoList from '../../components/RenderTodoList';

class TodoForm extends Component {
  state = {
    todos: [],
    todoInput: ''
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/todos');
      this.setState({ todos: data })
    } catch (e) {
      console.log(e);
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api/todos', { text: this.state.todoInput });
      const todos = [...this.state.todos, data];
      this.setState({ todos, todoInput: '' });
    } catch(e) {
      console.log(e);
    }
  }

  handleDeleteTodo = async id => {
    try {
      const { data } = await axios.delete(`/api/todos/${id}`);
      this.setState({ todos: data });
    } catch (e) {
      console.log(e);
    }
  }

  handleComplete = async id => {
    try {
      const { data } = await axios.patch(`/api/todos/${id}/1`);
      this.setState({ todos: data });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <>
        <RenderTodoList 
          items={ this.state.todos }
          handleDelete={this.handleDeleteTodo} 
          handleComplete={this.handleComplete}
        />
        <form>
          <input
            name="todoInput"
            value={ this.state.todoInput }
            onChange={ this.handleInputChange }
          />
          <button onClick={ (e) => this.handleSubmit(e) }>Add ToDo</button>
        </form>
      </>
    )
  }
}

export default TodoForm;