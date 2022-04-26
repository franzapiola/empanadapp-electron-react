import React, { useState } from "react";
import { Modal, Input, Button } from "@atoms";
import useStore, { useModalStore } from "@state";
import "./styles.css";

const AddFlavorModal = () => {
  const { counter } = useStore();
  const { show, toggleModal } = useModalStore();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;

    counter.addFlavor(value);
    setValue("");
    toggleModal("addFlavor", false);
  };

  return (
    <Modal
      isVisible={show.addFlavorModal}
      setModalVisible={(v) => toggleModal("addFlavor", v)}
      title="Agregar otro gusto"
    >
      <form className="add-flavor-modal-input-group" onSubmit={handleSubmit}>
        <Input
          placeholder="Ingresa el nombre..."
          className="add-flavor-modal-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </Modal>
  );
};

export default AddFlavorModal;
