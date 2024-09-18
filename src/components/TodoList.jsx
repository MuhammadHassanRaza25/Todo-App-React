function TodoList({ todos, id, deleteFunction, editFunction }){
// console.log(id);

    return(
    <>
    <div key={id} className="mt-3 flex justify-between items-center px-3 py-2 bg-gray-100 rounded-md">
        <h1 className="font-semibold text-xl flex-1 text-start">{todos}</h1>
        
        <span>
          <button className="btn font-semibold border-2 border-purple-600 bg-purple-600 text-white w-16 rounded-lg p-1 mr-2 hover:bg-white hover:text-purple-600"
          onClick={editFunction}>Edit</button>
          <button className="btn font-semibold border-2 border-purple-600 bg-purple-600 text-white w-20 rounded-lg p-1 hover:bg-white hover:text-purple-600"
          onClick={deleteFunction}>Delete</button>
        </span>
    </div>
    </>
    )
}

export default TodoList;