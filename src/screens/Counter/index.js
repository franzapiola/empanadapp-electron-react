import React from "react";
import { Container } from "@atoms";
import { SingleParticipantCounter, AddFlavorModal } from "@molecules";
import "./styles.css";

const Counter = () => {
  return (
    <Container className="counter-screen-container">
      <AddFlavorModal />
      <SingleParticipantCounter />
      <h1 className="counter-title">Tu pedido</h1>
    </Container>
  );
};

export default Counter;
