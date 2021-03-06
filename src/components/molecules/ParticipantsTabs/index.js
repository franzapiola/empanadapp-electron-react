import React from "react";

import { Button } from "@atoms";
import useStore, { useModalStore } from "@state";
import "./styles.css";

const ParticipantsTabs = () => {
  const {
    counter: { participants, selectParticipant, selectedParticipantIndex },
  } = useStore();
  const { toggleModal } = useModalStore();

  return (
    <div className="participants-tabs-wrapper">
      {participants.map(({ name }, index) => {
        const isSelected = index === selectedParticipantIndex;
        return (
          <Button
            key={index}
            className={`participant-tab-button ${
              isSelected
                ? "participant-tab-button-selected"
                : "participant-tab-button-not-selected"
            }`}
            onClick={() => selectParticipant(index)}
          >
            {name}
          </Button>
        );
      })}
      <Button
        className="participants-tab-add-participant-button"
        onClick={() => toggleModal("addParticipant", true)}
      >
        +
      </Button>
    </div>
  );
};

export default ParticipantsTabs;
