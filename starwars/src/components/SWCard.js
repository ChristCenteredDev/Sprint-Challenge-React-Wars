import React from "react";
import styled from 'styled-components';

const SWCardDiv = styled.div`
    width: 250px;
    margin: 20px 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: lightgrey;
`;

export function SWCard(props) { 
  return (
    <SWCardDiv>
      <h2>Name: {props.name}</h2>
      <h4>Mass: {props.mass}</h4>
      <h4>Height: {props.height}</h4>
      <h4>Gender: {props.gender}</h4>
      <h4>Birth Year: {props.year}</h4>
    </SWCardDiv>
  );
}