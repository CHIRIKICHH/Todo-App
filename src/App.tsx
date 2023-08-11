import { Component, useEffect, useState } from "react";
import "./App.css";
import { Task } from "./components/Tasks";
import { Category } from "./components/Categories";
import { useTasksAndCategories } from "./hooks/tasks";
import { Loading } from "./components/Loading";

function App() {

  const { loading, error, categories, tasks } = useTasksAndCategories()
  const [CurrentCategory, setCurrentCategory] = useState(categories.find(item => item.name == "All"));
  //const handleOnChange = (event) => {
  //   setNewTaskName(event.target.value);
  // }
  // const handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     //AddNewTask(newTaskName);
  //   }
  //}
  return (
    <div className="h-screen flex items-center ">
      {loading && <Loading/>}
      <div className="container bg-white flex flex-row m-auto rounded-lg shadow-xl max-w-[60rem] min-h-[30rem]">
        <div className="flex flex-col items-center space-y-3 justify-center m-y-[10rem] min-h-[100%] min-w-[10rem] border-solid border-r-2 ">
          {categories.map(item => <Category category={item} key={item.id} />)}
        </div>
        <div className="flex flex-col m-10 min-h-[100%] space-y-7 min-w-[45rem]">
          <div className="text-3xl font-bold">{CurrentCategory?.name} Tasks</div>
          <input
            className=" bg-[#F3F3F3] p-5 border-none rounded-lg h-8 placeholder-gray-300"
            placeholder={`Add a new task insdie '${CurrentCategory?.name}' category`}
          // value={newTaskName}
          // onChange={handleOnChange}
          // onKeyDown={handleKeyDown}
          ></input>
          <div>
            <ul className="space-y-2 flex flex-col text-[#5A5A5A] font-medium">
              {tasks.map(item => <Task task={item} key={item.id} />)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
