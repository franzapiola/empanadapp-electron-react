import React, { useEffect } from "react";
import { Container, Button } from "@atoms";
import useStore from "@state";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { username } = useStore();
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/counter");
  };

  useEffect(() => {
    if (username === "Usuario") {
      navigate("/");
    }
  }, [username, navigate]);
  return (
    <Container>
      <span>Hola, {username}</span>
      <span>¿Estás list@ para armar tu pedido de empanadas?</span>
      <Button onClick={onClick}>¡Sí! Comenzar</Button>
    </Container>
  );
};

export default Home;
