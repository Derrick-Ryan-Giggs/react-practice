import React from 'react'
import { useState } from 'react'
const Updater = () => {
    const [count, setCount] = useState(0)
    function Increment(){
        setCount((c => c+1))
        setCount((c => c +1))
         setCount((c => c +1))
    }
    function Decrement(){
        setCount((c => c-1))
        setCount((c => c-1))
           setCount((c => c-1))
    }
    function Reset(){
        setCount(0)
    }
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default Updater