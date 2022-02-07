import React from 'react'
import './TodoSearch.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { TodoContext } from '../TodoContext'

function TodoSearch () {

    const {state, setState} = React.useContext(TodoContext)

    const onSearchValue = (event) => { 
        setState (event.target.value);
    }

    return (
        <div className="searchContainer glassmorphism">
            <input 
                className="searchInput" 
                placeholder="Search ..."
                value ={state} 
                onChange={onSearchValue} 
            />
            <div className="icon"><AiOutlineSearch/></div>
        </div>
    )
}

export default TodoSearch