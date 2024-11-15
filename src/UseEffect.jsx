import React from 'react'
import { useState,useEffect } from 'react'
const UseEffect = () => {
const [count,setCount] = useState(0)
const [color, setColor] = useState('green')
useEffect( () => {
    document.title = ` count :${count} ${color}`;

return{
    //perform some cleanup code
}

}, [count, color])

function addCount(){
    setCount(c=> c+1) //updater function, add 1 to previous state of count
}
function SubstractCount(){
    setCount(c=> c-1) //updater function, add 1 to previous state of count
}

function handleChangeColor(){
    setColor(c=> c === 'green' ?'red' : 'green')
}
  return (
    <div>
<p style={{
    color: color
}}>Count : {count}</p>
<button  onClick={addCount}>Add</button>
<button  onClick={SubstractCount}>Substract</button> <br />
<button onClick={handleChangeColor}>Change Color</button>

    </div>
  )
}

export default UseEffect