import React from "react";

import useStore from "@state";
import { FlavorOption, AddFlavorButton } from "@molecules";

import "./styles.css";

const SingleParticipantCounter = () => {
  const {
    counter: { flavors, participants, selectedParticipantIndex },
  } = useStore();

  const { name: selectedParticipantName } =
    participants[selectedParticipantIndex] || {};

  return (
    <div className="single-participant-counter-wrapper">
      <div className="flavor-picker-container">
        {flavors.map(({ name, countByParticipants }, index) => (
          <FlavorOption
            key={name}
            name={name}
            amount={countByParticipants[selectedParticipantName]}
            index={index}
          />
        ))}
        <AddFlavorButton />
      </div>
    </div>
  );
};

export default SingleParticipantCounter;
