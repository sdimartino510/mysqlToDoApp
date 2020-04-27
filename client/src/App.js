import React from 'react';
import './App.css';

const RenderListItems = props => {
  return props.items.map((item, index) => {
    return <li key={ index }>{ item }</li>;
  });
}

const Greetings = props => (
  <div>
    <h1>Hello, World!!!</h1>
    <p>Hi! My name is { props.name } { props.lastName }!</p>
    <p>My favorite things to do in quarantine:</p>
      <ul>
        <RenderListItems items={ ['Watch movies', 'Read books', 'Write code'] }/>
      </ul>
    <p>My favorite movies:</p>
      <ul>
        <RenderListItems items={ ['Inception', 'Interstellar', 'Christmas Vacation', 'Silence of the Lambs'] }/>
      </ul>
    <p>My favorite TV shows:</p>
      <ul>
        <RenderListItems items={ ['Lego Masters', 'BattleBots', 'Star Trek'] }/>
      </ul>
  </div>
)

const App = props => (
  <div className="colorBlue" style={{ backgroundColor: 'red' }}>
    <Greetings name={ props.name } lastName = { props.lastName }/>
    {console.log(props)}
  </div>
);

export default App;
