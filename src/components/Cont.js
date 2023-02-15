import React, { useState } from 'react'

export default function Cont() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

  return (
    <div>
        <div>
              <h2>{count}</h2>
              <button onClick={handleCount} className='add'>Increment</button>
              <button onClick={() => setCount(count - 1)} className='sub'>Decrement</button>
              <br/>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
    </div>
  )
}
