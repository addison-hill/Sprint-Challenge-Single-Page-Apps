import React from "react";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";

const CharacterCard = props => {
  return (
    
      <div className="card" key={props.id}>
        <h1>Name: {props.name}</h1>
      </div>
  
    
  )
}

export default CharacterCard

