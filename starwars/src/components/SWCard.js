import React from "react";

export function SWCard(props) { 
  return (
    <div className="sw_card">
      <h2>Name: {props.name}</h2>
      <p>Mass: {props.mass}</p>
      <p>Height: {props.height}</p>
      <p>Gender: {props.gender}</p>
      <p>Birth Year: {props.year}</p>
    </div>
  );
}