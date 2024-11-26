import React,{useState} from 'react'

export const EditTodoForm = ({editTask,task}) => {
    const[value,setValue] = useState(task.task);
    
    const handleSubmit=(e)=>{
    e.preventDefault();
    if(value){
        editTask(value,task.id);
        setValue('');
    }
    
    }
    
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' type='text' placeholder='update your task'
         value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>update</button>
    </form>
  )
}