import { useContext, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons'
import { ThemeContext } from './context/ThemeContext';
import { useEffect } from 'react';

function App() {
const [todo, setTodo] = useState('')
const [todos, setTodos] = useState([])
const [filter, setFilter] = useState('All')  //for tasks all/complete/inComplete
const [editBtn, setEditBtn] = useState(false)

// Using context for light/dark mode
const {theme, setTheme} = useContext(ThemeContext)
// console.log(theme);

// Change body light/dark mode using context
{theme == "light"
  ? 
  document.getElementById('root').style.backgroundColor = '#f9fafb'
  :
  document.getElementById('root').style.backgroundColor = 'dimgrey'
}

// Add todo function
let addBtn = ()=>{
  const allTodosarray = [...todos, {
    todo,
    id: Date.now(),
    completed: false
  }]
  setTodos([...allTodosarray])
  setTodo('')
  setEditBtn(false)
}
// summary: new array bangaya or usmy pichle sary todos agaye or hamny 1 or new todo add kardia. or setTodos main push krdia.

// Delete todo function  //niche map main se id pas ki h. 
let delTodo = (id)=>{
  let del = todos.filter((abc)=> abc.id !== id);
  setTodos([...del])
}

// Edit todo function
let editTodo = (id)=>{
 let editTodo = todos.find((data)=> data.id === id)   //is se edit pe click karne se todo or uski id mili h.
 setTodo(editTodo.todo)     //get todo value & set to input.
 
 let remainingTodos = todos.filter((data) => data.id !== id);
 setTodos(remainingTodos);
 setEditBtn(true)
}

// Click on Todo Function 
let clickTodo = (id)=>{
  // console.log('user Clicked Todo :)', id);
  let allTodosArr = [...todos]
  let todoIndx = allTodosArr.findIndex((data)=> data.id == id)
  allTodosArr[todoIndx].completed = !allTodosArr[todoIndx].completed
  console.log('todo index on Click==>', todoIndx);
  console.log('todos array on Click==>', allTodosArr);
  setTodos([...allTodosArr])
}

// Filter Todo Tasks
let filteredTodos = todos.filter((data)=>{
   if(filter == 'All'){
     return true
   }
  if(filter == 'Completed' && data.completed){
     return true
   }
   else if(filter == 'InCompleted' && !data.completed){
    return true
  }
})
// console.log(filteredTodos);

  return (
    <>   
    {/* Header Start */}
    {theme == 'light' 
     ? 
      // light theme
      <h1 className='header flex justify-between p-3.5 py-3 px-7 bg-white border-b-2 text-3xl font-semibold -mt-4 mb-5 w-full'><span>Todo <span className='text-purple-600'>App</span></span> 
      <button className='btn text-lg font-semibold border-2 border-purple-600 bg-purple-600 text-white w-24 rounded-lg p-0.5 hover:bg-white hover:text-purple-600' 
       onClick={()=>{
       if(theme === 'light'){
        setTheme('Dark')
       }
       else{
        setTheme('light')
       }
      }}>Dark 🌘</button></h1>
     : 
      // dark theme
      <h1 className='header flex justify-between p-3.5 py-3 px-7 bg-black text-white border-b-2 text-3xl font-semibold -mt-4 mb-5 w-full'><span>Todo <span className='text-purple-600'>App</span></span> 
      <button className='btn text-lg font-semibold border-2 border-purple-600 bg-purple-600 text-white w-24 rounded-lg p-0.5 hover:text-purple-600 hover:bg-white' 
       onClick={()=>{
        if(theme === 'light'){
         setTheme('Dark')
        }
        else{
         setTheme('light')
        }
       }}>Light ☀</button></h1> 
    }
   {/* Header End */}

    {/* Todo List Box ⬇ */}
    {theme == 'light'
      ?
       // light theme
       <div className='box'>
          <TodoInput 
          value={todo} 
          onChange={(e)=> setTodo(e.target.value)} 
          onClick={addBtn} 
          showEditBtn={editBtn}
          />

          <FilterButtons 
          filter={filter}
          setFilter={setFilter}
          />
          
          {filteredTodos.map((data)=>(  
           <TodoList 
           todos={data.todo} 
           id={data.id} 
           deleteFunction={()=> delTodo(data.id)}
           editFunction={()=> editTodo(data.id)}
           clickTodo={clickTodo}
           isTodoComplete={data.completed}    //completed true or false value ki help se linethrough wala style kia h.
           />
          ))}
        </div>
      :
       // dark theme
        <div className='boxDark'>
          <TodoInput 
          value={todo} 
          onChange={(e)=> setTodo(e.target.value)} 
          onClick={addBtn} 
          showEditBtn={editBtn}
          />
          
          <FilterButtons 
          filter={filter}
          setFilter={setFilter}
          />
          
          {filteredTodos.map((data)=>(
           <TodoList 
           todos={data.todo} 
           id={data.id} 
           deleteFunction={()=> delTodo(data.id)}
           editFunction={()=> editTodo(data.id)}
           clickTodo={clickTodo}
           isTodoComplete={data.completed}   //completed true or false value ki help se linethrough wala style kia h.
           />
          ))}
        </div>
    }
     {/* Todo List Box ⬆ */}

      {/* Programmer Name */}
      {theme == "light"
        ? 
        <h4 className='mt-3 text-xs text-gray-400 font-bold'>Made By Muhammad Hassan Raza</h4> 
        :
        <h4 className='mt-3 text-xs text-gray-300 font-bold'>Made By Muhammad Hassan Raza</h4> 
      }
    </>
  )
}

export default App
