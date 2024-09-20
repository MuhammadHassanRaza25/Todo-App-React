import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function TodoInput({onChange, onClick, value, showEditBtn}){
    
//using context
const {theme, setTheme} = useContext(ThemeContext)

return(
    <>
    {theme == 'light'
      ?
       // light theme
       <div className="flex mb-6">
         <input className="todoInput font-bold p-2.5 rounded-xl focus:border-purple-600 hover:border-purple-600 focus:placeholder:text-purple-600" 
          type="text" value={value} placeholder="Enter Your Todo" onChange={onChange}/>
          <button disabled={value === ''} className="btn border-2 border-purple-600 font-semibold text-xl bg-purple-600 text-white p-2 w-28 rounded-xl ml-2 hover:bg-white hover:text-purple-600" onClick={onClick}>{showEditBtn?"Edit" : "Add"}</button>
       </div>
      :
       // dark theme
       <div className="flex mb-6">
          <input className="todoInput bg-black text-white font-bold p-2.5 rounded-xl focus:border-purple-600 hover:border-purple-600 focus:placeholder:text-purple-600 placeholder:text-gray-300" 
           type="text" value={value} placeholder="Enter Your Todo" onChange={onChange}/>
          <button disabled={value === ''} className="btn border-2 border-purple-600 font-semibold text-xl bg-purple-600 text-white p-2 w-28 rounded-xl ml-2 hover:bg-white hover:text-purple-600" onClick={onClick}>{showEditBtn?"Edit" : "Add"}</button>
       </div>
       }
    </>
)
}

export default TodoInput;