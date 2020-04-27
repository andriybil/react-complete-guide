import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Andriy', age: 27 },
      { name: 'Lev', age: 28 },
      { name: 'Volodymyr', age: 23 },
    ],
    otherState: 'Some other data',
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Lev', age: 27 },
        { name: 'Lev', age: 27 },
      ],
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Volodya', age: 27 },
        { name: event.target.value, age: 27 },
        { name: 'Volodya', age: 27 },
      ],
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi my name is Andriy.</h1>
        <p>This is realy worked</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Andriyko')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Andriyko!!!')}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My Hobbies: Dancing
        </Person>
      </div>
    )
  }
}

export default App
