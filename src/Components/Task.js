import React from 'react'
import  {deleteTask,doneTask} from '../Redux/Action/Action';
import {useDispatch} from "react-redux";
import Edit from './Edit';

const Task = ({todo}) => {
    
    const dispatch = useDispatch();

    const handlesubmit =()=>{
        dispatch(deleteTask(todo.id));
    }
    const handleDone =()=>{
        dispatch(doneTask(todo.id));
        
    }
    return (
        <div className="list1">
     
              <p className={todo.isDone?'done':null}>
            {todo.description}</p>
            <Edit todo={todo}/>
      <button onClick={handlesubmit}><i class="fa fa-trash" aria-hidden="true"></i>
      </button>
            <button className={todo.isDone?'bdone':'rdone'}   onClick={handleDone}>{todo.isDone?"👌" : "👋"}</button>

           
            
        
           
            </div>
    )
}

export default Task
