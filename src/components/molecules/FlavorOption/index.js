import React from "react";
import "./styles.css";

import { Button } from "@atoms";
import useStore from "@state";

const FlavorOption = ({ name, amount, index }) => {
  const {
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
              onClick={() => decreaseFlavorCount(index)}
            >
              -
            </Button>
            <span className="flavor-option-amount-indicator">{amount}</span>
          </>
        )}
        <Button
          className="flavor-option-button"
          onClick={() => increaseFlavorCount(index)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default FlavorOption;
