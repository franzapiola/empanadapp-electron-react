import React from "react";
import { default as DefaultModal } from "react-modal";

import { Button } from "@atoms";

import "./styles.css";

const Modal = ({ className, children, isVisible, title, setModalVisible }) => {
  return (
    <DefaultModal
      className={`custom-modal-default ${className}`}
      overlayClassName="custom-modal-overlay"
      isOpen={isVisible}
    >
      <div className="custom-modal-header">
        <h3 className="custom-modal-title">{title}</h3>
        <Button
          styleType="transparent"
          className="modal-close-button"
          onClick={() => setModalVisible(false)}
        >
          X
        </Button>
      </div>
      <div className="custom-modal-content-wrapper">{children}</div>
    </DefaultModal>
  );
};

export default Modal;
