import React from 'react'
import './Person.css'

// class Person extends Component {
//   render() {
//     return <p> Hello my name is {this.props.name} and I'm a {this.props.age} years old</p>
//   };
// }

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Hello my name is {props.name} and I'm a {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person
