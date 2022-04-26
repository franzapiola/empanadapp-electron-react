import React from "react";
import { Button } from "@atoms";
import "./styles.css";

import { useModalStore } from "@state";

const AddFlavorButton = () => {
  const { toggleModal } = useModalStore();
  const openFlavorModal = () => toggleModal("addFlavor", true);
  return (
    <div className="flavor-option-wrapper add-flavor-button-wrapper">
      <Button onClick={openFlavorModal}>Agregar Sabor</Button>
    </div>
  );
};

export default AddFlavorButton;
