import React, { useState } from 'react';
import "./addtask.css"

export default function AddTask({ tasks, setTasks}) {
    const [taskInput, setTaskInput] = useState("");
    const [progress, setProgress] = useState(false);
    const handleReset = () => {
        // event.preventDefault();
        setTaskInput("");
        setProgress(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name : taskInput,
            completed: Boolean(progress)
        }
        setTasks([task, ...tasks]);
        console.log(task);
        handleReset();
    }


  return (
    <section className='addtask'>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTaskInput(e.target.value)} type="text" name='task' id='task' placeholder='task name' autoComplete='off' value={taskInput}/>
            <select onChange={(e) => setProgress(e.target.value)} value={progress} className='btn btn-secondary'>
                <option value={false}>Pending</option>
                <option value={true}>Completed</option>
            </select>
            <button className='submit'>Add Task</button>
            <button onClick={handleReset} className='btn btn-danger' >Reset</button>
        </form>
        <div className='box'>
             <p> Caracteres: {taskInput.length >= 40 ? "Max Limit Reached" : taskInput.length} </p>
        </div>
    </section>
  )
}
