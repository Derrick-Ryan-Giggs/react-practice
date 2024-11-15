import React from 'react'
import { useState } from 'react'
const MyComponent = () => {
    const [name, setName]  = useState('GUEST')
    const [age, setAge]  = useState(0)
    const [isEmployed, setisEmployed] = useState(false)
    const updateName = () => {

        setName('reynold')
    }
    const incrementAge  = () => {
        setAge(age+2)
    }
    const toggleEmployedStatus = () => {
        setisEmployed(!isEmployed)
    }
  return (
    <div>
        <p>Name : {name}</p>
         <button onClick={incrementAge}>Set Name</button>

         <p>Age : {age}</p>
         <button onClick={incrementAge}>Set Name</button>

         <p>isEmployed: {isEmployed ? 'yes' : 'no'}</p>
         <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )
}

export default MyComponent