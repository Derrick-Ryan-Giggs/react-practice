import propTypes from 'prop-types'
import React from "react"
const Student = (props) => {
  return (
    <div className="student">
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>isStudent : {props.isStudent ? "yes" : 'no'}</p>
    </div>
  )
}
Student.propTypes = {
name: propTypes.string,
age: propTypes.number,
isStudent: propTypes.bool
}

Student.defaultProps = {
    name :  'Guest',
    age : 0,
    isStudent: false

}
export default Student