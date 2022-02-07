import React from 'react'
import {TodoContext} from '../components/TodoContext/index'
import TodoCounter from '../components/TodoCounter/TodoCounter'
import TodoSearch from '../components/TodoSearch/TodoSearch'
import TodoItem from '../components/TodoItem/TodoItem'
import TodoList from '../components/TodoList/TodoList'
import CreateTodoButton from '../components/CreateTodoButton/CreateTodoButton'
import Modal from '../components/Modal/modal'

import AddNewTodo from '../components/AddNewTodo/AddNewTodo'
import './App.css';

function AppUI () {

    const {
        error,
        loading,
        todosSearch,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);


    return (
    <div className="container">
        <h1 className="title">Your Tasks</h1>
        <TodoCounter />
        <TodoSearch />

        <TodoList> 
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !todosSearch.length) && <p>¡Crea tu primer TODO!</p>}

            {todosSearch.map(todo => ( 
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={()=> deleteTodo(todo.text)}
                />
            ))} 
    </TodoList>

    {!!openModal && (
        <Modal>
            <AddNewTodo/>
        </Modal>
    )}

    <CreateTodoButton setOpenModal={setOpenModal}/> 

    {/*  */}
    </div>
    )
}

export default AppUI