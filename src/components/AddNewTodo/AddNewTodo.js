import React from 'react'
import { TodoContext } from '../TodoContext'
import './AddNewTodo.css'

function AddNewTodo () {

    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onCancel =() => {setOpenModal(false)}

    const onChange =(event) => {
        setNewTodoValue(event.target.value)
    }

    const onSubmit =(event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }


    return(
        <form onSubmit={onSubmit} className="addContainer glassmorphism">
            <h2 className="title"> Create New Task</h2>
            <textarea 
            value = {newTodoValue}
            onChange = {onChange}
            className="addInput glassmorphism " 
            placeholder="Add..."
            ></textarea>
            <button type="submit" className="button add">Add</button>
            <button onClick={onCancel} className="button cancel">Cancele</button>
        </form>
    )
}

export default AddNewTodo