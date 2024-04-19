import React from 'react'

function Navbar() {
  return (
    <div className='bg-blue-950 text-white flex justify-between pl-5 '>
        <span className="span">ITask</span>
        <div className='pr-5 '>
            <button className='mr-3 hover:font-bold'>Home</button>
            <button className='hover:font-bold'>YourTasks</button>
        </div>
    </div>
  )
}

export default Navbar