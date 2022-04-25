import React from "react";

import useStore from "@state";
import { FlavorOption } from "@molecules";

import "./styles.css";

const SingleParticipantCounter = () => {
  const {
    username,
    counter: { participants, flavors },
  } = useStore();

  const getAmount = (flavorName) => {
    const participant = participants.find(({ name }) => name === username);
    return (
      participant?.picks.find(({ name }) => name === flavorName)?.amount || 0
    );
  };
  return (
    <div className="single-participant-counter-wrapper">
      <div className="header">
        <h1 className="title">Pedido de {username}</h1>
      </div>
      <div className="flavor-picker-container">
        {flavors.map(({ name }) => (
          <FlavorOption name={name} amount={getAmount(name)} />
        ))}
      </div>
    </div>
  );
};

export default SingleParticipantCounter;
