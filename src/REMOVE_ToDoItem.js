import React, {useState} from 'react';
import {Alert} from 'react-bootstrap';

function ToDoItem(props){
    let [completed, setCompleted] = useState(props.completed);

    return (
        <Alert variant={ completed ? "secondary" : "primary" } className="todo-item">
            <input type="checkbox" checked={completed} onChange={() => setCompleted( prevCompleted => !prevCompleted ) }/>
            <span style={completed ? {color: 'grey', textDecoration: 'line-through'} : {}}>{props.text}</span>
        </Alert>
    );
}

export default ToDoItem;