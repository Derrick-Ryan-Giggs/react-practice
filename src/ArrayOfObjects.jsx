import React from 'react'
import { useState } from 'react'



const ArrayOfObjects = () => {
    const [cars, setCars] = useState([])
    const [caryear, setCarYear] = useState(new Date().getFullYear())
    const [carmake, setCarMake] = useState('')
    const [carmodel, setCarModel] = useState('')


    function handleAddCar(){
const newCar = {year: caryear ,make: carmake , model: carmodel }
setCars(c => [...c, newCar])

setCarYear(new Date().getFullYear())
setCarMake('')
setCarModel('')


    }

    function handleRemoveCar(index){
setCars(c => c.filter((_, i) => i !== index))
    }

    function handleYearChange(e){
setCarYear(e.target.value)
    }

    function handleMakeChange(e){
setCarMake(e.target.value)
    }

    function handleModelChange(e){
setCarModel(e.target.value)
    }
  return (
    <div>
<h2>List of Car Objects</h2>
<ul>
{cars.map((car, index) => <li key = {index} onClick={() => handleRemoveCar(index)}> {car.year} {car.make} {car.model} </li>)}
</ul>
    <input type='number' value={caryear} onChange={handleYearChange} /> <br />
    <input type='text' value={carmake} onChange={handleMakeChange} placeholder='enter car make'/> <br />
    <input type='text' value={carmodel} onChange={handleModelChange} placeholder='enter car model'/> <br />
    <button onClick={handleAddCar}>Add Car</button>

    </div>
  )
}

export default ArrayOfObjects