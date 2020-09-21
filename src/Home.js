import React from "react"

import ToDoItem from './ToDoItem'
import todosData from './todosData'

function Home() {
    const todos = todosData.map( todo => <ToDoItem key={todo.id} text={todo.text} completed={todo.completed}/>);
    return (
        <div className="todo-list">
            {todos}
        </div>
    )
}

export default Home