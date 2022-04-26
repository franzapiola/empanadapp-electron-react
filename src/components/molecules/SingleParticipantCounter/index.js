import React from "react";

import useStore from "@state";
import { FlavorOption, AddFlavorButton } from "@molecules";

import "./styles.css";

const SingleParticipantCounter = () => {
  const {
    username,
    counter: { participants, flavors },
  } = useStore();

  const participant = participants.find(({ name }) => name === username);

  const getAmount = (flavorName) => {
    return (
      participant?.picks.find(({ name }) => name === flavorName)?.amount || 0
    );
  };

  return (
    <div className="single-participant-counter-wrapper">
      <div className="flavor-picker-container">
        {flavors.map(({ name: flavorName }) => (
          <FlavorOption
            key={flavorName}
            name={flavorName}
            amount={getAmount(flavorName)}
          />
        ))}
        <AddFlavorButton />
      </div>
    </div>
  );
};

export default SingleParticipantCounter;
