import './Todo.css'
import React from 'react'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getTodos: [],
        }
    }

    eventCreateTodo = (todo) => {
        this.setState({
            getTodos: this.state.getTodos.concat(todo)
        })
        console.log(this.state.getTodos)
    }

    deleteTodo = (index) => {
        console.log("ini index" + index)
        var array = [...this.state.getTodos] // make a separate copy of the array
        console.log(array)
        if (index !== -1) {
            array.splice(index, 1)
            this.setState({getTodos: array})
        }
    }

    render() {
        return(
            <div>
                <h2>Todo List</h2>
                <TodoCreate onCreateTodo={this.eventCreateTodo} />
                <TodoList dataTodos={this.state.getTodos} click={this.deleteTodo} />
            </div>
        )
    }
}

export default Todo