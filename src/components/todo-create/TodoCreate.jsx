import React from 'react'
import  './TodoCreate.css'

class TodoCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getInputTodo: '',
            validation: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.getInputTodo === '') {
            console.log('ini kosong')
            this.setState({
                validation: true
            })
        } else {
            let now = new Date()
            var newTodo = {
                id: Math.floor(Math.random() * 100) + 1,
                title: this.state.getInputTodo,
                date: now.getDate() + " " + now.toLocaleString('default', { month: 'long' }) + " " + now.getFullYear() + " " + now.getHours() + "." + now.getMinutes(),
            }
            console.log(newTodo)
            // masukkan data baru
            this.props.onCreateTodo(newTodo)
            // kosongkan text
            this.setState({
                getInputTodo: ''
            })
        }
    }

    handleInputTodo = (event) => {
        this.setState({
            getInputTodo: event.target.value,
            validation: false
        })
        console.log(this.state.getInputTodo)
    }

    render() {
        return(
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" className={this.state.validation ? 'text-field bg' : 'text-field'} value={this.state.getInputTodo} onChange={this.handleInputTodo} />  { this.state.validation ? <p>Require</p> : '' }
            
                <button className="button" type="submit">Add</button>
            </form> 
        )
    }
}

export default TodoCreate