import React from 'react'
import { useState } from 'react'
const Todos = () => {
const [tasks, setTasks] = useState(['Eat breakfast', 'Watch youtube', 'Complete unfinished milestones'])
const [newTask, setNewTask] = useState('')
    
function handleInputChange(event){
setNewTask(event.target.value)
}

function addTask(){
  if(newTask.trim() !== ''){ //trim removes any whitespace ie if someone hasnt added any new task and has clicked add task
    setTasks( t => [...t, newTask])
    setNewTask('')
  }


}

function deleteTask(index){
const updatedTasks = tasks.filter((_, i) => i !== index)
setTasks(updatedTasks)
}

function moveTaskUp(index){
if(index > 0){
  const updatedTasks = [...tasks];
[updatedTasks[index], updatedTasks[index-1]] = 
[updatedTasks[index-1], updatedTasks[index]];
setTasks(updatedTasks)
}
} 

function moveTaskDown(index){
  if(index < tasks.length-1){
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index+1]] = 
    [updatedTasks[index+1], updatedTasks[index]];
    setTasks(updatedTasks)
  }
}
  return (

    <div className='todo-list'>
<h1>To-Do-List</h1>
<div>
  <input type='text' placeholder='Enter a task ...' value={newTask} onChange={handleInputChange}
  />
    <button className='add-btn' onClick={addTask}>Add Task</button>
</div>

<ol>
{tasks.map((task, index)=> 
<li key={index}><span className='text'>{task}</span>
<button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>

<button className='move-btn' onClick={() =>moveTaskUp(index)}>Up</button>

<button className='move-btn' onClick={() =>moveTaskDown(index)}>Down</button>


</li>)}



</ol>

    </div>
  )
}

export default Todos