import React, {useState} from 'react'
import Button from '@material-ui/core/Button'

export default function NewTaskForm({id, addItemCallback}){
    const [task, setTaskName] = useState({text:''})

    function handleTaskNameChange(e){
        setTaskName({...task, text : e.target.value, key: new Date(), isDone:false});
    }
    
    function handleOnSubmit(e){
        addItemCallback(task)
        console.log(task)
        setTaskName({text:''});
        e.preventDefault();
    }

    return(
        <form id={id} onSubmit={handleOnSubmit}>
            <input
                placeholder = "New Task"
                value = {task.text}
                onChange = {handleTaskNameChange}
            />
            <Button type="submit" variant="contained">Add</Button>
        </form>
    );
}