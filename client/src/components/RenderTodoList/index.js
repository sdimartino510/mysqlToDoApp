import React from 'react';

const RenderTodoList = props => {
  const renderTodoListItems = () => {
    if (props.items.length === 0) {
      return <h1>Nothing to do yet!</h1>
    } else {
      return props.items.map(todo => {
      return <li key={todo.id} style={{ color: todo.completed ? 'green' : 'red' }}>{ todo.text }</li>
      });
    }
  }

  return (
    <ul>
        { renderTodoListItems() }
    </ul>
  )
}

export default RenderTodoList;