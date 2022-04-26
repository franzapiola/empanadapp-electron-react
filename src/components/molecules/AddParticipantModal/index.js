import React, { useState } from "react";
import { Modal, Input } from "@atoms";
import useStore, { useModalStore } from "@state";
import "./styles.css";

const AddParticipantModal = () => {
  const { counter } = useStore();
  const { show, toggleModal } = useModalStore();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;

    counter.addParticipant(value);
    setValue("");
    toggleModal("addParticipant", false);
  };

  return (
    <Modal
      isVisible={show.addParticipantModal}
      setModalVisible={(v) => toggleModal("addParticipant", v)}
      title="Agregar a alguien más"
    >
      <form className="add-flavor-modal-input-group" onSubmit={handleSubmit}>
        <Input
          placeholder="Ingresa tu nombre..."
          autoFocus
          className="add-flavor-modal-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </Modal>
  );
};

export default AddParticipantModal;
