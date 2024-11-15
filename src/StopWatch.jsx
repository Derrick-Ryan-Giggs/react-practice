import React   from 'react'
import { useState,useEffect,useRef } from 'react'
const StopWatch = () => {
    const[isRunning, setisRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdref = useRef(null)
    const startTimeref = useRef(0)

    useEffect( ()=> {
        
        if(isRunning){
            intervalIdref.current = setInterval( ()=> {
setElapsedTime(Date.now()- startTimeref.current)
            }, 10)
        }

return ()=> {
clearInterval(intervalIdref.current)
}

    }, [isRunning])

    function start(){
setisRunning(true)
startTimeref.current  = Date.now()- elapsedTime
//console.log(startTimeref.current)
    }

    function stop(){ //set isrunning to false to stop the stop watch
setisRunning(false)
    }

    function reset(){ //resets time
setElapsedTime(0)
setisRunning(false)
    }
    function formatTime(){
        let hours =  Math.floor(elapsedTime / (1000*60*60))
        let minutes = Math.floor(elapsedTime / (1000*60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let milliseconds = Math.floor(elapsedTime % 1000) /10

hours  = String(hours).padStart(2, '0')
minutes  = String(minutes).padStart(2, '0')
seconds  = String(seconds).padStart(2, '0')
milliseconds  = String(milliseconds).padStart(2, '0')

return `${hours} : ${minutes} : ${seconds} : ${milliseconds}0`
    }
  return (
    <div className='stopwatch'>

        <div className='display'>
            {formatTime()}

        </div>

<div className='controls'>
    <button className='start-btn' onClick={start}>Start</button>
    <button className='stop-btn' onClick={stop}>Stop</button>
    <button className='reset-btn' onClick={reset}>Reset</button>
  
</div>


    </div>
  )
}

export default StopWatch