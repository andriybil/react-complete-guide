import React, { Component } from 'react';

import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from '../ErrorBoundaty/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            { id: 'sds123', name: 'Andriy', age: 27 },
            { id: 'das', name: 'Lev', age: 28 },
            { id: 'wqe', name: 'Volodymyr', age: 23 },
        ],
        otherState: 'Some other data',
        showPersons: false,
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });
        const person = { ...this.state.persons[personIndex] };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons,
        });
    };

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({ persons });
    };

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons,
        });
    };

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle}
                    clicked={this.togglePersonsHandler}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                />
                {persons}
            </div>
        );
    }
}

export default App;
