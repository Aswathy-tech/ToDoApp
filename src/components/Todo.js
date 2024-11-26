import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";


export const Todo = ({task, deleteTodo, toogleComplete,editTodo}) => {
    
  return (
    <div className='Todo' > 
    
    <p onClick={()=> toogleComplete(task.id)} style={{textDecoration:task.completed?'line-through':'none'}}>{task.task}</p>
        
    <MdEdit className="edit-icon" onClick={()=>editTodo(task.id)}/>
    <MdDeleteForever className="delete-icon" onClick={()=>deleteTodo(task.id)} />
        
    </div>
  )
}
