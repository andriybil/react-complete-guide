import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  // use this insted PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('[Persons.js] shouldComponentUpdate');
  //     if (
  //         nextProps.persons !== this.props.persons ||
  //         nextProps.clicked !== this.props.clicked ||
  //         nextProps.changed !== this.props.changed
  //     ) {
  //         return true;
  //     } else {
  //         return false;
  //     }
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    // console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) => {
      return (
        <Person
          clicked={this.props.clicked}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
