import React from "react";
import { useState } from "react";
 function Edittodoform({edittodo,task}){
   const [value,setValue]=useState(task.task);
   function handlechange(e){
      setValue(e.target.value);
   }
   function handlesubmit(e){
      e.preventDefault();
      edittodo(value,task.id);
      setValue("");
   }
    return(<form className="Todoform" onSubmit={handlesubmit}>
      <input type="text" className="todoinput" 
      onChange={handlechange} value={value} placeholder="Update Task"/>
      <button type="submit" className="todo-btn" >Update Task</button>
    </form>);
 }
 export default Edittodoform;