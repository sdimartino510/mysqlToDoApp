import React, { Component } from 'react';
import axios from 'axios';

class TodoCard extends Component {
  state = {
    todo: {
      text: '',
      completed: '',
      id: ''
    },
    inputUpdate: ''
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`/api/todos/${ this.props.match.params.todoId }`);
      this.setState({ todo: data });
    } catch (e) {
      console.log(e);
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    try {
      const { data } = await axios.patch(`/api/todos/${ this.props.match.params.todoId }/updatetext`, { text: this.state.inputUpdate });
      this.setState({ todo: data, inputUpdate: '' });
    } catch(e) {
      console.log(e);
    }
  }

  handleDelete = async () => {
    try {
      await axios.delete(`/api/todos/${ this.props.match.params.todoId }`);
      // this.setState({ todo: data });
      this.props.history.push('/todos');
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <p>To Do: { this.state.todo.text }</p>
        <p>ID: { this.state.todo.id }</p>
        <p>Completed: { this.state.todo.completed }</p>
        <input
          name='inputUpdate'
          value={ this.state.inputUpdate }
          onChange={ this.handleInputChange }
        />
        <button onClick={ (e) => this.handleSubmit(e) }>Update Todo Item</button>
        <button onClick={ this.handleDelete }>Delete Todo Item</button>
        <button onClick={ this.props.history.goBack }>Go Back</button>
      </div>
    );
  }
}

export default TodoCard;