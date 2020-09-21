import React, {useState} from 'react';

function ToDoItem(props){
    let [completed, setCompleted] = useState(props.completed);

    return (
        <div className="todo-item">
            <input type="checkbox" checked={completed} onChange={() => setCompleted( prevCompleted => !prevCompleted ) }/>
            <p style={completed ? {color: 'grey', textDecoration: 'line-through'} : {}}>{props.text}</p>
        </div>
    );
}

export default ToDoItem;