import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Todo({todo,togglecompleted,deletetodo,edittodo}){
    console.log(todo);
    console.log("hi");
    return(<div className="Todo">
        <p onClick={()=>{togglecompleted(todo.id)}} className={`${todo.completed?'completed':''}`}>{todo.task}</p>
        <div>
            <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={()=>{edittodo(todo.id)}} />
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=>{deletetodo(todo.id)}}/>
        </div>
    </div>);
}
export default Todo;