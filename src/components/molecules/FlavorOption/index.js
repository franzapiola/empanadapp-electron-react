import React from "react";
import "./styles.css";

import { Button } from "@atoms";
import useStore from "@state";

const FlavorOption = ({ name, amount }) => {
  const {
    username,
    counter: { increaseFlavorCount, decreaseFlavorCount },
  } = useStore();
  return (
    <div className="flavor-option-wrapper">
      <span>{name}</span>
      <div className="flavor-option-buttons">
        {Boolean(amount) && (
          <>
            <Button
              className="flavor-option-button"
              onClick={() =>
                decreaseFlavorCount({
                  participantName: username,
                  flavorName: name,
                })
              }
            >
              -
            </Button>
            <span className="flavor-option-amount-indicator">{amount}</span>
          </>
        )}
        <Button
          className="flavor-option-button"
          onClick={() =>
            increaseFlavorCount({ participantName: username, flavorName: name })
          }
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default FlavorOption;
