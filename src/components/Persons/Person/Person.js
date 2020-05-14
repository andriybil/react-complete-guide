import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // console.log();
    this.inputElementRef.current.focus();
    console.log(this.context.authentificate);
  }

  render() {
    return (
      <Aux>
        {this.context.authentificate ? (
          <p>Authentificated!</p>
        ) : (
          <p>Please Log in</p>
        )}
        <p onClick={this.props.clicked}>
          Hello my name is {this.props.name} and I'm a {this.props.age} years
          old
        </p>
        <input
          type="text"
          // ref={(inputEl)=> {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
