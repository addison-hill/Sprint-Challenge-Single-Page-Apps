import React from "react";
// import { Card } from "reactstrap";


const CharacterCard = props => {
  return (
      <div className="char-card" key={props.id}>
        <h1>Name: {props.name}</h1>
        <p>Status: {props.status}</p>
        <p>Location: {props.location}</p>
      </div>
  
    
  )
}

export default CharacterCard

