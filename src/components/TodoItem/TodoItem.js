import React from 'react'
import './TodoItem.css'
import {AiOutlineClose, AiOutlineCheck} from 'react-icons/ai'

function TodoItem (props){

    return (
    <li className="itemContainer glassmorphism">
        <span onClick={props.onDelete} className="icon iconDelete"> 
            <AiOutlineClose/>
        </span>
        <p className={`todo ${ props.completed && 'complete'}`}>{props.text}</p>
        <span onClick={props.onComplete}  className={`icon iconCheck ${ props.completed && 'iconCheck-active'}`}> 
            <AiOutlineCheck/>
        </span>
    </li>
    )
}

export default TodoItem