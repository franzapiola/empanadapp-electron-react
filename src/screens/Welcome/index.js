import React from "react";
import "./styles.css";

import { Container } from "@atoms";

const Welcome = () => {
  return (
    <Container className="container-custom">
      <span>Bienvenido a EmpanadApp!</span>
      <span>Primero lo primero...</span>
      <span>¿Cómo te llamas?</span>
    </Container>
  );
};

export default Welcome;
