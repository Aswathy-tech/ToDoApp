import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const[value,setValue] = useState("");
    
    const handleSubmit=(e)=>{
    e.preventDefault();
    if(value){
        addTodo(value);
        setValue('');
    }
    
    }
    
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' type='text' placeholder='What is the task Today?'
         value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}

