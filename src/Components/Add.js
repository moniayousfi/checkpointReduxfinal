import React, { useState } from "react";
import {useDispatch}from "react-redux";
import {addTask} from '../Redux/Action/Action'
const Add = () => {
  const [newTask,setNewTask]=useState({})
  const dispatch = useDispatch();
  const submitTask=(e)=>{
  e.preventDefault();
    if (newTask.description !='')
  {
      dispatch(addTask(newTask));
     
     setNewTask({
     
      description:""
     })
  
  }
  else {
    alert("you should enter a valid description!");
  }

 
    }
    const handleChange=(e)=>{
    e.preventDefault();
      setNewTask({
        ...newTask,
        description: e.target.value,
        id:Math.random(),
        isDone:false
      });
    
    };
    
  return (
    <div>
      <form>
        <div className="add" >
        <input  id="myInput" type="text" name="description" onChange={handleChange} placeholder="Enter Description" value={newTask.description|| ''}/>
      <button className="addBtn" onClick={submitTask}><i class="fa fa-plus" aria-hidden="true"></i></button>
      </div>
      </form>
    </div>
  )
}

export default Add
