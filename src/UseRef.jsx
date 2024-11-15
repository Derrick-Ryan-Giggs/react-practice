import React from 'react'
import { useState, useEffect, useRef } from 'react'
const UseRef = () => {
let[number, setNumber] = useState(0)


const Inputref1 = useRef(null)
const Inputref2 = useRef(null)
const Inputref3 = useRef(null)


useEffect( () =>{
    console.log('component rendered')
 
})


function handleclick1(){
Inputref1.current.focus()
Inputref1.current.style.backgroundColor = 'yellow'
  Inputref2.current.style.backgroundColor = ''
        Inputref3.current.style.backgroundColor = ''
}

function handleclick2(){
    Inputref2.current.focus()
    Inputref2.current.style.backgroundColor = 'yellow'
      Inputref1.current.style.backgroundColor = ''
        Inputref3.current.style.backgroundColor = ''
    }

    function handleclick3(){
        Inputref3.current.focus()
        Inputref3.current.style.backgroundColor = 'yellow'
          Inputref2.current.style.backgroundColor = ''
        Inputref1.current.style.backgroundColor = ''
        }
  return (
    <div>
<button onClick={handleclick1}>Click me 1 !</button>
<input ref={Inputref1}/>

<button onClick={handleclick2}>Click me 2 !</button>
<input ref={Inputref2}/>

<button onClick={handleclick3}>Click me 3 !</button>
<input ref={Inputref3}/>
    </div>
    
  )
}

export default UseRef