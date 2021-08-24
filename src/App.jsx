import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './components/todo/Todo';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Todo />
      </div>
    )
  }
}

export default App;
