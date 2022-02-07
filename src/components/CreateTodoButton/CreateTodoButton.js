import React from 'react'
import { TodoContext } from '../TodoContext'
import './CreateTodoButton.css'

function CreateTodoButton () {
    const {openModal, setOpenModal} = React.useContext(TodoContext)
    const onClickButton = () => {
        !openModal ? setOpenModal(true) : setOpenModal(false)
        }

    return (
        <button onClick={onClickButton} className="button addTodo">
            +
        </button>
    )
}

export default CreateTodoButton