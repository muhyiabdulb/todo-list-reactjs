import './Todo.css'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'
import { useState } from 'react'

const Todo = () => {
    // nampung data todo
    const [getTodos, setTodos] = useState([
        // { id: 1, title: 'Makan' },
        // { id: 2, title: 'Minum' },
        // { id: 3, title: 'Lari' },
    ])

    // buat todo
    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }

    function deleteTodo(index){
        console.log(index)
        setTodos(prevState => prevState.filter((_, i) => i !== index))
        console.log('ini dihapus' + [index])
    }

    return(
        <div>
            <h2>Todo List</h2>
            {/* component create todo */}
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            {/* component toto list */}
            <TodoList dataTodos={getTodos} click={deleteTodo}/>
        </div>
    )
}

export default Todo