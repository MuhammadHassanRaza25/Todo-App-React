import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function TodoList({ todos, id, deleteFunction, editFunction, clickTodo, isTodoComplete }){
// console.log('Todo Completed value=>', isTodoComplete);
  
// Using context for light/dark mode
const {theme, setTheme} = useContext(ThemeContext)

  return(
    <>
    {theme == 'light' ?
    // light theme
    <div key={id} className="listBox mt-5 flex justify-between items-center px-3 py-2 bg-gray-100 border-2 border-gray-100 rounded-xl">
        <h1 style={{textDecoration : isTodoComplete && 'line-through' }} 
        className="todo font-semibold text-xl flex-1 text-start" 
        onClick={()=> clickTodo(id)} >{todos}</h1>
        
        <span>
          <button className="btn font-semibold border-2 border-purple-600 bg-purple-600 text-white w-16 rounded-lg p-1 mr-2 hover:bg-white hover:text-purple-600"
          onClick={editFunction}>Edit</button>
          <button className="btn font-semibold border-2 border-purple-600 bg-purple-600 text-white w-20 rounded-lg p-1 hover:bg-white hover:text-purple-600"
          onClick={deleteFunction}>Delete</button>
        </span>
    </div>
    :
    // dark theme
    <div key={id} className="listBox darkList mt-6 flex justify-between items-center px-3 py-2 bg-black text-white rounded-xl">
        <h1 style={{textDecoration : isTodoComplete && 'line-through' }}
        className="todo font-semibold text-xl flex-1 text-start" 
        onClick={()=> clickTodo(id)}>{todos}</h1>
        
        <span>
          <button className="btn font-semibold border-2 border-purple-600 bg-purple-600 text-white w-16 rounded-lg p-1 mr-2 hover:bg-white hover:text-purple-600"
          onClick={editFunction}>Edit</button>
          <button className="btn font-semibold border-2 border-purple-600 bg-purple-600 text-white w-20 rounded-lg p-1 hover:bg-white hover:text-purple-600"
          onClick={deleteFunction}>Delete</button>
        </span>
    </div>}
    </>
  )
}

export default TodoList;