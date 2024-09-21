import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function FilterButtons({filter, setFilter}){
// console.log(filter);

// Using context for light/dark mode
const {theme, setTheme} = useContext(ThemeContext)
  
    return(
      <>
      {theme == 'light'
       ?
      <div className="flex justify-between rounded-xl mb-8">
        <button onClick={()=> setFilter('All')} className={`${filter == 'All' ? 'shadow-md shadow-purple-950 mr-2 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-purple-600' : 'mr-2 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-purple-600'}`}>All</button>
        <button onClick={()=> setFilter('Completed')} className={`${filter == 'Completed' ? 'shadow-md shadow-purple-950 mr-2 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-full rounded-xl hover:bg-white hover:text-purple-600' : 'mr-2 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-full rounded-xl hover:bg-white hover:text-purple-600'}`}>Completed</button>
        <button onClick={()=> setFilter('InCompleted')} className={`${filter == 'InCompleted' ? 'shadow-md shadow-purple-950 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-purple-600' : 'btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-purple-600'}`}>InCompleted</button>
      </div>
       :
      <div className="flex justify-between rounded-xl mb-8">
        <button onClick={()=> setFilter('All')} className={`${filter == 'All' ? 'shadow-md shadow-gray-300 mr-2 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-purple-600' : 'mr-2 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-purple-600'}`}>All</button>
        <button onClick={()=> setFilter('Completed')} className={`${filter == 'Completed' ? 'shadow-md shadow-gray-300 mr-2 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-full rounded-xl hover:bg-white hover:text-purple-600' : 'mr-2 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-full rounded-xl hover:bg-white hover:text-purple-600'}`}>Completed</button>
        <button onClick={()=> setFilter('InCompleted')} className={`${filter == 'InCompleted' ? 'shadow-md shadow-gray-300 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-purple-600' : 'btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-purple-600'}`}>InCompleted</button>
      </div>
    }
    </>
    )
}

export default FilterButtons;