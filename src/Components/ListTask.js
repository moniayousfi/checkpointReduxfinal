import {  useSelector } from 'react-redux';
import Task from './Task';
import {useState} from "react";
import {useDispatch}from "react-redux";
import {filterTask} from '../Redux/Action/Action'


const ListTask = () => {

const todos = useSelector(state => state.todos);

console.log(todos);
const dispatch=useDispatch();
const filteritm = useSelector(state => state.filteritems)
console.log(filteritm) ;
const[filterText,setFilterText]=useState(filteritm);

const handleFilter=()=>{
  dispatch(filterTask(filterText));
  setFilterText("all");
 }
const handleFilterdone=()=>{
  dispatch(filterTask(filterText));
  setFilterText("done");
 }
 const handleFilterundone=()=>{
  dispatch(filterTask(filterText));
  setFilterText("notdone");
 }
 const newList = () => {
  if (filterText === "all") {
    return todos;
  }
  if (filterText === "done") {
    return todos.filter((el) => el.isDone === true);
  }
  if (filterText === "notdone") {
    return todos.filter((el) => el.isDone === false);
  }
};


  let tab =newList();
  console.log(tab);
  

      
 return (
   
      <ul className="todo-list">
       
      
      
      {tab && tab.length
        ? tab.map((todo, index) => {
            return <Task key={`todo-${todo.id}`} todo={todo} />;
          })
        :
       
       <h5>yay noTodos</h5> 
        }

   <button onClick={handleFilter}>All</button>
   <button  onClick={handleFilterdone}>Done</button>
   <button onClick={handleFilterundone}>Undone</button>
    </ul>
    )
}

export default ListTask
