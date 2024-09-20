
function FilterButtons(){
    return(
      <div className="flex justify-between rounded-xl mb-8">
        <button className="btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-purple-600">All</button>
        <button className="btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-full rounded-xl ml-2 hover:bg-white hover:text-purple-600">Completed</button>
        <button className="btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl ml-2 hover:bg-white hover:text-purple-600">InCompleted</button>
      </div>
    )
}

export default FilterButtons;