import { useState } from 'react'
import  './TodoCreate.css'

const TodoCreate = (props) => {
    // getInputTodo buat ngambil data
    // setInputTodo atur data
    const [getInputTodo, setInputTodo] = useState('')

    // validasi form
    const [validation, setValidation] = useState(false)

    // button data baru
    const handleSubmit = (event) => {
        event.preventDefault()
        // nampung data baru
        if(getInputTodo === '') {
            console.log('ini kosong')
            setValidation(true)
        } else {
            var now = new Date()
            const newTodo = {
                id: Math.floor(Math.random() * 100) + 1,
                title: getInputTodo,
                date: now.getDate() + " " + now.toLocaleString('default', { month: 'long' }) + " " + now.getFullYear() + " " + now.getHours() + "." + now.getMinutes(),
            }

            // masukkan data baru
            props.onCreateTodo(newTodo)
            // kosongkan text
            setInputTodo('')
            // console.log(newTodo)
        }
      
    }

    // handle input todo
    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
        setValidation(false)
        console.log(getInputTodo)
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className={validation ? 'text-field bg' : 'text-field'} value={getInputTodo} onChange={handleInputTodo} />  { validation ? <p>Require</p> : '' }
           
            <button className="button" type="submit">Add</button>
        </form>
    )

}

export default TodoCreate