import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from '../ErrorBoundaty/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constuctor');
  }

  state = {
    persons: [
      { id: 'sds123', name: 'Andriy', age: 27 },
      { id: 'das', name: 'Lev', age: 28 },
      { id: 'wqe', name: 'Volodymyr', age: 23 },
    ],
    otherState: 'Some other data',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authentificated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);

    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons,
        changeCounter: prevState.changeCounter + 1, // RECOMENDET USED prevState
      };
    });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  toggleCockpit = () => {
    this.setState({
      showCockpit: !this.state.showCockpit,
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  loginHandler = () => {
    this.setState({ authentificated: true });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthentificate={this.state.authentificated}
        />
      );
    }

    return (
      <Aux>
        <button onClick={this.toggleCockpit}>Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authentificate: this.state.authentificated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit && (
            <Cockpit
              title={this.props.appTitle}
              clicked={this.togglePersonsHandler}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
            />
          )}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
