import React from 'react';
import Counter from '../../containers/Counter';
import TodoForm from '../../containers/TodoForm';
import Navbar from '../Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoCard from '../../containers/TodoCard'

const App = () => (
  <Router>
    <Navbar />
    <Route exact path='/' component={ TodoForm } />
    <Route exact path='/counter' component={ Counter } />
    <Route exact path='/todos' component={ TodoForm } />
    <Route exact path='/todos/:todoId' component={ TodoCard } />
  </Router>
)

export default App;