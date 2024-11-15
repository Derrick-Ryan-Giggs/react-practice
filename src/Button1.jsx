import React from 'react'
 //ONCLICK EVENT HANDLER
function Button1 ()  {
   /*
    let count = 0
    const handleClick = (name) => {
if(count < 3){
    count++;
    console.log(`${name}, YOU ARE A FAG ${count} TIMES/S`)
} else{
    console.log(`${name}, WHY ARE YOU GAY ?`)
}
    }
   
    // const handleClick2 = (name) => console.log(`${name} , YOU DROPPED YOUR GAY CARD`)

    */

    const handleClick = (e) => e.target.textContent = 'YOURE GAY '
  return (
    <button onDoubleClick={ (e) => handleClick (e)}>Click Me Fag</button>
  )
}

export default Button1