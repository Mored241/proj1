import React, { useState } from 'react';

export default function BoxCard({result, children}) {

    const [show, setShow] = useState(true);

  return (
    <>
    {show ? <div className={`box ${result}`}>
          {children}
          <button type='button' className='trigger btn btn-primary btn-center' onClick={() => setShow(!show)} > {show ? "Hide" : "Show"} </button>
      </div> : ""
    }
    </>
  )
}
