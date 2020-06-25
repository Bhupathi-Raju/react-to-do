import React from 'react'
import '../styling/TaskList.css'
import Delete from '@material-ui/icons/Delete'

export default function TaskList({tasks, deleteTaskCallback, taskCompleteCallback, nameChangeCallback}){

    function deleteTask(taskKey){
        deleteTaskCallback(taskKey)
    }

    function onTaskComplete(taskKey){
        taskCompleteCallback(taskKey)
    }

    function onTaskNameChange(e, taskKey){
        nameChangeCallback(e.target.value, taskKey)
    }

    return(tasks.map(taskItem => {
        return (
        <div 
        task = {taskItem} 
        className ="task" 
        key = {taskItem.key}>
            <p><input 
            type="text"
             id = {taskItem.key} 
             value={taskItem.text}
             onChange={(e) => onTaskNameChange(e, taskItem.key)}/>
            <span id="delete">
                <Delete onClick={() => deleteTask(taskItem.key)}/>
            </span>
            <span id="checkbox">
                <input type="checkbox" name="Done"
                onChange={() => onTaskComplete(taskItem.key)}
                checked = {taskItem.isDone}
                />
            </span> 
            </p>
           
        </div>
        );
                }));
}