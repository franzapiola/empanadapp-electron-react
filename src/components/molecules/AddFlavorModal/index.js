import React, { useState } from "react";
import { Modal, Input, Button } from "@atoms";
import useStore, { useModalStore } from "@state";
import "./styles.css";

const AddFlavorModal = () => {
  const { counter } = useStore();
  const { show, toggleModal } = useModalStore();
  const [value, setValue] = useState("");

  const submit = () => {
    if (value === "") return;

    counter.addFlavor({ name: value, amount: 0 });
    setValue("");
    toggleModal("addFlavor", false);
  };

  return (
    <Modal
      isVisible={show.addFlavorModal}
      setModalVisible={(v) => toggleModal("addFlavor", v)}
      title="Agregar otro gusto"
    >
      <div className="add-flavor-modal-input-group">
        <Input
          placeholder="Ingresa el nombre..."
          className="add-flavor-modal-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className="add-flavor-modal-button" onClick={submit} />
      </div>
    </Modal>
  );
};

export default AddFlavorModal;
