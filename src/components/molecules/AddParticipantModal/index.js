import React, { useState } from "react";
import { Modal, Input, Button } from "@atoms";
import useStore, { useModalStore } from "@state";
import "./styles.css";

const AddParticipantModal = () => {
  const { counter } = useStore();
  const { show, toggleModal } = useModalStore();
  const [value, setValue] = useState("");

  const submit = () => {
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
      <form className="add-flavor-modal-input-group">
        <Input
          placeholder="Ingresa tu nombre..."
          autoFocus
          className="add-flavor-modal-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className="add-flavor-modal-button" onClick={submit} />
      </form>
    </Modal>
  );
};

export default AddParticipantModal;
