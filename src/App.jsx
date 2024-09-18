import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
const [todo, setTodo] = useState('')
const [todos, setTodos] = useState([])
const [editBtn, setEditBtn] = useState(false)

// add todo function
let addBtn = ()=>{
  const allTodosarray = [...todos, {
    todo,
    id: Date.now()
  }]
  setTodos([...allTodosarray])
  setTodo('')
  setEditBtn(false)
}
// summary: new array bangaya or usmy pichle sary todos agaye or hamny 1 or new todo add kardia. or setTodos main push krdia.

// delete todo function  //niche map main se id pas ki h. 
let delTodo = (id)=>{
  let del = todos.filter((abc)=> abc.id !== id);
  setTodos([...del])
}

// edit todo function
let editTodo = (id)=>{
 let editTodo = todos.find((data)=> data.id === id)   //is se edit pe click karne se todo or uski id mili h.
 setTodo(editTodo.todo)         //get todo value & set to input.
 
 let remainingTodos = todos.filter((data) => data.id !== id);
 setTodos(remainingTodos);
 setEditBtn(true)
}
// console.log(editBtn);

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
       showEditBtn={editBtn}
       />
       
       {todos.map((data)=>(
        <TodoList 
        todos={data.todo} 
        id={data.id} 
        deleteFunction={()=> delTodo(data.id)}
        editFunction={()=> editTodo(data.id)}
        />
       ))}
     </div>
 
      {/* Programmer Name */}
      <h4 className='mt-3 text-xs text-gray-400 font-bold'>Made By Muhammad Hassan Raza</h4> 
    </>
  )
}

export default App
