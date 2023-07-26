import React from 'react'

function TaskrWebCard() {
  return (
    
    <div className="relative bg-taskr-web-card bg-cover bg-no-repeat bg-center w-full h-full">
     <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 flex flex-col items-center justify-center text-white transition-opacity duration-300">
        <p className="text-xl font-semibold">Learn More</p>
        <p className="text-sm">Click to explore Taskr</p>
      </div>
    </div>
    
  )
}

export default TaskrWebCard