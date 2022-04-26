import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Input } from "@atoms";
import useStore from "@state";

import "./styles.css";

const Welcome = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const { setUsername, counter } = useStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameInput === "") return;

    setUsername(usernameInput);
    counter.addParticipant(usernameInput);
    navigate("home");
  };

  return (
    <Container>
      <span>Bienvenido a EmpanadApp!</span>
      <span>Primero lo primero...</span>
      <span>¿Cómo te llamás?</span>
      <form className="input-group" onSubmit={handleSubmit}>
        <Input
          autoFocus
          onChange={(e) => setUsernameInput(e.target.value)}
          value={usernameInput}
          placeholder="Ingresa tu nombre..."
        />
      </form>
    </Container>
  );
};

export default Welcome;
