import React from 'react';
import Radium from 'radium';
import styled from 'styled-components';

import './Person.css';

// class Person extends Component {
//   render() {
//     return <p> Hello my name is {this.props.name} and I'm a {this.props.age} years old</p>
//   };
// }

const StyledDiv = styled.div`
  width: 60%;
  margin: 15px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
    },
  };
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        Hello my name is {props.name} and I'm a {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
