function TodoInput(){
return(
    <>
    <div className="flex">
       <input className="todoInput font-bold p-2.5 rounded-xl focus:border-purple-600 hover:border-purple-600 hover:text-purple-600 focus:placeholder:text-purple-600" type="text" placeholder="Enter Your Todo"/>
       <button className="btn border-2 border-purple-600 font-semibold text-xl bg-purple-600 text-white p-2 w-28 rounded-xl ml-2 hover:bg-white hover:text-purple-600">Add</button>
    </div>
    </>
)
}

export default TodoInput;