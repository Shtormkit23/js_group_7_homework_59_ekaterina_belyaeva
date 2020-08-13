import React, {useState} from 'react';
import './App.css';
import JokeBox from "./container/JokeBox/JokeBox";
import ToDoList from "./container/ToDoList/ToDoList";

function App() {
  const [componentName, setComponentName] = useState('todo-list');

  let component;
  switch (componentName) {
    case 'JokeBox':
      component =  <JokeBox/>;
      break;
    case 'todo-list':
      component = <ToDoList/>;
      break;
    default:
      component = null;
  }
  return (
      <>
        <div className="App-switch">
          <button onClick={() => setComponentName('todo-list')}>To-Do List</button>
          <button onClick={() => setComponentName('JokeBox')}>JokeBox</button>
        </div>
        {component}
      </>
  )
}

export default App;
