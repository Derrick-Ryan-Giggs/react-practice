import React from 'react'
import { useContext } from 'react'
import { userContext } from './ComponentA'
import ComponentD from './ComponentD'

const ComponentC = () => {

  const user = useContext(userContext)
  
  return (
    <div className='box'>
        <h1>Component C</h1>
        <h2>{`Hello again ${user}`}</h2>
<ComponentD user  />
    </div>
  )
}

export default ComponentC