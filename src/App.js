import React,{useState} from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList';




function App() {

  const [tasks, setItems] = useState([])

  function addItem(task){
    if(task.text !== ""){
      setItems([...tasks, task])
    }
    console.log(tasks)
  }

  function deleteItem(taskKey){
    const filteredTasks = tasks.filter(task => task.key !== taskKey);
    console.log("deleted", filteredTasks)
    setItems(filteredTasks)
  }

  function onItemCompleted(taskKey){
    const updatedTasks = tasks.map(task => {
      if(task.key === taskKey){
        task.isDone = !task.isDone;
      }
      return task
    });
    console.log("updated", updatedTasks)
    setItems(updatedTasks)
  }

  function onTaskNameChanged(newTaskName, taskKey){
    const updatedTasks = tasks.map(task => {
      if(task.key === taskKey){
        task.text = newTaskName
      }
      return task
    });
    setItems(updatedTasks)
  }

  return (
    <div className = "App">
      <header>
        <NewTaskForm id="new-task-form" addItemCallback = {addItem}/>
      </header>
      <TaskList tasks = {tasks} 
      deleteTaskCallback = {deleteItem}
      taskCompleteCallback = {onItemCompleted}
      nameChangeCallback = {onTaskNameChanged}/>
    </div>
  );
}

export default App;
