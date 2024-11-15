import React from 'react'
import { useState } from 'react'
const Counter = () => {
const[count, setCount] = useState(0)

const increment = ()=> {
    setCount(count+1)
}
const decrement = ()=> {
    setCount(count-1)
}
const reset = ()=> {
    setCount(0)
}
  return (
    <div className='counter-container'>
<p className='count-display'>{count}</p>
<button onClick={decrement} className='counter-btn'>Decrement</button>
<button onClick={reset} className='counter-btn'>Reset</button>
<button onClick={increment} className='counter-btn'>Increment</button>
    </div>
  )
}

export default Counter