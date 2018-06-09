import React from "react";
import "./MemoryCard.css";

const MemoryCard = props => (
  <div className="card">
    <div className="img-container">
      <img
        alt={props.name}
        src={props.image}
        onClick={() => props.pickCard(props.id)}
      />
    </div>
  </div>
);

export default MemoryCard;
