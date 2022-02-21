import React, { useState, useEffect } from 'react'


const Counter = () => {
    const [count, setCount] =  useState(0)
    useEffect(() => {
      function onMouseMove(event) {
          if (event.clientX < window.innerWidth/2) {
              setCount(count+1)
          } else {
              setCount(count-1)
          }
      }

    window.addEventListener('mousemove', onMouseMove)    
        }, [])

    return (
        <div className="counter_wrapper">
        <div>{count}
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
        <div>

        </div>
        </div>
    )
}

export default Counter