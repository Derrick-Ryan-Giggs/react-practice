import React from 'react'
import { useState } from 'react'
const ArrayUpdate = () => {
    const[foods, setFoods] = useState(['apple', 'orange', 'banana'])
    function handleAddfood(){
const newFood = document.getElementById('foodinput').value
document.getElementById('foodinput').value = ''

setFoods(f => [...f, newFood])
    }
    function handleRemoveFood(index){
setFoods(foods.filter((_, i) => i != index))
    }
  return (
    <div>
        <h2>List of food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={ () => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type='text' id='foodinput' placeholder='enter food name' />
        <button onClick={handleAddfood} >Add Food</button>
    </div>
  )
}

export default ArrayUpdate