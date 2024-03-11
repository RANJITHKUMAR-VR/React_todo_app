import React from "react";
import { useState } from "react";
 function Todoform({addtodo}){
   const [value,setValue]=useState("");
   function handlechange(e){
      setValue(e.target.value);
   }
   function handlesubmit(e){
      e.preventDefault();
      if(value){
      addtodo(value);
      }
      else{
         alert("Add your task");
      }
      setValue("");
   }
    return(<form className="Todoform" onSubmit={handlesubmit}>
      <input type="text" className="todoinput" placeholder="What is the task today" 
      onChange={handlechange} value={value}/>
      <button type="submit" className="todo-btn" >Add Task</button>
    </form>);
 }
 export default Todoform;