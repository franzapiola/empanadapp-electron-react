import React from "react";
import { Container } from "@atoms";
import {
  SingleParticipantCounter,
  AddFlavorModal,
  AddParticipantModal,
  ParticipantsTabs,
} from "@molecules";
import useStore from "@state";
import "./styles.css";

const Counter = () => {
  const {
    counter: { totalCount, participants, selectedParticipantIndex },
  } = useStore();
  const selectedParticipant = participants[selectedParticipantIndex];

  return (
    <Container className="counter-screen-container">
      <AddFlavorModal />
      <AddParticipantModal />
      <div className="counter-components-wrapper">
        <ParticipantsTabs />
        <SingleParticipantCounter participant={selectedParticipant} />
      </div>
      <div className="">
        <h1 className="counter-title">Tu pedido: {totalCount} empanadas</h1>
        {/* TODO: View summary */}
        <h2>Ver total</h2>
      </div>
    </Container>
  );
};

export default Counter;
