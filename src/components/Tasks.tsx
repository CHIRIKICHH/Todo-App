import { useState } from "react";
import { ITask } from "../models";

interface TaskProps{
    task:ITask
}


export function Task({task}: TaskProps) {
    const[taskIsDone, setIsDone] =  useState(false)
    const btnChangeStateClassName : string =  taskIsDone ? "bg-[#EA5959]" : "bg-none"
    const taskNameChangeStateClassName : string = taskIsDone ? "line-through" : ""

    return (
      <div className="inline-flex space-x-3">
        <button className={`w-6 h-6 border-2 border-solid rounded hover:bg-[#EA5959] border-[#EA5959] ${btnChangeStateClassName}`}
        onClick={() => setIsDone(prev => !prev)} />
        <li className={taskNameChangeStateClassName}>{task.name}</li>
        <div className={"rounded bg-[#EA5959] px-3 font-normal pt-1 items-center text-white text-xs"}>
          {task.category.name}
        </div>
      </div>
      
    );
  }
