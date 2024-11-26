import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import {v4 as uuidv4} from 'uuid';
import { EditTodoForm } from './EditTodoForm';
 uuidv4();
export const TodoWrapper = () => {
  const[todos, SetTodos] = useState([]);

  const addTodo = todo =>{
    SetTodos([...todos,{id:uuidv4(),task:todo,completed:false,
        isediting:false
    }])
    console.log(todos);
  }

  const deleteTodo =(id)=>{
   SetTodos(todos.filter((todo) => todo.id !== id)) 
  }

  const toogleComplete =(id)=>{
    SetTodos(
        todos.map((todo)=>
        todo.id === id? {...todo,completed:!todo.completed}:todo
        )
    )
  }

  const editTodo =(id)=>{
    SetTodos(
        todos.map((todo)=>
    todo.id ===id ?{...todo,isediting:!todo.isediting}:todo
        
    ))

  }

  const editTask = (task,id)=>{
    SetTodos(
        todos.map((todo)=>
            todo.id ===id?{...todo,task,isediting:!todo.isediting}:todo
        )
    )
  }  

 return (
    <div className='TodoWrapper'>
    <h1>Get Things Done !</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo,index) =>todo.isediting?(<EditTodoForm task={todo} editTask={editTask}/>): (
            <Todo task={todo} key={index} 
                deleteTodo={deleteTodo}
                toogleComplete={ toogleComplete}
                editTodo={editTodo}
            />))}
    </div>
  )
}
