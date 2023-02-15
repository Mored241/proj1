import React, { useState } from 'react';
import AddTask from './AddTask';
import BoxCard from './BoxCard';
import './main.css'
import Tasks from './Tasks';


export default function Main() {

  const [tasks, setTasks] = useState([]);


  return (
    <main>
        <div className='mt-5'>.</div>
        <div className='box alert bg-light text-center m-5'>
            
            <div className=''>
            <AddTask  tasks={tasks} setTasks={setTasks}/>
            <hr/>
            <Tasks resultTask="mx-5" tasks={tasks} setTasks={setTasks} />
            </div>
            <hr/>
        </div>

        <BoxCard result="alert bg-light text-center mx-auto col-6">
              <h4 className='title'>Lorem ipsum dolor sit amet consectetur</h4>
              <p className='description'>Lorem ipsum dolor sit amet consectetur</p>
        </BoxCard>

    </main>
  )
}
