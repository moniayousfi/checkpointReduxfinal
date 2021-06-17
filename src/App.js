import './App.css';
import ListTask from './Components/ListTask';
import Add from './Components/Add';


function App() {
 
  return (
    <div id="myDIV" class="header">
        <h2>My To Do List</h2>
      <Add/>
     <ListTask/>
    </div>
  );
}

export default App;
