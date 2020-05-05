import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let assignedClass = [];
    let btnClass = '';
    if (props.showPersons) btnClass = classes.Red;
    if (props.persons.length <= 2) {
        assignedClass.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClass.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClass.join(' ')}>This is realy worked</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};
export default cockpit;
