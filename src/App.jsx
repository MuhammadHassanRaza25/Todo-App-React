import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Swal from 'sweetalert2'

function App() {
const [todo, setTodo] = useState('')
const [todos, setTodos] = useState([])

// add todo function
let addBtn = ()=>{
  const allTodosarray = [...todos, {
    todo,
    id: Date.now()
  }]
  setTodos([...allTodosarray])
  setTodo('')
}
// summary: new array bangaya or usmy pichle sary todos agaye or hamny 1 or new todo add kardia. or setTodos main push krdia.

// delete todo function  //niche map main se id pas ki h. 
let delTodo = (id)=>{
  let del = todos.filter((abc)=> abc.id !== id);
  setTodos([...del])
}

// edit todo function
let editTodo = ()=>{
const editVal = Swal.fire({
  title: "Edit Your Todo",
  input: "text",
  inputPlaceholder: 'Enter Todo',
  showCancelButton: true,
  confirmButtonColor: "#3a47d5",
  cancelButtonColor: "#d33",
  confirmButtonText: "Edit Todo"
}) 
const editedVal = editVal.value
console.log(editedVal)

}

  return (
    <>   
    {/* Header */}
    <h1 className='header flex justify-between p-3.5 bg-white border-b-2 text-3xl font-semibold -mt-4 mb-5 w-full'><span>Todo <span className='text-purple-600'>App</span></span> <button className='btn text-lg font-semibold border-2 border-purple-600 bg-purple-600 text-white w-24 rounded-lg p-0.5 hover:bg-white hover:text-purple-600'>Dark 🌘</button></h1>

    {/* Todo List Box ⬇ */}
     <div className='box'>
       <TodoInput 
       value={todo} 
       onChange={(e)=> setTodo(e.target.value)} 
       onClick={addBtn} 
       />
       
       {todos.map((data)=>(
        <TodoList 
        todos={data.todo} 
        id={data.id} 
        deleteFunction={()=> delTodo(data.id)}
        editFunction={()=> editTodo()}
        />
       ))}
     </div>
 
      {/* Programmer Name */}
      <h4 className='mt-3 text-xs text-gray-400 font-bold'>Made By Muhammad Hassan Raza</h4> 
    </>
  )
}

export default App
