import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Button, Input } from "@atoms";
import useStore from "@state";

import "./styles.css";

const Welcome = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const { setUsername, counter } = useStore();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (usernameInput === "") return;
    setUsername(usernameInput);
    counter.addParticipant(usernameInput);
    navigate("home");
    console.log("avanzar en el flujo ahora");
  };

  return (
    <Container>
      <span>Bienvenido a EmpanadApp!</span>
      <span>Primero lo primero...</span>
      <span>¿Cómo te llamás?</span>
      <div className="input-group">
        <Input
          autoFocus
          onChange={(e) => setUsernameInput(e.target.value)}
          value={usernameInput}
          placeholder="Ingresa tu nombre..."
        />
        <Button type="submit" onClick={handleSubmit}>
          Continuar
        </Button>
      </div>
    </Container>
  );
};

export default Welcome;
