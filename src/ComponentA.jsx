import React, { useState,createContext,  } from 'react'
import ComponentB from './ComponentB'

export const userContext = createContext()
const ComponentA = () => {

  const[user,setUser] = useState('derrick-ryan-giggs')
  return (
    <div className='box'>
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <userContext.Provider value={user}>
        <ComponentB  user = {user}/>
        </userContext.Provider>

    </div>
  )
}

export default ComponentA