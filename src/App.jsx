import './App.css';
import React from'react'
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

// const App = () => {
//   return (
//     <div className="App">
//       <Todo />
//     </div>
//   )
// }

export default App;
