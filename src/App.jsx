import { useState , useRef } from 'react'


function App() {
  const [todo , setTodo ] = useState([])
  const todoValue =useRef()
//  render todo ----->>>

  const addTodo =(event)=>{
    event.preventDefault()
    if (todoValue.current.value) {
    todo.push(todoValue.current.value)
   setTodo([...todo])
   console.log(todo);
   todoValue.current.value=""}
   else{
    alert('please Enter todo')
   }

  }
//  delete todo ----->>>

  const deleteTodo=(index)=>{
    todo.splice(index,1)
   console.log('delete',index);
    setTodo([...todo])
  }
//  edit todo ----->>>

  const editTodo=(index)=>{
  const upDate=prompt(todo,'edit here')
    todo.splice(index,1,upDate)
   console.log('edit',index);
    setTodo([...todo])
  }

  return (
    <>
    <div class='container  bg-primary text-center mt-5 p-2'>
    <h1 class='text-white'>Todo App</h1>
    <form onSubmit={addTodo}>
    <div class="input-group mb-3   ">
      <input type="text" id="taskInput" class="form-control" placeholder="Enter a task" ref={todoValue} aria-label="Enter a task"/>
      </div>
    <button type="button" onClick={addTodo} class="btn btn-danger">Add Todo</button>
    </form>
     </div>
     
    <ul class='p-2 m-5 '>
      {todo.map((item,index)=>{
        return <div key={index} class="task-item d-flex justify-content-between align-items-center mb-2 p-4 mt-2 m-5 border rounded">
        <li>{item}</li>
        <div class="btn-group ">
          <button class="btn btn-danger btn-sm mr-2" onClick={()=>deleteTodo(index)}>Delete</button>
          <button class="btn btn-warning btn-sm" onClick={()=>editTodo(index)}>edit</button>
        </div>
      </div>
      })}
    </ul>
   </>
  )
}

export default App
