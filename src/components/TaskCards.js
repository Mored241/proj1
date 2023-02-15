import React from 'react'

export default function TaskCards({task, handleDelete}) {
  return (
    <>
        <li className={task.completed ? "list1 greenTrue" : "list1 redFalse"} >
              <span > {task.id} --  -- {task.name} </span>
              <button onClick={() => handleDelete(task.id)} className="danger ">Delete</button>
        </li>
    </>
  )
}
