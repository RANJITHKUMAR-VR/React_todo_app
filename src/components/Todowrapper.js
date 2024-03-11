import React,{useState} from 'react'
import Todoform from "./Todoform"
import {v4 as uuidv4}from 'uuid';
import Todo from "./Todo"
import Edittodoform from './Edittodoform';
uuidv4();
function Todowrapper(){
  const [todos,setTodo]=useState([]);
  function addtodo(todo){
    setTodo([...todos,{id:uuidv4(),task:todo,completed:false,isediting:false}]);
  }
  function togglecompleted(id){
   setTodo( todos.map((todo)=>(
      todo.id===id?{...todo,completed:!todo.completed}:todo
   )))
  }
  function deletetodo(id){
    setTodo(todos.filter((todo)=>(todo.id!==id)))
  }
  function edittodo(id){
    setTodo(todos.map((todo)=>(todo.id===id?{...todo,isediting:!todo.isediting}:todo)))
  }
  console.log(todos);
  function edittask(task,id){
    setTodo(todos.map((todo)=>(todo.id===id?{...todo,task,isediting:!todo.isediting}:todo)))
  }
  return(
  <div className='Todowrapper'>
    <h2>Get Things Done!</h2>
    <Todoform addtodo={addtodo} />
    {
      todos.map((todo,index)=>(
       todo.isediting?(<Edittodoform edittodo={edittask} task={todo}/>):(
        <Todo todo={todo} key={index} togglecompleted={togglecompleted} deletetodo={deletetodo} edittodo={edittodo}/>
      )))
    }
    </div>);
}
export default Todowrapper;