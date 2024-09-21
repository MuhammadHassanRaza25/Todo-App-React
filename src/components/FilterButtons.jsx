
function FilterButtons({filter, setFilter}){
  // console.log(filter);
  
    return(
      <div className="flex justify-between rounded-xl mb-8">
        <button onClick={()=> setFilter('All')} className={`${filter == 'All' ? 'btn border-2 border-purple-600 font-semibold text-lg p-2 w-96 rounded-xl bg-white text-purple-600 mr-2' : 'mr-2 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-purple-600'}`}>All</button>
        <button onClick={()=> setFilter('Completed')} className={`${filter == 'Completed' ? 'btn border-2 border-purple-600 font-semibold text-lg p-2 rounded-xl bg-white text-purple-600 mr-2 w-full' : 'mr-2 btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-full rounded-xl hover:bg-white hover:text-purple-600'}`}>Completed</button>
        <button onClick={()=> setFilter('InCompleted')} className={`${filter == 'InCompleted' ? 'btn border-2 border-purple-600 font-semibold text-lg p-2 w-96 rounded-xl bg-white text-purple-600' : 'btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-purple-600'}`}>InCompleted</button>
        {/* <button className="btn border-2 border-purple-600 font-semibold text-lg bg-purple-600 text-white p-2 w-96 rounded-xl ml-2 hover:bg-white hover:text-purple-600">InCompleted</button> */}
      </div>
    )
}

export default FilterButtons;