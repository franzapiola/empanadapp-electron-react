import React from "react";
import { Container, Button } from "@atoms";
import useStore from "@state";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { username } = useStore();
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/counter");
  };

  return (
    <Container>
      <span>Hola, {username}</span>
      <span>¿Estás list@ para armar tu pedido de empanadas?</span>
      <Button onClick={onClick}>¡Sí! Comenzar</Button>
    </Container>
  );
};

export default Home;
