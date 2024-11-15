import React from 'react'
import { useContext } from 'react'
import { userContext } from './ComponentA'
import ComponentC from './ComponentC'
const ComponentB = () => {

  const user = useContext(userContext)
  return (
    <div className='box'>
        <h1>Component B</h1>
        <h2>{`Hello deep state ${user}`}</h2>
<ComponentC user  />
    </div>
  )
}

export default ComponentB