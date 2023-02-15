import React, { useState } from 'react';
import TaskCards from './TaskCards';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

export default function Tasks({resultTask, tasks, setTasks}) {

    // States


    // Comportement
    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const [show, setShow] = useState(true);

    const styleTask = {
        color: show ? "green" : "#d63031",
    }
    const onOff = show ? "On" : "Off";
    const bkgdBtn = { backgroundColor: show ? "green" : "#d63031" }


    // Rendering
  return (
    <section className={`box ${resultTask}`}>
        <h1>List of Tasks</h1>
        <h2 style={styleTask}>{onOff}</h2>
        <ul className='ul-list'>
            <button style={bkgdBtn} onClick={() => setShow(!show)}>~ Toggle ~</button>
            { show && tasks.map((task) => (
                <TaskCards key={task.id} task={task} handleDelete={handleDelete} />
            )) }
            
        </ul>
    </section>
  )
}
