import React from "react";
import Image from "next/image";

function TaskrMobileCard() {
  return (
    <div className="relative bg-gray-100 flex flex-col w-full justify-center items-center p-8">
      <Image
        src={"/TaskrMobileTasks.png"}
        alt="MILO Dashboard"
        width={190}
        height={50}
        />
         <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 flex flex-col items-center justify-center text-white transition-opacity duration-300">
        <p className="text-xl font-semibold">Learn More</p>
        <p className="text-sm">Click to explore Taskr Mobile</p>
      </div>
    </div>
  );
}

export default TaskrMobileCard;
