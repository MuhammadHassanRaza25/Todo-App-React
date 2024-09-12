import './App.css'
import TodoInput from './components/todoInput'

function App() {

  return (
    <>      
    <h1 className='header flex justify-between p-3.5 bg-white border-b-2 text-3xl font-semibold -mt-4 mb-5 w-full'><span>Todo <span className='text-purple-600'>App</span></span> <button className='btn text-lg font-semibold border-2 border-purple-600 bg-purple-600 text-white w-24 rounded-lg p-0.5 hover:bg-white hover:text-purple-600'>Dark 🌘</button></h1>
    <div className='box'>
      
      <TodoInput/>


      </div>
      <h4 className='mt-3 text-xs text-gray-400 font-bold'>Made By Muhammad Hassan Raza</h4> 
    </>
  )
}

export default App
