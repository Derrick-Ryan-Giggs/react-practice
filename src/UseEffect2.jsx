import React from 'react'
import { useState,useEffect } from 'react'
const UseEffect2 = () => {

    const[width, setWidth]  = useState(window.innerWidth)
    const[height, setHeight]  = useState(window.innerHeight)

    useEffect( ()=> {
        window.addEventListener('resize', handleResize) // a callback to handle resize
        console.log('event listener added')

return()=> {
    window.removeEventListener('resize', handleResize)
    console.log('event listener removed')
}

    }, [])

    useEffect( ()=> {
        document.title = `size : ${width} * ${height}` 
    }, [width,height])



    function handleResize(){
setWidth(innerWidth)
setHeight(innerHeight)
    }
  return (
    <div>

<p>Window width : {width}px</p>
<p>Window height : {height}px</p>
    </div>
  )
}

export default UseEffect2