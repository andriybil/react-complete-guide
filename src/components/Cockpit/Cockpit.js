import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    toggleBtnRef.current.click();
    console.log('[Cockpit.js] useEffect');
    // http request
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);

    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');

      //   clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] 2nd cleanup work in useEffect');
    };
  });

  // useEffect() >=1

  let assignedClass = [];
  let btnClass = '';

  if (props.showPersons) btnClass = classes.Red;
  if (props.personsLength <= 2) assignedClass.push(classes.red);
  if (props.personsLength <= 1) assignedClass.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClass.join(' ')}>This is realy worked</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>

       <button onClick={authContext.login}>Log in</button>
    </div>
  );
};
export default React.memo(cockpit);
