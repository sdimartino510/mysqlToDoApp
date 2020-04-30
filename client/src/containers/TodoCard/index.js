import React, { Component } from 'react';
import axios from 'axios';

class TodoCard extends Component {
  state = {
    todo: {
      text: '',
      completed: '',
      id: ''
    }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`/api/todos/${ this.props.match.params.todoId }`);
      this.setState({ todo: data });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>To Do: { this.state.todo.text }</p>
        <p>ID: { this.state.todo.id }</p>
        <p>Completed: { this.state.todo.completed }</p>
        <button onClick={ this.props.history.goBack }>Go Back</button>
      </div>
    );
  }
}

export default TodoCard;